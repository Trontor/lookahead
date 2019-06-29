import { expect } from "chai";
import { readFile } from "fs";
import "mocha";
import { parseSubject } from "../../subject-utils/SubjectClassScraper";
import { SubjectPeriod } from "../../subject-utils/SubjectPeriods";
import simpleSubjectJson from "./simple-subject.json";

describe("Subject Scraper", () => {
  it("Parse simple Subject from HTML", () => {
    const subject = parseSubject(
      simpleSubjectJson.html,
      simpleSubjectJson.code,
      SubjectPeriod.Semester_1
    );
    expect(subject).to.have.property("code", simpleSubjectJson.code);
    expect(subject).to.have.property("period", SubjectPeriod.Semester_1);
    expect(subject)
      .to.have.property("irregularClasses")
      .that.deep.equals([]);
    expect(subject.classes.length).to.equal(10);
    expect(subject.mandatoryClasses.length).to.equal(2);
  });
});
