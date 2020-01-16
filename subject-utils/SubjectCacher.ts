import fs from "fs";
import { promisify } from "util";
import Subject from "./Subject";
import { SubjectPeriod } from "./SubjectPeriods";
const readFile = promisify(fs.readFile);

const ENABLE_CACHING = true;
const SUBJECT_CACHE_DIRECTORY = "./subject-cache";
const CACHE_EXPIRY_HOURS = 12;

const datePattern = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
interface ISubjectCache {
  timestamp: Date;
  subject: Subject;
}

const initialiseCacheDirectory = () => {
  if (!fs.existsSync(SUBJECT_CACHE_DIRECTORY)) {
    fs.mkdirSync(SUBJECT_CACHE_DIRECTORY);
  }
};

const getSubjectCachePath = (
  year: number,
  period: SubjectPeriod,
  code: string
) => `${SUBJECT_CACHE_DIRECTORY}/${code}_${period}_${year}.json`;

export const getCachedSubject = (
  year: number,
  period: SubjectPeriod,
  code: string
): Promise<Subject> => {
  return new Promise((resolve, reject) => {
    const cachePath = getSubjectCachePath(year, period, code);
    readFile(cachePath, "utf8")
      .then(val => {
        const cached: ISubjectCache = JSON.parse(
          val,
          // Reviver function to convert timestamp to Date()
          (key: any, value: any) => {
            const isDate = typeof value === "string" && datePattern.exec(value);
            return isDate ? new Date(value) : value;
          }
        );
        const timeDiff =
          Math.abs(new Date().getTime() - cached.timestamp.getTime()) /
          (1000 * 60 * 60);
        // Cached for long enough, cache has expired
        if (timeDiff > CACHE_EXPIRY_HOURS) {
          resolve(null);
          return;
        }
        resolve(cached.subject);
      })
      .catch(err => {
        resolve(null);
      });
  });
};

export const cacheSubject = (
  year: number,
  period: SubjectPeriod,
  subject: Subject
) => {
  // Helper function
  const empty = (array: any) => !Array.isArray(array) || !array.length;
  const emptySubject =
    empty(subject.irregularClasses) &&
    empty(subject.mandatoryClasses) &&
    empty(subject.regularClasses) &&
    empty(subject.streams);
  if (!ENABLE_CACHING || emptySubject) {
    if (emptySubject) {
      console.log("Did not cache " + subject.code + " as it is empty.");
    }
    return;
  }
  initialiseCacheDirectory();
  const cachePath = getSubjectCachePath(year, period, subject.code);
  const cacheObject: ISubjectCache = {
    subject,
    timestamp: new Date()
  };
  fs.writeFile(cachePath, JSON.stringify(cacheObject, null, 2), err => {
    if (!err) {
      return;
    }
    console.error(`Could not cache to ${cachePath}\n${err.message}`);
  });
};
