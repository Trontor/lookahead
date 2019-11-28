import React from "react";
import {
  SponsorHeading,
  BronzeCard,
  BronzeCardWrapper,
  BronzeCardButtonGroup,
  Logo,
  UMSUButton,
  FacebookButton
} from "./SponsorStyles";
import { shallowEqual, useSelector } from "react-redux";
import { getCategorisedSponsors } from "../../utility/SponsorFilter";

export default function BronzeSponsors() {
  const optimiser = useSelector(
    state => state.optimiser,
    (left, right) => left.timetables.length === right.timetables.length
  );
  const sponsors = useSelector(state => state.sponsors, shallowEqual);
  const { bronze } = getCategorisedSponsors(sponsors);
  const { timetables } = optimiser;
  const showSponsors =
    timetables && timetables.length !== 0 && timetables[0].classList;
  if (!showSponsors) {
    return null;
  }
  return (
    <>
      {bronze.length > 0 && (
        <SponsorHeading>
          <i className="fas fa-dice" /> You may also be interested in the
          following sponsors and societies...
        </SponsorHeading>
      )}
      {bronze && bronze.length > 0 && (
        <BronzeCardWrapper>
          {bronze.map(entry => {
            const {
              name,
              logoURL,
              // description,
              umsu,
              facebook
              // tier,
              // include
            } = entry;

            return (
              <BronzeCard key={name}>
                <Logo bronze alt={`${name} logo`} width="100%" src={logoURL} />
                <div>{name}</div>
                <BronzeCardButtonGroup>
                  <a href={umsu}>
                    <UMSUButton>UMSU</UMSUButton>
                  </a>
                  <a href={facebook}>
                    <FacebookButton />
                  </a>
                </BronzeCardButtonGroup>
              </BronzeCard>
            );
          })}
        </BronzeCardWrapper>
      )}
    </>
  );
}
