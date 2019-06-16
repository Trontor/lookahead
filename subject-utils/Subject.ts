import { SubjectClass } from "./SubjectClass";

/**
 * Represents a subject at the University of Melbourne
 */
export class Subject {
  constructor(
    private readonly code: string,
    private classList: SubjectClass[]
  ) {
    if (!classList) {
      this.classList = [];
    } else {
      this.classList = classList;
    }
  }
  get classes(): SubjectClass[] {
    return this.classList;
  }
  public addClass = (newClass: SubjectClass) => {
    this.classList.push(newClass);
  }
}
