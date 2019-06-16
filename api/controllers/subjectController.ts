import { Request, Response } from "express";
import * as fs from "fs";
import path from "path";

/**
 * Serves an appropriate subject list file given a year and study period.
 */
export const getSubject = (req: Request, res: Response) => {
  const year = req.query.year.trim();
  const period = req.query.period.trim();
  const code = req.query.code.trim();
};
