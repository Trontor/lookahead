import React, { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../redux/actions/sponsorActions";
import { GOLD, SILVER, BRONZE } from "../utility/SponsorTiers";

const filterClubs = (subjectCodes, sponsors) => {
  const returnSponsors = [];

  for (const sponsor of sponsors) {
    const { tier, include } = sponsor;
    if (!include && tier !== GOLD) {
      continue;
    }

    const matchingSubjects = include.some(str =>
      subjectCodes.some(code => code.includes(str))
    );
    if (!matchingSubjects) {
      continue;
    }
    returnSponsors.push(sponsor);
  }
  return returnSponsors;
};

const SponsorTable = styled.table`
  border: 1px solid red;
`;
const SponsorRow = styled.tr``;
const SponsorCell = styled.td``;

export default function Sponsors() {
  const dispatch = useDispatch();
  const sponsors = useSelector(state => state.sponsors, shallowEqual);
  const optimiser = useSelector(
    state => state.optimiser,
    (left, right) => left.timetables.length === right.timetables.length
  );
  console.log("Rendering Sponsors js");

  const subjects = useSelector(state => state.subjects, () => true);
  useEffect(() => {
    dispatch(fetchClubList());
  }, [dispatch]);
  // Filter sponsors by currently entered subjects
  const filteredClubs = filterClubs(Object.keys(subjects), sponsors.clubs);
  if (!optimiser.timetables || !filteredClubs.length) {
    return null;
  }
  return (
    <SponsorTable>
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
            <SponsorRow>
              <SponsorCell>
                <img
                  alt={`${name} logo`}
                  src={logoURL}
                  width={120}
                  height={80}
                />
              </SponsorCell>
              <SponsorCell>{description}</SponsorCell>
              <SponsorCell>
                <a href={umsu}>UMSU</a>
              </SponsorCell>
              <SponsorCell>{facebook}</SponsorCell>
            </SponsorRow>
          );
        })}
    </SponsorTable>
  );
}
