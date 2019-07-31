import React, { useState } from "react";
import {
  SponsorCard,
  DeleteButton,
  LogoWrapper,
  Logo,
  ClubDescription,
  ButtonWrapper,
  UMSUButton,
  FacebookButton
} from "./SponsorStyles";

export default function GoldSilverSponsorCard(props) {
  const [dismissed, setDismissed] = useState(false);
  const {
    name,
    logoURL,
    description,
    umsu,
    facebook,
    signup
    /* tier,
    include */
  } = props;
  return (
    <SponsorCard dismissed={dismissed}>
      <DeleteButton onClick={() => setDismissed(true)}>×</DeleteButton>
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
        <a href={facebook}>
          <FacebookButton />
        </a>
      </ButtonWrapper>
    </SponsorCard>
  );
}
