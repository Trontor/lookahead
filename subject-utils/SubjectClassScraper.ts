import * as cheerio from "cheerio";
import moment = require("moment");
import { Subject } from "./Subject";
import { SubjectClass } from "./SubjectClass";
import { SubjectPeriod } from "./SubjectPeriods";
import { getHTML } from "./WebUtils";

export const scrapeClass = async (
  year: number,
  period: SubjectPeriod,
  code: string
) => {
  // tslint:disable-next-line:max-line-length
  const swsURL = `https://sws.unimelb.edu.au/${year}/Reports/List.aspx?objects=${code}&weeks=1-52&days=1-7&periods=1-56&template=module_by_group_list`;
  try {
    const htmlSource = await getHTML(swsURL);
    const subject: Subject = parseSubject(htmlSource, code, period);
    subject.classes.forEach(cls => {
      console.log(cls.toString());
    });
  } catch (err) {
    console.error(
      `Error trying to parse timetable for ${year}-${period}-${code} -> ${swsURL} -> ${err}`
    );
  }
};

/**
 * Parses the SWS HTML source to extract classes for a specific study period
 * @param html The source code to parse
 * @param period The study period of interest
 */
const parseSubject = (
  html: string,
  code: string,
  period: SubjectPeriod
): Subject => {
  // Load HTML into cheerio, ready for parsing
  const $ = cheerio.load(html);
  // Stores all parsed classes
  const classes: SubjectClass[] = [];
  // Subject period short code, e.g. SubjectPeriod.Semester_1 -> "SM1"
  const subjectPeriodShortCode = subjectPeriodToShortCode(period);
  const subject = new Subject(code, null);
  // Loop through each class (even outside specified study period) and parse
  $(".cyon_table > tbody > tr").each((_, element) => {
    const children = $(element).children();
    const classCode = children
      .eq(0)
      .text()
      .trim();
    const isWellFormedCode = classCode.split("/").length === 6;
    if (!isWellFormedCode) {
      console.warn(`Class Code: ${classCode} is not well formed!`);
      return;
    }
    if (!classCode.includes(subjectPeriodShortCode)) {
      return;
    }
    // Helper method to parse table cell text
    const getChild = (index: number) =>
      children
        .eq(index)
        .text()
        .trim();
    const description = getChild(1);
    const dayRaw = getChild(2);
    let day: number;
    // Convert day to int
    if (!SubjectClass.daysOfWeek.includes(dayRaw)) {
      console.error(`Day unknown for ${classCode}: ${day}`);
      day = -1;
    } else {
      day = SubjectClass.daysOfWeek.indexOf(dayRaw);
    }
    const start = getChild(3);
    const finish = getChild(4);
    const rawWeeks = getChild(6);
    const location = getChild(7);
    // Try parse week format
    let weeks: number[];
    try {
      weeks = parseWeeks(rawWeeks);
    } catch (err) {
      weeks = [];
      console.log(`Error parsing week data for ${classCode}\nError:${err}`);
    }
    // Parse start/finish as Moment objects
    const timeFormat = SubjectClass.timeFormat;
    const startMoment = moment(start, timeFormat);
    const finishMoment = moment(finish, timeFormat);
    const duration = moment.duration(finishMoment.diff(startMoment)).asHours();
    const parsedClass = new SubjectClass(
      subject,
      classCode,
      description,
      day,
      startMoment,
      finishMoment,
      duration,
      weeks,
      location
    );
    subject.addClass(parsedClass);
  });

  // At this point, subject contains all parsed classes
  return subject;
};

/**
 * Parses the weeks representation on the SWS system to a list of weeks
 * @param rawWeeks The raw week format from SWS
 */
const parseWeeks = (rawWeeks: string): number[] => {
  // ["10‑16","18‑22"]
  const weekParts = rawWeeks.split(",");
  const parsedWeeks: number[] = [];
  weekParts.forEach(part => {
    // Note: This is a non-breaking hypen, not a regular hypen!
    const nonBreakingHypen = "‑";
    // If the part ("10-16") contains a hyphen
    if (part.includes(nonBreakingHypen)) {
      const weekRanges = part.split(nonBreakingHypen);
      const startWeek = Number.parseInt(weekRanges[0], 10);
      const endWeek = Number.parseInt(weekRanges[1], 10);
      if (Number.isNaN(startWeek) || Number.isNaN(endWeek)) {
        throw new Error(
          `Hypenated weeks are not numbers startWeek: ${startWeek}, endWeek: ${endWeek}`
        );
      }
      for (let weekNumber = startWeek; weekNumber < endWeek; weekNumber++) {
        parsedWeeks.push(weekNumber);
      }
      parsedWeeks.push(endWeek);
    } else {
      // Else if the part is something like "15"
      const weekNumber = Number.parseInt(part, 10);
      if (Number.isNaN(weekNumber)) {
        throw new Error(
          `Single week is not a number weekNumber: ${weekNumber}`
        );
      }
      parsedWeeks.push(weekNumber);
    }
  });
  return parsedWeeks;
};

/**
 * Converts a SubjectPeriod to a short code format used by the SWS system
 * @param period The SubjectPeriod to convert
 */
const subjectPeriodToShortCode = (period: SubjectPeriod) => {
  switch (period) {
    case SubjectPeriod.Semester_1:
      return "SM1";
    case SubjectPeriod.Semester_2:
      return "SM1";
    case SubjectPeriod.Summer_Term:
      return "SUM";
    case SubjectPeriod.Winter_Term:
      return "WIN";
  }
};

scrapeClass(2019, SubjectPeriod.Semester_1, "COMP10001");
