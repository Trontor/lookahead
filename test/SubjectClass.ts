import { expect } from "chai";
import "mocha";
import moment = require("moment");
import SubjectClass from "../subject-utils/SubjectClass";
describe("Subject Class", () => {
  it("initialising class with expected data", () => {
    // constructor params
    const code = "MAST10006/U/1/SM2/P01/48";
    const description = "Practical 1";
    const location = "PAR-David Caro-Podium 202";
    const day = 0;
    const start = moment("17:15", "HH:mm");
    const finish = moment("18:15", "HH:mm");
    const weeks = [31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43];
    const newClass = new SubjectClass(
      null,
      code,
      description,
      day,
      start,
      finish,
      weeks,
      location
    );
    expect(newClass.toString()).to.equal(
      "MAST10006/U/1/SM2/P01/48: Monday 17:15 -> 18:15 at PAR-David Caro-Podium 202"
    );
  });
});
