import styled from "styled-components";

export const SponsorCard = styled.div`
  display: ${props => (props.dismissed ? "none" : "flex")};
  flex-direction: column;
  padding: 10px;
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  margin-bottom: 12px;
  box-shadow: 1px 1px 3px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  letter-spacing: -0.02em;
  line-height: 1.18em;
  border-top: 8px solid gold;

  @media screen and (min-width: 960px) {
    position: relative;
    width: 50%;
    height: 200px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    height: calc(296px - 1vw);
  }

  @media screen and (min-width: 1080px) {
    height: calc(280px - 2vw);
    max-width: 395px;
  }

  @media screen and (min-width: 1200px) {
    height: 236px;
  }

  @media screen and (min-width: 1400px) {
    height: 208px;
  }
`;

export const ClubDescription = styled.div``;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding-top: 10px;

  @media screen and (min-width: 960px) {
    position: absolute;
    bottom: 10px;
  }
`;

export const UMSUButton = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 64px;
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

export const LogoWrapper = styled.div`
  width: 100%;
  height: 40px;
  overflow: hidden;
  margin-bottom: 5px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.6;
  top: 6px;
  right: 2px;
  position: absolute;

  /* @media screen and (min-width: 600px) {
    top: 8px;
    right: 5px;
  } */

  @media screen and (min-width: 1024px) {
    top: 5px;
    right: 4px;
  }
`;

export const BronzeCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const BronzeCard = styled.div`
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

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 2%;
  }

  &:last-child {
    margin-right: 0;
    letter-spacing: -0.01em;
  }
`;

export const BronzeCardButtonGroup = styled.div`
  margin: 10px auto;
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -50px;

  & > a:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Logo = styled.img.attrs(props => ({}))`
  align-self: center;
  object-fit: scale-down;
  height: inherit;
  /* width: 100%; */
  margin-top: 0;
  background-color: ${props => props.theme.SponsorLogoBg};
  /* margin-top: ${props => (props.bronze ? 0 : "-10px")}; */
  filter: ${props => props.theme.SponsorFilter};
`;
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

export const SponsorWrapper = styled.div`
  margin: 0 10px 50x 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 0 10px;

  @media screen and (min-width: 960px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
    padding: 0;
  }
`;
