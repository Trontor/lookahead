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

const SponsorWrapper = styled.div`
  margin: 0 10px 50x 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 960px) {
    margin: 0;
    padding: 0;
  }
`;

const SponsorCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  margin-bottom: 12px;
  box-shadow: 1px 1px 3px -1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  letter-spacing: -0.01em;

  @media screen and (min-width: 768px) {
    position: relative;
    width: 50%;
    height: 186px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 960px) {
    height: 210px;
  }

  @media screen and (min-width: 1080px) {
    height: 192px;
  }

  @media screen and (min-width: 1200px) {
    height: 200px;
    max-width: 395px;
  }
`;

const ClubDescription = styled.div``;

const ButtonWrapper = styled.div`
  width: 100%;
  padding-top: 10px;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 10px;
  }
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
  font-size: 10px;
  text-transform: uppercase;
  background-color: ${props => props.theme.UMSUButtonBg};
  border: none;

  &:hover {
    background-color: darkorchid;
  }
`;

const FacebookButton = styled(UMSUButton).attrs(() => ({
  className: "fab fa-facebook-f"
}))`
  font-family: "Font Awesome 5 Brands";
  font-size: 12px;
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: #3b5998;
  width: 26px;

  &:hover {
    background-color: dodgerblue;
  }
`;

const LogoWrapper = styled.div`
  /* margin: -8px 0; */
  /* text-align: center; */
`;

const Logo = styled.img.attrs(props => ({ width: "120px", height: "60px" }))`
  align-self: center;
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
              <SponsorCard>
                <LogoWrapper>
                  <Logo alt={`${name} logo`} src={logoURL} />
                </LogoWrapper>
                <ClubDescription>{description}</ClubDescription>
                <ButtonWrapper>
                  <a href={signup}>
                    <UMSUButton>Website</UMSUButton>
                  </a>
                  <a href={umsu}>
                    <UMSUButton>UMSU</UMSUButton>
                  </a>
                  <FacebookButton href={facebook} />
                </ButtonWrapper>
              </SponsorCard>
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
