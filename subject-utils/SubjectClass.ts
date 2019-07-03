import moment = require("moment");
import Subject from "./Subject";

interface IClassCode {
  type: string;
  number: number;
}

/**
 * Represents a class at the University of Melbourne as per the SWS system
 */
export default class SubjectClass {
  // Internal representation of day ordering, useful for mapping to and from int
  public static readonly daysOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
  // The time format used by the SWS timetable system to represent times
  public static readonly timeFormat = "HH:mm";
  // Verifies if a class code is well formed, i.e. COMP10001/U/1/SM1/W01/55
  public static isWellFormedCode = (code: string): boolean =>
    code.split("/").length === 6
  // Subject code
  public subjectCode: string;
  // All class codes that occur at this class time
  public codes: string[];
  // All locations that occur at this class time
  public locations: string[];
  // Information about the class specifics, ie. T01
  public readonly classCode: IClassCode;
  // The stream number for this class
  public readonly streamNumber: number;
  // The type of class 'Mandatory', 'Variable', 'Stream' or unknown ''
  public type: string = "";
  // The time length of the class
  private readonly duration: number;
  /**
   * Initialises a new SubjectClass, a representation of a university class
   * @param subject The subject this class is for
   * @param code The class code, e.g. COMP10001/U/1/SM1/W01/55
   * @param description The name of the class, e.g. "Workshop 1"
   * @param day The day the class occurs as per index of daysOfWeek (0=Monday)
   * @param start The time the class starts
   * @param finish The time the class finishes
   * @param weeks The weeks this class runs during the semester
   * @param location The location where the class is held
   */
  constructor(
    subject: Subject,
    code: string,
    public readonly description: string,
    public readonly day: number,
    public readonly start: number,
    public readonly finish: number,
    public readonly weeks: number[],
    location: string
  ) {
    this.subjectCode = subject.code;
    this.codes = [code];
    this.locations = [location];
    // this.duration = moment.duration(finish.diff(start)).asHours();
    // Parse parts of class code
    const classCodeRaw = code.split("/")[4].trim();
    this.classCode = {
      number: parseInt(classCodeRaw.replace(/\D/g, ""), 10),
      type: classCodeRaw.replace(/[^a-zA-Z]+/g, "")
    };
    this.streamNumber = parseInt(code.split("/")[5], 10);
  }

  /**
   * Merges a given class with this one
   */
  public mergeClass = (subjectClass: SubjectClass) => {
    // Merge locations, removing duplicates
    this.locations = [
      ...new Set([...this.locations, ...subjectClass.locations])
    ];
    this.codes = this.codes.concat(subjectClass.codes);
  }

  public toString = (): string => {
    const parseHoursPastMidnight = (num: number) =>
      moment()
        .startOf("day")
        .add(num, "hour")
        .format("HH:mm");
    return `${this.codes.join(", ")}: ${
      SubjectClass.daysOfWeek[this.day]
    } ${parseHoursPastMidnight(this.start)} -> ${parseHoursPastMidnight(
      this.finish
    )} at ${this.locations.join(", ")}`;
  }
}
