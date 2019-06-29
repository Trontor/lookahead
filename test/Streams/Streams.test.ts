import { expect } from "chai";
import "mocha";
import Subject from "../../subject-utils/Subject";
import { parseSubject } from "../../subject-utils/SubjectClassScraper";
import { SubjectPeriod } from "../../subject-utils/SubjectPeriods";
import streamedSubjectJson from "./streamed-subject.json";

describe("Class Streams", () => {
  let subject: Subject;
  before(() => {
    subject = parseSubject(
      streamedSubjectJson.html,
      streamedSubjectJson.code,
      SubjectPeriod.Semester_1
    );
  });
  it("parse simple Streamed Subject from HTML", () => {
    expect(subject.streams.length).to.equal(1);
    expect(subject.streams[0].streams.length).to.equal(2);
  });
  it("stream type identified", () => {
    expect(subject.streams[0].type).to.equal("L");
  });
  it("stream name identified", () => {
    expect(subject.streams[0].name).to.equal("Lecture");
  });
});
