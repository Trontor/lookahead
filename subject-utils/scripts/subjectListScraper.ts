import * as cheerio from 'cheerio';
import {writeFile} from 'fs';
import * as path from 'path';
import {SubjectPeriod} from '../SubjectPeriods';
import {getHTML} from '../WebUtils';

/**
 * Stores basic information about a subject
 */
export class SubjectInfo {
  public readonly code: string;
  public readonly name: string;
  public readonly offered: SubjectPeriod[];
  public online: boolean;
  /**
   * Initialises a new SubjectInfo
   * @param code The subject code, e.g. COMP10001
   * @param name The name of the subject, e.g. Foundations of Computation
   * @param semester The subject period this subject is offered in
   * @param online Whether the subject is online only
   */
  constructor(code: string, name: string, offered: SubjectPeriod[], online: boolean) {
    this.code = code;
    this.name = name;
    this.offered = offered.filter(subjectPeriod => subjectPeriod !== null);
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
const getBaseURL = (year: number, studyPeriod: SubjectPeriod, online: boolean) => {
  const queryParameters = [
    'types[]=subject',
    `year=${year}`,
    `study_periods[]=${studyPeriod.toLowerCase()}`,
    'subject_level_type[]=all',
    'area_of_study[]=all',
    'org_unit[]=all',
    'sort=external_code%7Casc',
    `campus_and_attendance_mode[]=${online ? 'Online' : 'all'}`,
  ];

  // now construct final URI by joining all the parameters
  return (
    'https://handbook.unimelb.edu.au/search?' +
    queryParameters.reduce((acc, param) => acc + '&' + param)
  );
};

/**
 * Returns the number of pages given a base search URL
 */
const getPageCount = async (baseURL: BaseURL) => {
  const html: string = await getHTML(baseURL);
  const $ = cheerio.load(html);
  const pageCountDirty = $('.search-results__paginate > span').text();
  if (pageCountDirty === '') {
    return 1;
  }
  const pageCountClean = parseInt(pageCountDirty.replace(/^\D+/g, ''), 10);
  return pageCountClean;
};

/**
 * Parses subjects on a given page provided a base search URL
 * @param url The base url to search with
 * @param page The search result page to search
 * @param subjectMap A mapping between a subject code and a SubjectInfo instance
 */
const scrapeSearchResultsPage = async (
  year: number,
  url: BaseURL,
  page: number,
  subjectMap: Record<string, SubjectInfo>,
  online: boolean
): Promise<SubjectInfo[]> => {
  const pageURL: string = `${url}&page=${page}`;
  const pageHTML = await getHTML(pageURL);
  const pageSubjects: SubjectInfo[] = [];
  const $ = cheerio.load(pageHTML);
  // The subject list parent element
  const list = $('.search-results__list > li');
  // Loop through the list and store subject information
  list.each((index, element) => {
    const code = $(element).find('.search-result-item__code').text().trim();
    const name = $(element).find('.search-result-item__name > h3').text().replace(code, '').trim();
    const details = $(element).find('.search-result-item__meta-primary').text().trim();

    const leftBound = 'Offered';
    const rightBound = year.toString();
    const offered = details.substring(
      details.lastIndexOf(leftBound) + leftBound.length,
      details.lastIndexOf(rightBound)
    );
    const subjectPeriods: SubjectPeriod[] = offered
      .trim()
      .split(',')
      .filter(s => s.trim() !== '')
      .map(item => {
        item = item.trim();
        switch (item) {
          case 'Semester 1':
          case 'Semester 1 (Early-Start)':
          case 'Semester 1 (Extended)':
            return SubjectPeriod.Semester_1;
          case 'Semester 2':
          case 'Semester 2 (Early-Start)':
          case 'Semester 2 (Extended)':
            return SubjectPeriod.Semester_2;
          case 'Winter Term':
            return SubjectPeriod.Winter_Term;
          case 'Summer Term':
            return SubjectPeriod.Summer_Term;
          case 'January':
            return SubjectPeriod.January;
          case 'February':
            return SubjectPeriod.February;
          case 'March':
            return SubjectPeriod.March;
          case 'April':
            return SubjectPeriod.April;
          case 'May':
            return SubjectPeriod.May;
          case 'June':
            return SubjectPeriod.June;
          case 'July':
            return SubjectPeriod.June;
          case 'August':
            return SubjectPeriod.August;
          case 'September':
            return SubjectPeriod.September;
          case 'October':
            return SubjectPeriod.October;
          case 'November':
            return SubjectPeriod.November;
          case 'December':
            return SubjectPeriod.December;
          default:
            console.log(`Subject: ${code} has an unknown offering period: ${item} `);
            return;
        }
      })
      .filter(p => p !== undefined);
    // Check if subject has already been scraped
    if (subjectMap[code] && online) {
      subjectMap[code].online = true;
    } else {
      subjectMap[code] = new SubjectInfo(code, name, subjectPeriods, online);
    }
  });
  return pageSubjects;
};

/**
 * Scrapes all the subjects offered on a specific year and subject period
 * @param year The year to scrape
 * @param period The subject period to scrape
 * @param subjectMap A mapping between subject code and a SubjectInfo instance
 * @param online Whether to scrape online or offline subjects
 */
const scrapeSubjects = async (
  year: number,
  period: SubjectPeriod,
  subjectMap: Record<string, SubjectInfo>,
  online: boolean
): Promise<void> => {
  const baseURL = getBaseURL(year, period, online);
  // Get the number of pages to search
  const pageCount = await getPageCount(baseURL);
  console.log(
    `There ${pageCount == 1 ? 'is' : 'are'} ${pageCount} page${
      pageCount > 1 ? 's' : ''
    } to scrape from ${decodeURI(baseURL)}`
  );
  // A list of scrape promises we must resolve to finish this subject scrape
  const scrapePromises: Array<Promise<SubjectInfo[]>> = [];
  for (let page = 0; page <= pageCount; page++) {
    const promise = scrapeSearchResultsPage(year, baseURL, page, subjectMap, online);
    scrapePromises.push(promise);
  }
  await Promise.all(scrapePromises);
};

//
// Driver code below
//

const years = [2022];
const studyPeriods = Object.keys(SubjectPeriod);

const sortSubjectInfo = (subjectInfo: SubjectInfo[]) =>
  subjectInfo.sort((a, b) => a.code.localeCompare(b.code));

const dumpSubjectInfo = (outputPath: string, subjectInfo: SubjectInfo[]) =>
  writeFile(outputPath, JSON.stringify(subjectInfo, null, 1), error => {
    if (error) {
      console.error(`Could not save file, error encountered!\n${error}`);
    }
  });

years.forEach(year => {
  studyPeriods.forEach(async periodStr => {
    const period: SubjectPeriod = periodStr as SubjectPeriod;
    const outputFileName = `subjects_${year}_${period.toLowerCase()}.json`;
    const outputPath = path.resolve(__dirname, '../subject-lists', outputFileName);

    // first scrape all subjects that are only offline ("Dual-Deliver", "Off+Campus") subjects,
    // then scrape all subjects that are online ("Online"),
    // then concat subject lists into one array
    // alternative: if we want separate online/offline subject json files, make an outer for each loop through [true,false]
    const subjectMap: Record<string, SubjectInfo> = {};
    const scrapeResults = Promise.all([
      scrapeSubjects(year, period, subjectMap, false),
      scrapeSubjects(year, period, subjectMap, true),
    ]);
    await scrapeResults;
    const allSubjectInfos = Object.values(subjectMap);
    console.log(`A total of ${allSubjectInfos.length} subjects were scraped for ${outputFileName}`);
    dumpSubjectInfo(outputPath, sortSubjectInfo(allSubjectInfos));
  });
});
