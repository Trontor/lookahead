const request = require("request");
const cheerio = require("cheerio");
const _cliProgress = require("cli-progress");
const fs = require("fs");
const progressBarStyle = _cliProgress.Presets.shades_classic;

class SubjectInfo {
  constructor(code, name, offered) {
    this.code = code;
    this.name = name;
    this.offered = offered;
  }
  get fullCode() {
    let output = this.code + " - " + this.name;
    output += "\n\tStudy Period(s):" + this.offered.join(",");
    return output;
  }
}

const generateSearchURL = (year, studyPeriod) =>
  `https://handbook.unimelb.edu.au/search?query=&year=${year}&types%5B%5D=subject&study_periods%5B%5D=${studyPeriod}`;

const getHTML = (URL, callback) => {
  const customHeaderRequest = request.defaults({
    headers: {
      "User-Agent":
        // tslint:disable-next-line:max-line-length
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
    }
  });
  customHeaderRequest.get(URL, (error, response, body) => {
    callback(body);
  });
};

const getPageCount = (baseURL, callback) => {
  getHTML(baseURL, html => {
    const $ = cheerio.load(html);
    const pageCountDirty = $(".search-results__paginate > div > span").text();
    const pageCountClean = parseInt(pageCountDirty.replace(/^\D+/g, ""), 10);
    callback(pageCountClean);
  });
};

const scrapePage = (
  year,
  studyPeriod,
  baseURL,
  pageNumber,
  maxPages,
  callback,
  finishedCallBack
) => {
  const pageURL = baseURL + `&page=${pageNumber}`;
  getHTML(pageURL, html => {
    const pageSubjects = [];
    const $ = cheerio.load(html);
    const list = $(".search-results__accordion > li");
    list.each(function() {
      const subjectCode = $(this)
        .find(".search-results__accordion-code")
        .text()
        .trim();
      const title = $(this)
        .find(".search-results__accordion-title")
        .text()
        .replace(subjectCode, "")
        .trim();
      const details = $(this)
        .find(".search-results__accordion-detail")
        .text()
        .trim();
      const leftBound = "Offered:";
      const rightBound = "Year:";
      const offered = details.substring(
        details.lastIndexOf(leftBound) + leftBound.length,
        details.lastIndexOf(rightBound)
      );
      const studyPeriods = offered.split(",").map(item => item.trim());
      const newSubject = new SubjectInfo(subjectCode, title, studyPeriods);
      pageSubjects.push(newSubject);
    });
    pagesScraped++;
    callback(pageSubjects);
    if (pagesScraped === maxPages) {
      finishedCallBack();
    }
  });
};

let pagesScraped = 0;
let allSubjects = [];
const scrapeSubjects = (year, studyPeriod, finishedCallBack) => {
  pagesScraped = 0;
  allSubjects = [];
  const currentFileName = `subjects_${year}_${studyPeriod}.json`;
  try {
    allSubjects = JSON.parse(fs.readFileSync(currentFileName, "utf8"));
    console.log(
      `Read existing subject file ${allSubjects.length} entires existing.`
    );
  } catch (error) {
    // Probably no file existing.
  }
  const baseURL = generateSearchURL(year, studyPeriod);
  getPageCount(baseURL, count => {
    console.log(
      `There are ${count} pages to parse from ${decodeURI(baseURL)}.\n`
    );
    const scrapeBar = new _cliProgress.Bar({}, progressBarStyle);
    //scrapeBar.start(count, 1);
    invokePageScraper(year, studyPeriod, baseURL, finishedCallBack, count);
  });
};

const invokePageScraper = (
  year,
  studyPeriod,
  baseURL,
  finishedCallBack,
  maxCount,
  pageNum = 1
) => {
  console.log(`|-> Page ${pageNum}/${maxCount} : ${baseURL}&page=${pageNum}`);
  scrapePage(
    year,
    studyPeriod,
    baseURL,
    pageNum,
    maxCount,
    pageSubjects => {
      allSubjects = allSubjects.concat(pageSubjects);
      if (pageSubjects.length > 0) {
        process.stdout.write(`\t|-> `);
        pageSubjects.forEach(subject => {
          process.stdout.write(`${subject.code}, `);
        });
        console.log();
        console.log(`\t|-> Parsed ${pageSubjects.length} subjects.`);
      }
      if (pageNum != maxCount) {
        invokePageScraper(
          year,
          studyPeriod,
          baseURL,
          finishedCallBack,
          maxCount,
          ++pageNum
        );
      }
      //scrapeBar.update(pagesScraped);
    },
    () => {
      //scrapeBar.stop();
      finishedCallBack(allSubjects);
    }
  );
};

const studyPeriods = [
  {
    code: "semester_1",
    name: "Semester 1"
  },
  {
    code: "semester_2",
    name: "Semester 2"
  },
  {
    code: "summer_term",
    name: "Summer Term"
  },
  {
    code: "winter_term",
    name: "Winter Term"
  }

  /* year long and others not handled */
];

const duplicateAnalysis = allSubjects => {
  let duplicates = 0;
  allSubjects.forEach((val, i) => {
    allSubjects.forEach((comp, j) => {
      if (i === j || val.code !== comp.code) {
        return;
      }
      //console.log(val.code + " has duplicates.");
      duplicates++;
    });
  });
  const total = allSubjects.length;
  const perc = (duplicates / total) * 100;
  if (perc > 0) {
    console.log(`${perc.toFixed(2)}% duplicates exist.`);
  }
};
const scrapeYear = (year, finishedScrapingCallback, studyPeriodIndex = 0) => {
  const studyPeriodName = studyPeriods[studyPeriodIndex].name;
  console.log(
    `Scraping subjects for study period: ${studyPeriodName} in ${year}`
  );
  const semCode = studyPeriods[studyPeriodIndex].code;
  const begin = Date.now();
  scrapeSubjects(year, semCode, allSubjects => {
    const end = Date.now();
    const timeSpent = (end - begin) / 1000;
    console.log(
      `\nA total of ${
        allSubjects.length
      } subjects were parsed in ${timeSpent} seconds.`
    );
    const fileContents = JSON.stringify(allSubjects);
    const outputFileName = `subjects_${year}_${semCode}.json`;
    duplicateAnalysis(allSubjects);
    fs.writeFile(outputFileName, fileContents, error => {
      if (error) {
        return console.log(`Could not save file, error encountered!\n${error}`);
      }
      console.log(
        `Subject information was saved in JSON format to ./${outputFileName}!\n`
      );
      console.log(
        "--------------------------------------------------------------------"
      );
      if (studyPeriodIndex < studyPeriods.length - 1) {
        scrapeYear(year, finishedScrapingCallback, ++studyPeriodIndex);
      } else {
        finishedScrapingCallback();
      }
      return true;
    });
  });
};

const thisYear = new Date().getFullYear();
const nextYear = thisYear + 1;
const startYear = thisYear - 1;

let currentYear = startYear;
const finishedScrapingYear = () => {
  if (currentYear < nextYear) {
    //scrapeYear(++currentYear, finishedScrapingYear);
  }
};

/* driver function */
scrapeYear(2019, finishedScrapingYear);
