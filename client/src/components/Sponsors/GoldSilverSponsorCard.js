import React, { useState } from "react";
import styled from "styled-components";

const SponsorCard = styled.div`
  display: ${props => (props.dismissed ? "none" : "flex")};
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

export const UMSUButton = styled.button`
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

export const FacebookButton = styled(UMSUButton).attrs(() => ({
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

const Logo = styled.img.attrs(props => ({
  width: "120px",
  height: "60px"
}))`
  align-self: center;
  object-fit: scale-down;
  background-color: ${props => props.theme.SponsorLogoBg};
`;

const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.6;
  top: 10px;
  right: 4px;
  position: absolute;

  /* @media screen and (min-width: 600px) {
    top: 8px;
    right: 5px;
  } */

  @media screen and (min-width: 960px) {
    top: 5px;
    right: 4px;
  }
`;
export default function GoldSilverSponsorCard(props) {
  const [dismissed, setDismissed] = useState(false);
  const {
    name,
    logoURL,
    description,
    umsu,
    facebook,
    signup,
    tier,
    include
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
        <FacebookButton href={facebook} />
      </ButtonWrapper>
    </SponsorCard>
  );
}
