import React, { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchClubList } from "../../redux/actions/sponsorActions";
import { getCategorisedSponsors } from "../../utility/SponsorFilter";
import GoldSilverSponsorCard from "./GoldSilverSponsorCard";

const SponsorHeading = styled.h3`
  margin: 0 0 10px 0;

  i {
    display: inline-block;
    transform: translateY(0.1em);
    font-size: 20px;
    color: darkorchid;
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
  console.log("Rendering Sponsors js");
  useEffect(() => {
    dispatch(fetchClubList());
  }, [dispatch]);
  // Filter sponsors by currently entered subjects
  const { bronze, goldSilver } = getCategorisedSponsors(sponsors);
  if (!optimiser.timetables || (!goldSilver.length && !bronze.length)) {
    return null;
  }
  return (
    <>
    <SponsorHeading>
      <i class="fas fa-chess-knight"></i>Clubs and societies you may be interested in:
    </SponsorHeading>
      <SponsorWrapper>
        {goldSilver &&
          goldSilver.map(entry => {
            return <GoldSilverSponsorCard {...entry} />;
          })}
      </SponsorWrapper>
    </>
  );
}
