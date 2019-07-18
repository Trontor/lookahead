import React, { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../../redux/actions/sponsorActions";
import { GOLD, SILVER, BRONZE } from "../../utility/SponsorTiers";

const filterClubs = (subjectCodes, sponsors) => {
  const goldSilver = [];
  const bronze = [];
  for (const sponsor of sponsors) {
    const { tier, include } = sponsor;
    if (tier === GOLD) {
      goldSilver.push(sponsor);
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
    if (tier === SILVER) {
      goldSilver.push(sponsor);
    } else if (tier === BRONZE) {
      bronze.push(sponsor);
    }
  }
  return { bronze, goldSilver };
};

const SponsorTable = styled.table``;

const SponsorWrapper = styled.div`
  border: 1px solid #e2e2e2;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
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
  width: 30px;
  border: none;
  border-radius: 3px;
`;

const FacebookButton = styled(UMSUButton).attrs(() => ({
  className: "fab fa-facebook-f"
}))`
  padding-top: 7px;
  background-color: #3b5998;
`;
const Logo = styled.img.attrs(props => ({ width: "120px", height: "60px" }))`
  object-fit: scale-down;
  background-color: ${props => props.theme.SponsorLogoBg};
  mix-blend-mode: multiply;
`;

const BronzeCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;

const BronzeCard = styled.div`
  flex: 0 0 250px;
  text-align: center;
  font-size: 12px;
  span {
    font-weight: bold;
  }
`;
const BronzeCardButtonGroup = styled.div`
  margin-top: 10px;
  & > a:not(:last-of-type) {
    margin-right: 10px;
  }
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
  const { bronze, goldSilver } = filterClubs(
    Object.keys(subjects),
    sponsors.clubs
  );
  if (!optimiser.timetables || (!goldSilver.length && !bronze.length)) {
    return null;
  }
  return (
    <>
      <SponsorWrapper>
        <SponsorTable>
          {goldSilver &&
            goldSilver.map(entry => {
              const {
                name,
                logoURL,
                description,
                umsu,
                facebook,
                signup,
                tier,
                include
              } = entry;
              return (
                <SponsorRow>
                  <SponsorCell>
                    <Logo alt={`${name} logo`} src={logoURL} />
                  </SponsorCell>
                  <SponsorCell>{description}</SponsorCell>
                  <SponsorCell>
                    <UMSUButton href={signup}>Website</UMSUButton>
                  </SponsorCell>
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
      </SponsorWrapper>
      <BronzeCardWrapper>
        {bronze &&
          bronze.map(entry => {
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
              <BronzeCard>
                <Logo alt={`${name} logo`} width="100%" src={logoURL} />
                <span>{name}</span>
                <BronzeCardButtonGroup>
                  <UMSUButton href={umsu}>UMSU</UMSUButton>
                  <FacebookButton href={facebook} />
                </BronzeCardButtonGroup>
              </BronzeCard>
            );
          })}
      </BronzeCardWrapper>
    </>
  );
}
