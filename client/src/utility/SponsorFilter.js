import store from "../redux/store";
import { GOLD, SILVER, BRONZE } from "./SponsorTiers";

export const getCategorisedSponsors = sponsors => {
  const goldSilver = [];
  const bronze = [];
  const clubs = sponsors.clubs;
  const subjects = store.getState().subjects;
  const subjectCodes = Object.keys(subjects);
  const matchCond = str => subjectCodes.some(code => code.includes(str));
  for (const sponsor of clubs) {
    const { tier, include } = sponsor;
    if (tier === GOLD) {
      goldSilver.push(sponsor);
      continue;
    }
    if (!include) {
      continue;
    }
    const matchingSubjects = include.some(matchCond);
    if (!matchingSubjects) {
      continue;
    }
    if (tier === SILVER) {
      goldSilver.push(sponsor);
    } else if (tier === BRONZE) {
      bronze.push(sponsor);
    }
  }

  return { bronze, goldSilver };
};
