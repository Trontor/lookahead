import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../redux/actions/sponsorActions";
import { GOLD, SILVER, BRONZE } from "../utility/SponsorTiers";

const filterClubs = (subjectCodes, sponsors) => {
  const returnSponsors = [];
  console.log(subjectCodes, sponsors);

  for (const sponsor of sponsors) {
    const { tier, include } = sponsor;
    if (!include && tier !== GOLD) {
      continue;
    }

    const matchingSubjects = include.some(str =>
      subjectCodes.some(code => code.includes(str))
    );
    console.log(subjectCodes, include, matchingSubjects);
    if (!matchingSubjects) {
      continue;
    }
    returnSponsors.push(sponsor);
  }
  return returnSponsors;
};

export default function Sponsors() {
  const dispatch = useDispatch();
  const sponsors = useSelector(state => state.sponsors);
  const optimiser = useSelector(state => state.optimiser);
  const subjects = useSelector(state => state.subjects);
  useEffect(() => {
    dispatch(fetchClubList());
  }, [dispatch]);
  if (!optimiser.timetables) {
    return null;
  }
  // Filter sponsors by currently entered subjects
  const filteredClubs = filterClubs(Object.keys(subjects), sponsors.clubs);
  return (
    <div>
      {filteredClubs &&
        filteredClubs.map(entry => {
          const {
            name,
            logoURL,
            description,
            umsu,
            facebook,
            tier,
            include
          } = entry;
          return (
            <ul>
              <li>{name}</li>
              <li>{logoURL}</li>
              <li>{description}</li>
              <li>{umsu}</li>
              <li>{facebook}</li>
              <li>{tier}</li>
              <li>{include}</li>
            </ul>
          );
        })}
    </div>
  );
}
