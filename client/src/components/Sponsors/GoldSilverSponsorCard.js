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
import { logClick } from "../../redux/actions/sponsorActions";

const logAndRedirect = (name, item, destination) => e => {
  e.preventDefault();
  logClick(name, item).then(_ => {
    document.location.href = destination;
  });
};
export default function GoldSilverSponsorCard(props) {
  const [dismissed, setDismissed] = useState(false);
  const {
    name,
    logoURL,
    description,
    umsu,
    facebook,
    signup,
    website
    /* tier,
    include */
  } = props;
  return (
    <SponsorCard dismissed={dismissed}>
      <DeleteButton
        onClick={() => {
          setDismissed(true);
          props.onDismissed();
        }}
      >
        ×
      </DeleteButton>
      <LogoWrapper>
        <Logo alt={`${name} logo`} src={logoURL} />
      </LogoWrapper>
      <ClubDescription>{description}</ClubDescription>
      <ButtonWrapper>
        <a href={signup} onClick={logAndRedirect(name, "signup", signup)}>
          <UMSUButton>Signup</UMSUButton>
        </a>
        <a href={website} onClick={logAndRedirect(name, "website", website)}>
          <UMSUButton>Website</UMSUButton>
        </a>
        <a href={umsu} onClick={logAndRedirect(name, "umsu", umsu)}>
          <UMSUButton>UMSU</UMSUButton>
        </a>
        <a href={facebook} onClick={logAndRedirect(name, "facebook", facebook)}>
          <FacebookButton />
        </a>
      </ButtonWrapper>
    </SponsorCard>
  );
}
