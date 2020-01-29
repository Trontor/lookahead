import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import GoldSilverSponsorCard from "./GoldSilverSponsorCard";
import { SponsorWrapper } from "./SponsorStyles";
import { fetchClubList } from "../../redux/actions/sponsorActions";
import { getCategorisedSponsors } from "../../utility/SponsorFilter";

export default function Sponsors() {
  const dispatch = useDispatch();
  const sponsors = useSelector(state => state.sponsors, shallowEqual);
  const [goldSilver, setGoldSilver] = useState([]);
  const optimiser = useSelector(
    state => state.optimiser,
    (left, right) => left.timetables.length === right.timetables.length
  );
  const [dismissedCount, setDismissedCount] = useState(0);
  useEffect(() => {
    dispatch(fetchClubList());
  }, [dispatch]);

  useEffect(() => {
    setGoldSilver(getCategorisedSponsors(sponsors).goldSilver);
  }, [optimiser.timetables, sponsors]);
  // const { timetables } = optimiser;
  // const showSponsors =
  //   timetables && timetables.length !== 0 && timetables[0].classList;
  // if (!showSponsors) {
  //   return null;
  // }
  return (
    <>
      {/* {goldSilver.length - dismissedCount > 0 && (
        <SponsorHeading>
          <i className="fas fa-icons" />
          Clubs and societies you may be interested in...
        </SponsorHeading>
      )} */}
      <SponsorWrapper>
        {goldSilver &&
          goldSilver.map(entry => {
            return (
              <GoldSilverSponsorCard
                key={entry.name}
                {...entry}
                onDismissed={() => {
                  setDismissedCount(dismissedCount + 1);
                }}
              />
            );
          })}
      </SponsorWrapper>
    </>
  );
}
