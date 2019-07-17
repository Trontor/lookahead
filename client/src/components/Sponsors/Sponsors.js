import React, { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../../redux/actions/sponsorActions";
import { GOLD, SILVER, BRONZE } from "../../utility/SponsorTiers";

const filterClubs = (subjectCodes, sponsors) => {
  const returnSponsors = [];

  for (const sponsor of sponsors) {
    const { tier, include } = sponsor;
    if (tier === GOLD) {
      returnSponsors.push(sponsor);
      continue;
    }
    if (!include) {
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
const SponsorRow = styled.tr`
  margin: 2.5px 0;
`;
const SponsorCell = styled.td`
  font-size: 12px;
  padding: 0px 5px;
`;

const UMSUButton = styled.a`
  text-decoration: none;
  color: initial;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  height: 30px;
  background-color: ${props => props.theme.UMSUButtonBg};
  width: 100%;
  border: none;
  border-radius: 3px;
`;

const FacebookButton = styled(UMSUButton).attrs(() => ({
  className: "fab fa-facebook-f"
}))`
  padding-top: 7px;
  background-color: #3b5998;
`;

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
                  style={{ objectFit: "cover" }}
                  alt={`${name} logo`}
                  src={logoURL}
                  width={120}
                  height={60}
                />
              </SponsorCell>
              <SponsorCell>{description}</SponsorCell>
              <SponsorCell>
                <UMSUButton href={umsu}>UMSU</UMSUButton>
              </SponsorCell>
              <SponsorCell>
                <FacebookButton href={facebook} />
              </SponsorCell>
            </SponsorRow>
          );
        })}
    </SponsorTable>
  );
}
