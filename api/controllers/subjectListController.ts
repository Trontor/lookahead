import { Request, Response } from "express";
import * as fs from "fs";
import path from "path";
import { SubjectPeriod } from "../../subject-utils/SubjectPeriods";

/**
 * Serves an appropriate subject list file given a year and study period.
 */
export const getSubjectList = (req: Request, res: Response) => {
  const { year, period } = req.query;
  // Get valid semester periods from enum
  const validPeriodValues = [
    "semester_1",
    "semester_2",
    "summer_term",
    "winter_term",
    "january",
    "february",
    "march",
    "april",
    "may",
  ];
  // This used to work in TypeScript strict mode, but it doesn't now.
  // Object.keys(SubjectPeriod).map(
  //   k => SubjectPeriod[k as any]
  // );
  // Guards to prevent path traversal (thanks @josephsurin)
  const validYear = !isNaN(parseInt(year as string));
  const validPeriod = validPeriodValues.some((val) => val === period);
  if (!validPeriod || !validYear) {
    // in the case this was an attempt at a path traversal attack
    res.status(404).send("Go Away");
    return;
  }
  // the subject list file should be stored in such a format
  const filename = `subjects_${year}_${period}.json`;
  // the path to the subject list file (assuming it exists)
  const subjectPath = path.resolve(
    __dirname,
    "../../subject-utils/subject-lists",
    filename
  );
  // check if the file exists, if so - send it back or return ENOENT
  fs.stat(subjectPath, (err) => {
    if (err) {
      res.send("ENOENT " + subjectPath);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.sendFile(subjectPath);
    }
  });
};
