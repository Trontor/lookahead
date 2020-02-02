import store from "../redux/store";
import { GOLD, SILVER, BRONZE } from "./SponsorTiers";

export const getCategorisedSponsors = ({ sponsors }) => {
  const goldSilver = [];
  const bronze = [];
  const subjects = store.getState().subjects;
  const subjectCodes = Object.keys(subjects);
  const matchCond = str => subjectCodes.some(code => code.includes(str));
  for (const sponsor of sponsors) {
    const { tier, include } = sponsor;
    if (tier === GOLD) {
      // Adds randomness to the gold tier sponsors, so that no specific sponsor always appears first
      Math.random() < 0.5
        ? goldSilver.push(sponsor)
        : goldSilver.unshift(sponsor);
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
