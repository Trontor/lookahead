import { SubjectPeriod } from "./SubjectPeriods";

/**
 * Stores basic information about a subject
 */
export class SubjectInfo {
  public readonly code: string;
  public readonly name: string;
  public readonly semester: SubjectPeriod;
  /**
   * Initialises a new SubjectInfo
   * @param code The subject code, e.g. COMP10001
   * @param name The name of the subject, e.g. Foundations of Computation
   * @param semester The subject period this subject is offered in
   */
  constructor(code: string, name: string, semester: SubjectPeriod) {
    this.code = code;
    this.name = name;
    this.semester = semester;
  }
}
