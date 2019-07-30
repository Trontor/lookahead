import { Request, Response } from "express";
import { getClubSheetData } from "../../google-sheets/sheets";

/**
 * Specifies how a sponsor object should look like, mimics the Google Sheets
 * columns.
 */
interface ISponsor {
  name: string;
  logoURL: string;
  description: string;
  umsu: string;
  tier: string;
  signup: string;
  facebook: string;
  include: string[];
}

/**
 * Takes a raw Google Sheets response and parses rows into an array of ISponsor
 */
const processRawClubData = (data: string[][]): ISponsor[] => {
  // will store output sponsors
  const allSponsors: ISponsor[] = [];
  // loop through 2d data array
  for (const row of data) {
    // destructure entries
    const [
      name,
      logoURL,
      description,
      umsu,
      facebook,
      signup,
      tier,
      include
    ] = row;
    // will store a list of subject code matching patterns
    let includeArray: string[] = [];
    if (include) {
      // currently stored as in a CSV format in Google Sheets
      includeArray = include.split(",");
    }
    // construct sponsor object and push to tracking array
    const sponsor: ISponsor = {
      name,
      logoURL,
      description,
      umsu,
      facebook,
      tier,
      signup,
      include: includeArray
    };
    allSponsors.push(sponsor);
  }
  return allSponsors;
};

/**
 * Asyncronously retrieve and parse sponsorship data
 */
export const getClubs = async (req: Request, res: Response) => {
  const data = await getClubSheetData();
  res.send(processRawClubData(data));
};
