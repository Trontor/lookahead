import Timetable from "./Timetable";
import OptimisationType, { LONGEST_RUN } from "./optimisationTypes";
import {
  sortByDayAvoid,
  sortByDaysPresent,
  sortByDaySpan,
  sortByLongestRun
} from "./comparators";
class Optimiser {
  PERMUTATION_THRESHOLD = 250000;
  RANDOM_POPULATION = 25000;

  /**
   * Initialises a new timetable optimiser, given the subject list
   * @param {*} subjects
   */
  constructor(subjects) {
    this.subjects = subjects;
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
   */
  generateAndOptimise(optimisations) {
    // Calculate possible permutations
    const permutations = this.possiblePermutations();
    const random = permutations > this.PERMUTATION_THRESHOLD;
    console.log("Timetables to Generate:", permutations);
    if (random) {
      console.log(
        "Too many timetables to bruteforce, switching to random generation."
      );
    }
    // Start performance tracking
    const t0 = performance.now();
    const { setPool, streamPool } = this.generateClassPools();
    // Generate all combinations of the set pool
    const streamCombinations = this.allCombinationsOf(streamPool);
    // If there are stream combinations, we go through each possibility
    const overallCombinations = [];
    for (const streamCombination of streamCombinations) {
      // Copy setPool
      const currentSetPool = [...setPool];
      // Add current combination to the set pool
      streamCombination.flat().forEach(cls => currentSetPool.push([cls]));
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
    // Sort timetables
    timetables.sort((a, b) =>
      optimisations.reduce(
        (acc, optimisation) => acc + this.applyOptimisation(optimisation, a, b),
        0
      )
    );
    // Stop performance tracking
    const t1 = performance.now();
    const time = t1 - t0;
    return { timetables, time };
  }

  applyOptimisation(optimisation, a, b) {
    const data = optimisation.data;
    switch (optimisation.type) {
      case OptimisationType.AVOID_CLASHES:
        return a.clashes - b.clashes;
      case OptimisationType.CRAM_CLASSES:
        return sortByDaysPresent(a, b) || sortByDaySpan(a, b);
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
    for (const [subjectCode, { data }] of subjects) {
      if (!data) {
        continue;
      }
      const subject = data;
      const { _regularClasses, _mandatoryClasses, _streamContainers } = subject;
      const classTypes = this.getClassTypes(subject);
      // Create a mapping of type: [classes] for each type
      // for example: "W": [classA, classB]
      const typeClassMappings = {};
      for (const type of Object.keys(classTypes)) {
        // Filter all classes in the current subject for this type
        const matchingClasses = _regularClasses.filter(
          cls => cls.classCode.type === type
        );
        setPool.push(matchingClasses);
        typeClassMappings[type] = matchingClasses;
      }
      // Add each mandatory class to its own set in the pool
      for (const mandatoryClass of _mandatoryClasses) {
        setPool.push([mandatoryClass]);
      }
      // Now, deal with Streams
      for (const { type, streams, name } of _streamContainers) {
        // console.log(type);
        const streamTypeClasses = [];
        for (const stream of streams) {
          streamTypeClasses.push(stream.classes);
        }
        streamPool.push(streamTypeClasses);
      }
      allClassTypes[subjectCode] = typeClassMappings;
    }
    return { setPool, streamPool };
  }
}

export default Optimiser;
