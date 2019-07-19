import React, { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../../redux/actions/sponsorActions";
import { GOLD, SILVER, BRONZE } from "../../utility/SponsorTiers";

const filterClubs = (subjectCodes, sponsors) => {
  const goldSilver = [];
  const bronze = [];
  console.log(sponsors);
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

const SponsorTable = styled.div`
  /* display: none; */
  @media screen and (min-width: 960px) {
    /* display: table; */
  }
`;

const SponsorWrapper = styled.div`
  /* border: 1px solid #e2e2e2; */
  border-radius: 2px;
  background: ${props => props.theme.sidebarBg};
  box-shadow: 2px 2px 3px -2px rgba(0, 0, 0, 0.1);
  margin: 0 10px 5px 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  color: ${props => props.theme.text};

  @media screen and (min-width: 960px) {
    margin: 0px;
  }
`;

const SponsorRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const SponsorCell = styled.td`
  /* font-size: 12px;
  padding: 0px 5px; */
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  margin-bottom: 10px;
`;

const UMSUButton = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 70px;
  height: 26px;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  background-color: ${props => props.theme.UMSUButtonBg};
  border: none;
  border-radius: 3px;

  &:hover {
    background-color: indigo;
  }
`;

const FacebookButton = styled(UMSUButton).attrs(() => ({
  className: "fab fa-facebook-f"
}))`
  font-family: "Font Awesome 5 Brands";
  padding-top: 7px;
  padding-bottom: 8px;
  background-color: #3b5998;
  width: 26px;

  &:hover {
    background-color: dodgerblue;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: -5px;
  width: 100%;
`;

const Logo = styled.img.attrs(props => ({ width: "120px", height: "60px" }))`
  object-fit: scale-down;
  background-color: ${props => props.theme.SponsorLogoBg};
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
                <LogoWrapper>
                  <Logo alt={`${name} logo`} src={logoURL} />
                </LogoWrapper>
                {description}
                <ButtonWrapper>
                  <a href={signup}>
                    <UMSUButton>Website</UMSUButton>
                  </a>
                  <a href={umsu}>
                    <UMSUButton>UMSU</UMSUButton>
                  </a>
                  <FacebookButton href={facebook} />
                </ButtonWrapper>
              </SponsorRow>
            );
          })}
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
