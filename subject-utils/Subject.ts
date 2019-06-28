import Stream from "./Stream";
import StreamContainer from "./StreamContainer";
import SubjectClass from "./SubjectClass";
import { SubjectPeriod } from "./SubjectPeriods";

/**
 * Represents a subject at the University of Melbourne
 */
export default class Subject {
  get classes(): SubjectClass[] {
    return this.classList;
  }
  private classList: SubjectClass[] = [];
  private irregularClasses: SubjectClass[] = [];
  private mandatoryClasses: SubjectClass[] = [];
  private regularClasses: SubjectClass[] = [];
  private streamContainers: StreamContainer[] = [];

  /**
   * Intialises a new Subject
   * @param code The subject code as provied by The University of Melbourne
   */
  constructor(
    private readonly code: string,
    private readonly period: SubjectPeriod
  ) {}

  /**
   * Adds classes to the subject
   * @param classes The classes to add to the subjects
   */
  public addClassList(classes: SubjectClass[]) {
    this.classList = classes;
    this.mergeClasses();
    // From now-on, don't modify the original classList
    this.identifyIrregularClasses();
    this.extractStreams();
    this.removeUnnecessaryStreams();
    this.extractMandatoryClasses();
    // Now, regular classes are those that aren't mandatory and aren't in a stream
    this.regularClasses = this.classList.filter(
      cls =>
        !this.mandatoryClasses.includes(cls) &&
        !this.irregularClasses.includes(cls)
    );
    const sortClasses = (a: SubjectClass, b: SubjectClass) =>
      a.day - b.day || a.start.diff(b.start);
    this.mandatoryClasses.sort(sortClasses);
    this.regularClasses.sort(sortClasses);
  }

  private extractMandatoryClasses() {
    const classTypeCounts = this.getClassTypeCounts();
    for (const cls of this.classList) {
      if (classTypeCounts[cls.classCode.type] === 1) {
        console.log(cls.codes[0] + " is mandatory.");
        this.mandatoryClasses.push(cls);
      }
    }
  }

  // Merges streams that occur at the same date/time and are the same type
  private mergeStreams = () => {
    let mergeCount = 0;
    // Loop through all stream containers, e.g. Lectures container
    for (const streamContainer of this.streamContainers) {
      // Loop through all streams within the container
      for (let i = 0; i < streamContainer.streams.length; i++) {
        const stream = streamContainer.streams[i];
        // Only dare merge streams with the same number of classes
        const candidateStreams = streamContainer.streams.filter(cand => {
          return (
            cand !== stream && cand.classes.length === stream.classes.length
          );
        });
        // Check each candidate stream and its viability to merge
        for (let j = candidateStreams.length - 1; j > 0; j--) {
          const candidate = candidateStreams[j];
          // Toggle to merge this candidate stream
          let doMerge = true;
          // Helper method to sort streams by className
          const sortByDescription = (a: SubjectClass, b: SubjectClass) =>
            a.description.localeCompare(b.description);
          // Result should be something like [Workshop 1, Workshop 2, ...]
          // Needed to maintain consistency between adjacent class comparisons
          candidate.classes.sort(sortByDescription);
          stream.classes.sort(sortByDescription);
          // Check for a time/date discrepancy that would disallow mergin
          for (let k = 0; k < stream.classes.length; k++) {
            const classA = stream.classes[k];
            const classB = candidate.classes[k];
            if (
              classA.day !== classB.day ||
              !classA.start.isSame(classB.start) ||
              !classA.finish.isSame(classB.finish)
            ) {
              doMerge = false;
            }
          }
          if (!doMerge) {
            continue;
          }
          mergeCount++;
          // Merge the streams and merge classes
          for (let k = 0; k < stream.classes.length; k++) {
            const classA = stream.classes[k];
            const classB = candidate.classes[k];
            classA.mergeClass(classB);
          }
          console.log(
            `Merged stream ${candidate.streamNumbers} with ${
              stream.streamNumbers
            } in ${this.code}`
          );
          // Merge stream numbers
          stream.streamNumbers = stream.streamNumbers.concat(
            candidate.streamNumbers
          );
          // Remove stream from StreamContainer
          const removeIndex = streamContainer.streams.indexOf(candidate);
          if (removeIndex > -1) {
            streamContainer.streams.splice(removeIndex, 1);
          }
        }
      }
    }
  }

  /**
   * Some StreamContainers can have streams with like 1 AND 2 classes in them,
   * probably a uni error? See Workshops for COMP10001 for reference, some W01's dont
   * have an accompanying W02 :'(
   */
  private removeOddStreams = () => {
    // Go through each StreamCountainer to prune odd streams
    for (const streamContainer of this.streamContainers) {
      let maxClassLength = streamContainer.streams[0].classes.length;
      // Used to track when there are varied stream sizes
      let variedCounts = false;
      for (const stream of streamContainer.streams) {
        if (stream.classes.length !== maxClassLength) {
          // Indicate the existence of mismatched stream sizes
          variedCounts = true;
          // Update max stream length to new max
          if (stream.classes.length > maxClassLength) {
            maxClassLength = stream.classes.length;
          }
        }
      }
      // If there are varied class lengths, remove the ones with less than max
      if (variedCounts) {
        // Filter out streams with < maxClassLength
        const newStreams = streamContainer.streams.filter(
          stream => stream.classes.length === maxClassLength
        );
        console.log(
          `Removed ${streamContainer.streams.length -
            newStreams.length} odd streams, leaving ${newStreams.length}.`
        );
        streamContainer.streams = newStreams;
      }
    }
  }

  private getClassTypeCounts() {
    const typeInfo: { [type: string]: number } = {};
    this.classList.forEach(cls => {
      const classCode = cls.classCode;
      if (!(classCode.type in typeInfo)) {
        typeInfo[classCode.type] = 0;
      }
      typeInfo[classCode.type] += 1;
    });
    return typeInfo;
  }

  // Removes
  private removeSingleStreams() {
    // Loop through each StreamContainer, e.g. Practical, Lecture
    for (const streamContainer of this.streamContainers) {
      // Checks if there are Streams with > 1 class
      const onlyOneClassInStreams = !streamContainer.streams.some(
        con => con.classes.length !== 1
      );
      // If there is one stream in the container, it is probably mandatory,
      // like a lecture.
      if (streamContainer.streams.length === 1) {
        const mandatoryClasses = streamContainer.streams[0].classes;
        mandatoryClasses.forEach(mandatoryClass => {
          console.log(mandatoryClass.description + " is mandatory.");
          this.mandatoryClasses.push(mandatoryClass);
        });
        // Remove this entire StreamContainer from the list
        this.streamContainers.splice(
          this.streamContainers.indexOf(streamContainer)
        );
      } else if (onlyOneClassInStreams) {
        // There is only one class in the streams
        for (const stream of streamContainer.streams) {
          // Move all classes to the original classList
          this.classList.push(stream.classes[0]);
        } // Remove this entire StreamContainer from the list
        this.streamContainers.splice(
          this.streamContainers.indexOf(streamContainer)
        );
      }
    }
  }

  private removeUnnecessaryStreams = () => {
    this.mergeStreams();
    this.removeOddStreams();
    this.removeSingleStreams();
  }

  private extractStreams = () => {
    // Get classcodes that are a part of a stream
    const streamClassTypes: string[] = this.identifyStreamClassTypes();
    // Copy original classList so deletions don't occur
    const streamedClasses = this.classList
      .slice()
      .reverse()
      .filter(cls => streamClassTypes.includes(cls.classCode.type));
    for (const cls of streamedClasses) {
      const type = cls.classCode.type;
      let container = this.streamContainers.find(con => con.type === type);
      // If the stream container doesn't exist, create it
      if (container === undefined) {
        container = new StreamContainer(type);
        this.streamContainers.push(container);
      }
      container.addStreamClass(cls);
      this.classList.splice(this.classList.indexOf(cls), 1);
    }
  }

  /**
   * Finds out what are the class types that are likely in a stream
   * e.g. if it returns [L, T] then lectures and tutorials are likely streamed
   * for this subject.
   */
  private identifyStreamClassTypes = () => {
    const codes: string[] = [];
    // Compare each class to eachother to find potential streams
    /* For example, classA may be T01/12, and if there exists another T0X/12,
     but not T01, then it might be T02/12, meaning T is probably streamed! */
    this.classList.forEach(classA => {
      this.classList.forEach(classB => {
        if (classA === classB) {
          return;
        }
        const sameType = classA.classCode.type === classB.classCode.type;
        const differentTypeNumber =
          classA.classCode.number !== classB.classCode.number;
        const sameStreamNumber = classA.streamNumber === classB.streamNumber;
        if (sameType && sameStreamNumber && differentTypeNumber) {
          if (!codes.includes(classA.classCode.type)) {
            codes.push(classA.classCode.type);
          }
        }
      });
    });
    return codes;
  }

  /**
   * Identifies classes that occur less/more than 12 weeks in Sem 1/2
   */
  private identifyIrregularClasses = () => {
    this.irregularClasses = [];
    if (
      this.period !== SubjectPeriod.Semester_1 &&
      this.period !== SubjectPeriod.Semester_2
    ) {
      return;
    }
    // At least 9 weeks of teaching for Semesters 1/2. Why 9? idk
    const regularWeekCount = 9;
    this.classList.forEach(cls => {
      const weekCount = cls.weeks.length;
      // Check if class at least 9 weeks
      if (weekCount < regularWeekCount) {
        // If it doesn't, it's irregular
        this.irregularClasses.push(cls);
        this.classList.splice(this.classList.indexOf(cls), 1);
      }
    });
  }

  /**
   * Checks if two classes can be merged together
   */
  private canMergeClasses = (
    classA: SubjectClass,
    classB: SubjectClass
  ): boolean => {
    // Don't try merge the current class with itself
    if (classA === classB) {
      return false;
    }
    // Merge classes of the same type, at the same time, different locations
    const sameDay = classA.day === classB.day;
    const sameTime =
      classA.start.isSame(classB.start) && classA.finish.isSame(classB.finish);
    const sameType = classA.classCode.type === classB.classCode.type;
    // Checks if the class number is the same, e.g. W01 === W01
    const sameNumber = classA.classCode.number === classB.classCode.number;
    // Gets all classes in the same stream as classA or classB
    const sameStreamClasses = this.classList.filter(
      cls =>
        // Don't check for classA or classB, but check classes with same type
        cls !== classA &&
        cls !== classB &&
        // Check if same type of class (Tutorial, Workshop, Lecture)
        cls.classCode.type === classA.classCode.type &&
        // Check if the stream number matches either classA or classB
        (cls.streamNumber === classA.streamNumber ||
          cls.streamNumber === classB.streamNumber)
    );
    const inAStream = sameStreamClasses.length > 0;
    return !inAStream && sameDay && sameTime && sameType && sameNumber;
  }

  /**
   * Merges classes together if they are at the same time and are the same type
   */
  private mergeClasses = () => {
    // Copy so deletion doesn't effect real array
    const classListCopy = this.classList.slice().reverse();
    let totalMerged = 0;
    // Loop through array front to back
    for (const currentClass of classListCopy) {
      // Loop through array back to front
      for (let i = classListCopy.length - 1; i > 0; i--) {
        const compareCls = classListCopy[i];
        if (this.canMergeClasses(currentClass, compareCls)) {
          // The index of the class which will receive the merge
          const mergeIndex = this.classList.indexOf(currentClass);
          // Merge the class
          this.classList[mergeIndex].mergeClass(compareCls);
          // The index in the original classList to remove
          const removeIndex = this.classList.indexOf(compareCls);
          // Remove from the original classList
          this.classList.splice(removeIndex, 1);
          // Remove from the array copy aswell
          classListCopy.splice(classListCopy.indexOf(compareCls), 1);
          // Increment total merged counter to reflect recent merge
          totalMerged++;
        }
      }
    }
    console.log(`Merged ${totalMerged} classes.`);
  }
}
