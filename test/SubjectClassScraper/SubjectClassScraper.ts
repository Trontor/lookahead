import { expect } from "chai";
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

    expect(subject.regularClasses.length).to.equal(10);
    expect(subject.mandatoryClasses.length).to.equal(2);
    expect(subject.streams.length).to.equal(0);
    expect(subject.irregularClasses.length).to.equal(0);
  });
});
