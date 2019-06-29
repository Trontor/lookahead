import { expect } from "chai";
import "mocha";
import {
  parseSubject,
  subjectPeriodToShortCode
} from "../../subject-utils/SubjectClassScraper";
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

  it("Convert Subject Period to Short Code", () => {
    expect(subjectPeriodToShortCode(SubjectPeriod.Semester_1)).to.equal("SM1");
    expect(subjectPeriodToShortCode(SubjectPeriod.Semester_2)).to.equal("SM2");
    expect(subjectPeriodToShortCode(SubjectPeriod.Summer_Term)).to.equal("SUM");
    expect(subjectPeriodToShortCode(SubjectPeriod.Winter_Term)).to.equal("WIN");
  });
});
