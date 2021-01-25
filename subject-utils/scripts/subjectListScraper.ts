import * as cheerio from "cheerio";
import { writeFile } from "fs";
import * as path from "path";
import { SubjectPeriod } from "../SubjectPeriods";
import { getHTML } from "../WebUtils";

/**
 * Stores basic information about a subject
 */
export class SubjectInfo {
  public readonly code: string;
  public readonly name: string;
  public readonly offered: SubjectPeriod[];
  public readonly online: boolean;
  /**
   * Initialises a new SubjectInfo
   * @param code The subject code, e.g. COMP10001
   * @param name The name of the subject, e.g. Foundations of Computation
   * @param semester The subject period this subject is offered in
   * @param online Whether the subject is online only
   */
  constructor(code: string, name: string, offered: SubjectPeriod[], online:boolean) {
    this.code = code;
    this.name = name;
    this.offered = offered.filter((subjectPeriod) => subjectPeriod != null);
    this.online = online;
  }
}

type BaseURL = string;

/**
 *  Generates a base search url given the year and study period
 * @param year The year to search for
 * @param studyPeriod The study period to search for
 * @param online Whether the subject is online only
 */
const getBaseURL = (year: number, studyPeriod: SubjectPeriod, online:boolean)  =>{

  let queryParameters = [
    'types[]=subject',
    `year=${year}`,
    `study_periods[]=${studyPeriod.toLowerCase()}`,
    'subject_level_type[]=all',
    'area_of_study[]=all',
    'org_unit[]=all',
  ];
  // not necessary to include the =all parameters

  const campusAttendanceModes = online ? ['Online'] :
      ['Dual-Delivery', 'Off+Campus'];

  // now make it a valid query param
  campusAttendanceModes.map(mode => 'campus_and_attendance_mode[]=' + mode);

  // and append the attendance mode params to the initial array of parameters
  queryParameters = queryParameters.concat(campusAttendanceModes);

  // now construct final URI by joining all the parameters
  return 'https://handbook.unimelb.edu.au/search?' +
      queryParameters.reduce((acc, param) => acc + '&' + param);

};

/**
 * Returns the number of pages given a base search URL
 */
const getPageCount = async (baseURL: BaseURL) => {
  const html: string = await getHTML(baseURL);
  const $ = cheerio.load(html);
  const pageCountDirty = $(".search-results__paginate > span").text();
  const pageCountClean = parseInt(pageCountDirty.replace(/^\D+/g, ""), 10);
  return pageCountClean;
};

/**
 * Parses subjects on a given page provided a base search URL
 * @param url The base url to search with
 * @param page The search result page to search
 */
const scrapeSearchResultsPage = async (
  year: number,
  url: BaseURL,
  page: number,
  online: boolean
): Promise<SubjectInfo[]> => {
  const pageURL: string = `${url}&page=${page}`;
  const pageHTML = await getHTML(pageURL);
  const pageSubjects: SubjectInfo[] = [];
  const $ = cheerio.load(pageHTML);
  // The subject list parent element
  const list = $(".search-results__list > li");
  // Loop through the list and store subject information
  list.each((index, element) => {
    const code = $(element).find(".search-result-item__code").text().trim();
    const name = $(element)
      .find(".search-result-item__name > h3")
      .text()
      .replace(code, "")
      .trim();
    const details = $(element)
      .find(".search-result-item__meta-primary")
      .text()
      .trim();

    const leftBound = "Offered";
    const rightBound = year.toString();
    const offered = details.substring(
      details.lastIndexOf(leftBound) + leftBound.length,
      details.lastIndexOf(rightBound)
    );
    const subjectPeriods: SubjectPeriod[] = offered
      .trim()
      .split(",")
      .filter((s) => s.trim() !== "")
      .map((item) => {
        item = item.trim();
        switch (item) {
          case "Semester 1":
          case "Semester 1 (Early-Start)":
          case "Semester 1 (Extended)":
            return SubjectPeriod.Semester_1;
          case "Semester 2":
          case "Semester 2 (Early-Start)":
          case "Semester 2 (Extended)":
            return SubjectPeriod.Semester_2;
          case "Winter Term":
            return SubjectPeriod.Winter_Term;
          case "Summer Term":
            return SubjectPeriod.Summer_Term;
          case "January":
            return SubjectPeriod.January;
          case "February":
            return SubjectPeriod.February;
          case "March":
            return SubjectPeriod.March;
          case "April":
            return SubjectPeriod.April;
          case "May":
            return SubjectPeriod.May;
          case "June":
            return SubjectPeriod.June;
          case "July":
            return SubjectPeriod.June;
          case "August":
            return SubjectPeriod.August;
          case "September":
            return SubjectPeriod.September;
          case "October":
            return SubjectPeriod.October;
          case "November":
            return SubjectPeriod.November;
          default:
            console.log(
              `Subject: ${code} has an unknown offering period: ${item} `
            );
            return;
        }
      })
      .filter((p) => p !== undefined);
    pageSubjects.push(new SubjectInfo(code, name, subjectPeriods, online));
  });
  return pageSubjects;
};

/**
 * Scrapes all the subjects offered on a specific year and subject period
 * @param year The year to scrape
 * @param period The subject period to scrape
 * @param online Whether to scrape online or offline subjects
 */
const scrapeSubjects = async (year: number, period: SubjectPeriod, online: boolean) => {
  const baseURL = getBaseURL(year, period, online);
  // Get the number of pages to search
  const pageCount = await getPageCount(baseURL);
  console.log(
    `There are ${pageCount} pages to scrape from ${decodeURI(baseURL)}`
  );
  // A list of scrape promises we must resolve to finish this subject scrape
  const scrapePromises: Array<Promise<SubjectInfo[]>> = [];
  for (let page = 0; page <= pageCount; page++) {
    const promise = scrapeSearchResultsPage(year, baseURL, page, online);
    scrapePromises.push(promise);
  }
  const allSubjects = await Promise.all(scrapePromises);
  return [].concat(...allSubjects);
};

//
// Driver code below
//

const years = [2021];
const studyPeriods = Object.keys(SubjectPeriod);

years.forEach((year) => {
  studyPeriods.forEach((periodStr) => {
    const period: SubjectPeriod = periodStr as SubjectPeriod;
    const outputFileName = `subjects_${year}_${period.toLowerCase()}.json`;
    const outputPath = path.resolve(
      __dirname,
      "../subject-lists",
      outputFileName
    );

    // first scrape all subjects that are only offline ("Dual-Deliver", "Off+Campus") subjects,
    // then scrape all subjects that are online ("Online"),
    // then concat subject lists into one array
    // alternative: if we want separate online/offline subject json files, make an outer for each loop through [true,false]
    scrapeSubjects(year, period, false).then((offlineSubjects) => {
      scrapeSubjects(year, period, true).then((onlineSubjects) => {
        writeFile(outputPath, JSON.stringify([].concat(offlineSubjects,onlineSubjects), null, 1), (error) => {
          if (error) {
            console.error(`Could not save file, error encountered!\n${error}`);
          }
        });
      });
    });
  });
});
