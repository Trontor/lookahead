import {Request, Response} from 'express';
import {cacheSubject, getCachedSubject} from '../../subject-utils/SubjectCacher';
import {scrapeSubject} from '../../subject-utils/SubjectClassScraper';
import {SubjectPeriod} from '../../subject-utils/SubjectPeriods';

/**
 * Serves an appropriate subject list file given a year and study period.
 */
export const getSubject = async (req: Request, res: Response) => {
  const year = parseInt((req.query.year as string).trim());
  const period = (req.query.period as string).trim() as SubjectPeriod;
  const code = (req.query.code as string).trim();

  // check cache
  const cachedSubject = await getCachedSubject(year, period, code);
  if (cachedSubject) {
    // found in cache, return cached version
    res.json(cachedSubject);
    return;
  }
  // check if the given subject period is valid
  if (!(typeof period === 'string') && Object.values(SubjectPeriod).includes(period)) {
    res.status(400).json({error: 'Invalid Query Syntax', message: 'Period not defined'});
  } else {
    // scrape subject information (as it does not exist in cache)
    const subject = await scrapeSubject(year, period as SubjectPeriod, code);
    // now store the subject information in cache
    cacheSubject(year, period, subject);
    // send the subject back
    res.json(subject);
  }
};
