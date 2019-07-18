export default class Timetable {
  /**
   * Represents a possible student Timetable
   * @param {*} classList A list of SubjectClass that comprise this timetable.
   */
  constructor(classList) {
    this.classList = classList;
    // Calculates the number of clashes in this timetable
    this.calculateClashes();
    // We've calculated clashes, we can remove the reserved events now!
    this.classList = this.classList.filter(
      cls => !(cls.id && cls.id === "reserved")
    );
    this.calculateDaySpans();
    // Keep track of the overall longest period of consecutive classes in a row.
    this.calculateLongestRun();
    // Calculate the amount of classtime per day
    this.calculateDayHours();
    // Calculate the amount of classtime per day excluding lectures
    this.calculateDayHoursExcludingLectures();
  }

  // Groups an array of objects by a specified object key
  groupByArray(xs, key) {
    return xs.reduce(function(rv, x) {
      let v = key instanceof Function ? key(x) : x[key];
      let el = rv.find(r => r && r.key === v);
      if (el) {
        el.values.push(x);
      } else {
        rv.push({
          key: v,
          values: [x]
        });
      }
      return rv;
    }, []);
  }

  calculateDayHoursExcludingLectures() {
    const classListExclusive = this.classList.filter(
      cls => !cls.description.toLowerCase().includes("lecture")
    );
    // Group all clases by their 'day'
    const dayGroups = this.groupByArray(classListExclusive, "day");
    const dayHoursExcludingLectures = {};
    for (const { key, values } of dayGroups) {
      // Loop through classes for this day
      dayHoursExcludingLectures[key] = values.reduce(
        (prev, curr) => (prev += curr.finish - curr.start),
        0
      );
    }
    this.dayHoursExcludingLectures = dayHoursExcludingLectures;
  }

  // Calculates the amount of hours of classtime for each day
  // i.e. {0: 6} means Monday has 6 hours of classtime
  calculateDayHours() {
    // Group all clases by their 'day'
    const dayGroups = this.groupByArray(this.classList, "day");
    const dayHours = {};
    for (const { key, values } of dayGroups) {
      // Loop through classes for this day
      dayHours[key] = values.reduce(
        (prev, curr) => (prev += curr.finish - curr.start),
        0
      );
    }
    this.dayHours = dayHours;
  }
  calculateLongestRun() {
    let longestRun = 0;
    // Group all clases by their 'day'
    const dayGroups = this.groupByArray(this.classList, "day");
    for (const { /*key,*/ values } of dayGroups) {
      const classes = values;
      const orderedClasses = classes.sort((a, b) => a.start - b.start);
      // Tracker variable for the last checked class, initial is start of da
      let lastClass = orderedClasses[0];
      let currentRun = lastClass.finish - lastClass.start;
      for (let i = 1; i < orderedClasses.length; i++) {
        const cls = orderedClasses[i];
        const duration = cls.finish - cls.start;
        const clashesWithLastClass = this.clashesWith(cls, lastClass);
        // Check the time between last class end and next class start
        const classBreak = cls.start - lastClass.finish;
        // '15 minute breaks' aren't breaks tbh - TODO: add customisation
        if (clashesWithLastClass) {
          continue;
        } else if (classBreak <= 15 / 60) {
          currentRun += duration + classBreak;
        } else {
          if (currentRun > longestRun) {
            longestRun = currentRun;
          }
          currentRun = duration;
        }
        lastClass = cls;
      }
      if (currentRun > longestRun) {
        longestRun = currentRun;
      }
    }
    this.longestRun = longestRun;
  }

  /**
   * Checks if two classes clash
   * @param {SubjectClass} classA
   * @param {SubjectClass} classB
   */
  clashesWith(classA, classB) {
    const aStart = classA.start;
    const aEnd = classA.finish;
    const bStart = classB.start;
    const bEnd = classB.finish;
    return classA.day === classB.day && (aStart < bEnd && bStart < aEnd);
  }

  calculateDaySpans() {
    const daySpans = {};
    // Calculate day spans
    for (const cls of this.classList) {
      const start = cls.start;
      const finish = cls.finish;
      let span = daySpans[cls.day];
      if (!span) {
        daySpans[cls.day] = { start, finish };
      } else {
        if (start < span.start) {
          span.start = start;
        }
        if (finish > span.finish) {
          span.finish = finish;
        }
      }
    }
    this.daySpans = daySpans;
    let totalDaySpan = 0;
    let longestSpan = 0;
    for (const [key, span] of Object.entries(daySpans)) {
      const hoursDiff = span.finish - span.start;
      if (hoursDiff > longestSpan) {
        longestSpan = hoursDiff;
      }
      totalDaySpan += hoursDiff;
    }
    this.totalDaySpan = totalDaySpan;
    this.longestSpan = longestSpan;
  }

  calculateClashes() {
    let allClashes = 0;
    const classListCopy = [...this.classList];
    for (let i = classListCopy.length - 1; i >= 0; i--) {
      const clsA = classListCopy[i];
      for (let j = 0; j < classListCopy.length; j++) {
        const clsB = classListCopy[j];
        // Make sure we don't check the same class
        if (clsA === clsB || !clsA || !clsB) {
          continue;
        }
        if (this.clashesWith(clsA, clsB)) {
          classListCopy.splice(classListCopy.indexOf(clsB), 1);
          allClashes++;
        }
      }
    }
    this.clashes = allClashes;
  }
}
