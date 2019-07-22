import React from "react";
import styled from "styled-components";
import { UMSUButton, FacebookButton } from "./GoldSilverSponsorCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../../redux/actions/sponsorActions";
import { GOLD, SILVER, BRONZE } from "../../utility/SponsorTiers";
import { getCategorisedSponsors } from "../../utility/SponsorFilter";

const BronzeCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const BronzeCard = styled.div`
  flex: 0 0 180px;
  text-align: center;
  font-size: 12px;
  height: 140px;
  margin-bottom: 30px;
  margin-right: 5%;
  position: relative;
  align-self: center;

  div {
    font-weight: bold;
    margin-top: 2px;
  }

  @media screen and (min-width: 960px) {
    margin-bottom: 0;
    margin-right: 2%;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const BronzeCardButtonGroup = styled.div`
  margin: 10px auto;
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -50px;

  & > a:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const Logo = styled.img.attrs(props => ({
  width: "120px",
  height: "60px"
}))`
  align-self: center;
  object-fit: scale-down;
  background-color: ${props => props.theme.SponsorLogoBg};
  filter: ${props => props.theme.SponsorFilter};
`;

export default function BronzeSponsors() {
  useSelector(
    state => state.optimiser,
    (left, right) => left.timetables.length === right.timetables.length
  );
  const sponsors = useSelector(state => state.sponsors, shallowEqual);
  const { bronze } = getCategorisedSponsors(sponsors);
  return (
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
              <div>{name}</div>
              <BronzeCardButtonGroup>
                <UMSUButton href={umsu}>UMSU</UMSUButton>
                <FacebookButton href={facebook} />
              </BronzeCardButtonGroup>
            </BronzeCard>
          );
        })}
    </BronzeCardWrapper>
  );
}
