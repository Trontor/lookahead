import { Moment } from "moment";
import { Subject } from "./Subject";

export class SubjectClass {
  public static readonly daysOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
  public static readonly timeFormat = "HH:mm";
  public readonly codes: string[];
  public locations: string[];
  constructor(
    public readonly subject: Subject,
    code: string,
    public readonly description: string,
    public readonly day: number,
    public readonly start: Moment,
    public readonly finish: Moment,
    public readonly duration: number,
    public readonly weeks: number[],
    location: string
  ) {
    this.codes = [code];
    this.locations = [location];
  }
  public toString = (): string => {
    return `${this.codes.join(",")}: ${this.start.format(
      SubjectClass.timeFormat
    )} -> ${this.start.format(
      SubjectClass.timeFormat
    )} at ${this.locations.join(",")}`;
  }
}
