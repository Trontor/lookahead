import { Request, Response } from "express";
import {
  cacheSubject,
  getCachedSubject
} from "../../subject-utils/SubjectCacher";
import { scrapeSubject } from "../../subject-utils/SubjectClassScraper";
import { SubjectPeriod } from "../../subject-utils/SubjectPeriods";

/**
 * Serves an appropriate subject list file given a year and study period.
 */
export const getSubject = async (req: Request, res: Response) => {
  const year = req.query.year.trim();
  const period = req.query.period.trim();
  const code = req.query.code.trim();

  // Check cache
  const cachedSubject = await getCachedSubject(year, period, code);
  if (cachedSubject) {
    res.json(cachedSubject);
    return;
  }

  if (SubjectPeriod[period] === null) {
    res
      .status(400)
      .json({ error: "Invalid Query Syntax", message: "Period not defined" });
  } else {
    const subject = await scrapeSubject(year, period as SubjectPeriod, code);
    cacheSubject(year, period, subject);
    res.json(subject);
  }
};
