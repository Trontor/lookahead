import * as cheerio from "cheerio";
import { writeFile } from "fs";
import * as path from "path";
import request from "request";
import { SubjectPeriod } from "../SubjectPeriods";

/**
 * Stores basic information about a subject
 */
export class SubjectInfo {
  public readonly code: string;
  public readonly name: string;
  public readonly offered: SubjectPeriod[];
  /**
   * Initialises a new SubjectInfo
   * @param code The subject code, e.g. COMP10001
   * @param name The name of the subject, e.g. Foundations of Computation
   * @param semester The subject period this subject is offered in
   */
  constructor(code: string, name: string, offered: SubjectPeriod[]) {
    this.code = code;
    this.name = name;
    this.offered = offered.filter(subjectPeriod => subjectPeriod != null);
  }
}

/**
 * Retrieves the HTML source code for a given URL.
 * @param url The url to retrieve the HTML source code for
 */
const getHTML = (url: string): Promise<string> => {
  // Sets up request so it uses a browser-like user agent
  const customHeaderRequest = request.defaults({
    headers: {
      "User-Agent":
        // tslint:disable-next-line:max-line-length
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
    }
  });
  return new Promise((resolve, reject) => {
    // Attempt to retrieve HTML
    customHeaderRequest.get(url, (error, response, body) => {
      // If error, pass to promise reject
      if (error) {
        reject(error);
      }
      // Send back HTML if successful
      resolve(body);
    });
  });
};

type BaseURL = string;

/**
 *  Generates a base search url given the year and study period
 * @param year The year to search for
 * @param studyPeriod The study period to search for
 */
const getBaseURL = (year: number, studyPeriod: SubjectPeriod): BaseURL =>
  // tslint:disable-next-line:max-line-length
  `https://handbook.unimelb.edu.au/search?query=&year=${year}&types%5B%5D=subject&sort=external_code%7Casc&study_periods%5B%5D=${studyPeriod.toLowerCase()}`;

/**
 * Returns the number of pages given a base search URL
 */
const getPageCount = async (baseURL: BaseURL) => {
  const html: string = await getHTML(baseURL);
  const $ = cheerio.load(html);
  const pageCountDirty = $(".search-results__paginate > div > span").text();
  const pageCountClean = parseInt(pageCountDirty.replace(/^\D+/g, ""), 10);
  return pageCountClean;
};

/**
 * Parses subjects on a given page provided a base search URL
 * @param url The base url to search with
 * @param page The search result page to search
 */
const scrapePage = async (
  url: BaseURL,
  page: number
): Promise<SubjectInfo[]> => {
  const pageURL: string = `${url}&page=${page}`;
  const pageHTML = await getHTML(pageURL);
  const pageSubjects: SubjectInfo[] = [];
  const $ = cheerio.load(pageHTML);
  // The subject list parent element
  const list = $(".search-results__accordion > li");
  // Loop through the list and store subject information
  list.each((index, element) => {
    const code = $(element)
      .find(".search-results__accordion-code")
      .text()
      .trim();
    const name = $(element)
      .find(".search-results__accordion-title")
      .text()
      .replace(code, "")
      .trim();
    const details = $(element)
      .find(".search-results__accordion-detail")
      .text()
      .trim();
    const leftBound = "Offered:";
    const rightBound = "Year:";
    const offered = details.substring(
      details.lastIndexOf(leftBound) + leftBound.length,
      details.lastIndexOf(rightBound)
    );
    const subjectPeriods: SubjectPeriod[] = offered.split(",").map(item => {
      item = item.trim();
      switch (item) {
        case "Semester 1":
          return SubjectPeriod.Semester_1;
        case "Semester 2":
          return SubjectPeriod.Semester_2;
        case "Winter Term":
          return SubjectPeriod.Winter_Term;
        case "Summer Term":
          return SubjectPeriod.Summer_Term;
        default:
          // console.log("Unknown Offering Period:" + item);
          return;
      }
    });
    pageSubjects.push(new SubjectInfo(code, name, subjectPeriods));
  });
  return pageSubjects;
};

/**
 * Scrapes all the subjects offered on a specific year and subject period
 * @param year The year to scrape
 * @param period The subject period to scrape
 */
const scrapeSubjects = async (year: number, period: SubjectPeriod) => {
  const baseURL = getBaseURL(year, period);
  // Get the number of pages to search
  const pageCount = await getPageCount(baseURL);
  console.log(
    `There are ${pageCount} pages to scrape from ${decodeURI(baseURL)}`
  );
  // A list of scrape promises we must resolve to finish this subject scrape
  const scrapePromises: Array<Promise<SubjectInfo[]>> = [];
  for (let page = 0; page < pageCount; page++) {
    const promise = scrapePage(baseURL, page);
    scrapePromises.push(promise);
  }
  const allSubjects = await Promise.all(scrapePromises);
  return [].concat(...allSubjects);
};

//
// Driver code below
//

const years = [2018, 2019];
const studyPeriods = Object.keys(SubjectPeriod);

years.forEach(year => {
  studyPeriods.forEach(periodStr => {
    const period: SubjectPeriod = periodStr as SubjectPeriod;
    const outputFileName = `subjects_${year}_${period.toLowerCase()}.json`;
    const outputPath = path.resolve(
      __dirname,
      "../subject-lists",
      outputFileName
    );
    scrapeSubjects(year, period).then(subjects => {
      writeFile(outputPath, JSON.stringify(subjects), error => {
        if (error) {
          console.error(`Could not save file, error encountered!\n${error}`);
        }
      });
    });
  });
});
