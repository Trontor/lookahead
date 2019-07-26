import React, { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../../redux/actions/sponsorActions";
import { getCategorisedSponsors } from "../../utility/SponsorFilter";
import GoldSilverSponsorCard from "./GoldSilverSponsorCard";

export const SponsorHeading = styled.h3`
  margin: 10px;
  font-weight: normal;
  i {
    display: inline-block;
    transform: translateY(0.1em);
    font-size: 20px;
    color: ${props => props.theme.text};
    margin-right: 5px;
  }
`;

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
export default function Sponsors() {
  const dispatch = useDispatch();
  const sponsors = useSelector(state => state.sponsors, shallowEqual);
  const optimiser = useSelector(
    state => state.optimiser,
    (left, right) => left.timetables.length === right.timetables.length
  );
  useEffect(() => {
    dispatch(fetchClubList());
  }, [dispatch]);
  // Filter sponsors by currently entered subjects
  const { bronze, goldSilver } = getCategorisedSponsors(sponsors);
  const { timetables } = optimiser;
  const showSponsors =
    timetables && (timetables.length !== 1 && timetables[0].classList);
  if (!showSponsors) {
    return null;
  }
  return (
    <>
      <SponsorHeading>
        <i className="fas fa-icons" />
        Clubs and societies you may be interested in...
      </SponsorHeading>
      <SponsorWrapper>
        {goldSilver &&
          goldSilver.map(entry => {
            return <GoldSilverSponsorCard key={entry.name} {...entry} />;
          })}
      </SponsorWrapper>
    </>
  );
}
