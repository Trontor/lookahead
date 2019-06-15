import { Request, Response } from "express";
import * as fs from "fs";
import path from "path";

/**
 * Serves an appropriate subject list file given a year and study period.
 */
export const getSubjectList = (req: Request, res: Response) => {
  // The subject list file should be stored in such a format
  const filename = `subjects_${req.query.year}_${req.query.period}.json`;
  // The path to the subject list file (assuming it exists)
  const subjectPath = path.resolve(
    __dirname,
    "../../subject-utils/subject-lists",
    filename
  );
  // Check if the file exists, if so - send it back or return ENOENT
  fs.stat(subjectPath, err => {
    if (err) {
      res.send("ENOENT");
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.sendFile(subjectPath);
    }
  });
};
