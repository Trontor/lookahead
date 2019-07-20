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
  margin: 20px 10px;
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
              <span>{name}</span>
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
