import Timetable from './Timetable';
import OptimisationType from './optimisationTypes';
import {
  sortByDayAvoid,
  sortByDaysPresent,
  sortByTotalDaySpan,
  sortByLongestRun,
  sortByDaySpanExcludingLectures,
} from './comparators';
import optimisationTypes from './optimisationTypes';

export const PERMUTATION_THRESHOLD = 175000;
class Optimiser {
  RANDOM_POPULATION = 25000;

  /**
   * Initialises a new timetable optimiser, given the subject list
   * @param {*} subjects
   */
  constructor(subjects, removeWeirdStreams) {
    // Copy subjects, to allow for internal modifications
    this.subjects = JSON.parse(JSON.stringify(subjects));
    if (removeWeirdStreams) {
      this.removeWeirdStreams();
    }
  }
  removeWeirdStreams() {
    const subjectCodes = Object.keys(this.subjects);
    for (const subjectCode of subjectCodes) {
      const subject = this.subjects[subjectCode].data;
      const streamContainers = subject._streamContainers;
      // and each stream container
      for (const container of streamContainers) {
        // then multiply the number of permutations by the number of streams
        const matchingWeirdContainers = subject._weirdStreamContainers.filter(
          w => w.name === container.name
        );
        if (matchingWeirdContainers.length === 0) {
          continue;
        }
        const weirdContainer = matchingWeirdContainers[0];
        const newStreams = container.streams.filter(
          s => s.classes.length === weirdContainer.maxCount
        );
        container.streams = newStreams;
      }
    }
  }

  // Calculates the number of unique timetables that can be generated
  possiblePermutations() {
    const subjectCodes = Object.keys(this.subjects);
    // If no subjects, no permutations
    if (subjectCodes.length === 0) {
      return 0;
    }
    let permutations = 1;
    // Go through each subject
    for (const subjectCode of subjectCodes) {
      const subject = this.subjects[subjectCode].data;
      const streamContainers = subject._streamContainers;
      // and each stream container
      for (const container of streamContainers) {
        const streamCount = container.streams.length;
        // then multiply the number of permutations by the number of streams
        if (streamCount > 0) permutations *= streamCount;
      }
      // now, go through each class type, e.g. {'W1': 16} means 16 Workshop 1's
      const classCodeTypes = this.getClassTypes(subject);
      for (const type of Object.keys(classCodeTypes)) {
        // then multiply by the number of classes to choose from of this type/
        permutations *= classCodeTypes[type];
      }
    }
    return permutations;
  }

  /**
   * Generates a list of timetables for the subjects provided, and optimises it
   * given a list of optimisations to apply, in order.
   * @param {Array} optimisations An array of
   * {type: OptimisationType, data: Object} that describes the optimisations to
   * apply (in order) to the generated timetable list.
   * @param {Array} reserved An array of FullCalendar Event Object's that are to
   * be considered when optimising.
   */
  generateAndOptimise(optimisations, reserved, threshold = PERMUTATION_THRESHOLD) {
    // Calculate possible permutations
    const permutations = this.possiblePermutations();
    const random = permutations > threshold;
    console.log('Timetables to Generate:', permutations);
    if (optimisations.some(o => o.type === optimisationTypes.IGNORE_WEIRD_STREAMS)) {
      this.removeWeirdStreams();
    }
    if (random) {
      console.log('Too many timetables to bruteforce, switching to random generation.');
    }
    // Start performance tracking
    const t0 = performance.now();
    const {setPool, streamPool} = this.generateClassPools();
    // Add reserved events to their own set in the set pool
    for (const reservedEvent of [...reserved]) {
      const start = reservedEvent.start;
      const finish = reservedEvent.end;
      const transformedEvent = {
        id: reservedEvent.id,
        start: start.getHours() + start.getMinutes() / 60,
        finish: finish.getHours() + finish.getMinutes() / 60,
        day: start.getDay() - 1,
      };
      setPool.push([transformedEvent]);
    }
    // Generate all combinations of the set pool
    const streamCombinations = this.allCombinationsOf(streamPool);
    // If there are stream combinations, we go through each possibility
    const overallCombinations = [];
    for (const streamCombination of streamCombinations) {
      // Copy setPool
      const currentSetPool = [...setPool];
      // Implementation of flat to please IE/Edge
      const flatSingle = arr => [].concat(...arr);
      // Add current combination to the set pool
      flatSingle(streamCombination).forEach(cls => currentSetPool.push([cls]));
      // Different generation mechanism for random timetable generation
      if (random) {
        const section = this.RANDOM_POPULATION / streamCombinations.length;
        for (let i = 0; i < section; i++) {
          const classes = [];
          currentSetPool.forEach(set => {
            const randomIndex = Math.floor(Math.random() * set.length);
            classes.push(set[randomIndex]);
          });
          overallCombinations.push(classes);
        }
      } else {
        const currentCombinations = this.allCombinationsOf(currentSetPool);
        overallCombinations.push(...currentCombinations);
      }
    }
    // Convert each combination to a timetable
    const timetables = [];
    overallCombinations.forEach(comb => timetables.push(new Timetable(comb)));
    console.log('Applying the following optimisations:', optimisations);

    // Sort timetables
    timetables.sort((a, b) =>
      optimisations.reduce(
        (acc, optimisation) => acc || this.applyOptimisation(optimisation, a, b),
        0
      )
    );
    // Stop performance tracking
    const t1 = performance.now();
    const time = t1 - t0;
    console.log(timetables);

    return {timetables, time};
  }

  //we just need to change this to do each subject individually
  applyRestrictions(earliestStart, latestFinish, deliveryPreference) {
    /**
     * General Methodology:
     * The idea is to apply the restrictions as requested, and if the
     * restrictions end up with a subject completely missing a classtype,
     * such as a Tutorial 1 - add a violating class in order to
     * have a functioning timetable.
     * 1. Get class types before
     * 2. Go through each _regularClasses and prune classes
     * 3. Get class types after
     * 4. If types after != types before, we cut off an entire class type,
     *    invalid timetable, add last deleted class
     * 5. Go through each _streamContainers, get stream type counts before
     * 6. Prune streams from container
     * 7. Get stream type counts after
     * 8. If stream types counts after != stream type counts before,
     *    invalid timetable, add last deleted stream
     * 9. Otherwise, valid without adding violating class!
     */

    // This is the function that governs whether a class is violating in terms of
    // both time restrictions and delivery mode restrictions
    const classViolation = cls => {
      const timeViolation = cls.start < earliestStart || cls.finish > latestFinish
      const isOnline = cls.online;
      switch(deliveryPreference) {
        case "inPerson":
          return timeViolation || isOnline;
        case "online":
          return timeViolation || !isOnline;
        default: //no preference
          return timeViolation;
      }
    };

    // Copy subjects, so modifications don't affect class-scope variable
    const subjects = JSON.parse(JSON.stringify(this.subjects));
    console.log(
      `Applying Restrictions\nMin Start: ${earliestStart}\nLatest Finish:${latestFinish}`
    );
    // Tracks whether or not these time restrictions are valid
    for (const [, value] of Object.entries(subjects)) {
      const subject = value.data;
      const subjectName = value.name;
      console.log(subjectName);
      // (1) Get class type counts before
      const beforeTypes = this.getClassTypes(subject);
      const beforeTypeCount = Object.keys(this.getClassTypes(subject)).length;
      console.log('\tRegular Classes');
      console.log(`\t\tBefore (${subjectName}):`,  beforeTypes, beforeTypeCount, [...subject._regularClasses]);
      // (2) Now begin pruning
      const regClasses = subject._regularClasses;
      let lastDeletedClass;
      for (let i = regClasses.length - 1; i >= 0; i--) {
        const cls = regClasses[i];
        if (classViolation(cls)) {
          lastDeletedClass = cls;
          regClasses.splice(regClasses.indexOf(cls), 1);
        }
      }
      // (3) Get class type counts after
      const afterTypes = this.getClassTypes(subject);
      const afterTypeCount = Object.keys(afterTypes).length;
      console.log(`\t\tAfter (${subjectName}):`, afterTypes, afterTypeCount, regClasses);
      // (4) Check for invalid restriction
      if (afterTypeCount !== beforeTypeCount) {
        console.error('😠 [Class Pruning] Invalid Restrictions');
        //Here we add back some violating subject to ensure that a timetable can still be made
        regClasses.push(lastDeletedClass)
      }
      const containers = subject._streamContainers;
      console.log('\tStream Containers');
      // Go through each streamContainer
      for (const container of containers) {
        console.log(`\t  ${container.type}`);
        const {streams} = container;
        // (5) Get before stream counts
        const beforeStreamCount = streams.length;
        console.log(`\t\tBefore (${subjectName}): ${beforeStreamCount}`, [...streams]);
        // Go through each stream, looking to prune
        let lastDeletedStream;
        for (let i = streams.length - 1; i >= 0; i--) {
          const stream = streams[i];
          const violatesRestriction = stream.classes.some(classViolation);
          if (violatesRestriction) {
            // (6) Prune stream
            lastDeletedStream = stream;
            streams.splice(i, 1);
          }
        }
        // (6) Get before stream counts
        const afterStreamCount = streams.length;
        console.log(`\t\tAfter (${subjectName}): ${afterStreamCount}`, streams);
        if (afterStreamCount === 0) {
          console.error('😠 [Stream Pruning] Invalid Restrictions');
          console.log(
            `Time restrictions have cut off all stream possibilities for ${subject.code}.`
          );
          //Here we add back some stream to ensure that a timetable can still be made
          //TODO: could set this up so the stream added is most similar to time restrictions
          streams.push(lastDeletedStream);
        }
      }
    }
    // (9) Valid!
    this.subjects = subjects;
    return true;
  }

  applyOptimisation(optimisation, a, b) {
    const data = optimisation.data;
    switch (optimisation.type) {
      case OptimisationType.AVOID_CLASHES:
        return a.clashes - b.clashes;
      case OptimisationType.CRAM_CLASSES:
        return sortByDaysPresent(a, b) || sortByTotalDaySpan(a, b);
      case OptimisationType.CRAM_CLASSES_SKIP_LECTURES:
        return (
          sortByDaySpanExcludingLectures(a, b) ||
          sortByDaysPresent(a, b) ||
          sortByTotalDaySpan(a, b)
        );
      case OptimisationType.AVOID_DAYS:
        return sortByDayAvoid(data, a, b);
      case OptimisationType.LONGEST_RUN:
        return sortByLongestRun(data, a, b);
      default:
        return 0;
    }
  }

  getClassTypes(subject) {
    let typeInfo = {};
    if (!subject) {
      return null;
    }
    for (const cls of subject._regularClasses) {
      const classCode = cls.classCode.type;
      if (!(classCode in typeInfo)) {
        typeInfo[classCode] = 0;
      }
      typeInfo[classCode] += 1;
    }
    return typeInfo;
  }

  allCombinationsOf(elements) {
    if (!Array.isArray(elements)) {
      throw new TypeError();
    }
    var end = elements.length - 1,
      result = [];
    function addTo(curr, start) {
      var first = elements[start],
        last = start === end;
      for (var i = 0; i < first.length; ++i) {
        var copy = curr.slice();
        copy.push(first[i]);
        if (last) {
          result.push(copy);
        } else {
          addTo(copy, start + 1);
        }
      }
    }
    if (elements.length) {
      addTo([], 0);
    } else {
      result.push([]);
    }
    return result;
  }

  generateClassPools() {
    let setPool = [];
    let streamPool = [];
    const allClassTypes = {};
    // Looping through arrays created from Object.keys
    const subjects = Object.entries(this.subjects);
    for (const [subjectCode, {data}] of subjects) {
      if (!data) {
        continue;
      }
      const subject = data;
      const {_regularClasses, _mandatoryClasses, _streamContainers} = subject;
      const classTypes = this.getClassTypes(subject);
      // Create a mapping of type: [classes] for each type
      // for example: "W": [classA, classB]
      const typeClassMappings = {};
      for (const type of Object.keys(classTypes)) {
        // Filter all classes in the current subject for this type
        const matchingClasses = _regularClasses.filter(cls => cls.classCode.type === type);
        setPool.push(matchingClasses);
        typeClassMappings[type] = matchingClasses;
      }
      // Add each mandatory class to its own set in the pool
      for (const mandatoryClass of _mandatoryClasses) {
        setPool.push([mandatoryClass]);
      }
      // Now, deal with Streams
      for (const {/* type , */ streams /* ,name */} of _streamContainers) {
        // console.log(type);
        const streamTypeClasses = [];
        for (const stream of streams) {
          streamTypeClasses.push(stream.classes);
        }
        streamPool.push(streamTypeClasses);
      }
      allClassTypes[subjectCode] = typeClassMappings;
    }
    return {setPool, streamPool};
  }
}

export default Optimiser;
