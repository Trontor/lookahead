import React, {useState} from 'react';
import {
  SponsorCard,
  DeleteButton,
  LogoWrapper,
  Logo,
  ClubDescription,
  ButtonWrapper,
  UMSUButton,
  FacebookButton,
} from './SponsorStyles';
import {logClick} from '../../redux/actions/sponsorActions';

const logAndRedirect = (name, item, destination) => e => {
  const controlPressed = e.ctrlKey;
  e.preventDefault();
  logClick(name, item).then(_ => {
    if (!controlPressed) {
      document.location.href = destination;
    } else {
      window.open(destination);
    }
  });
};
export default function GoldSilverSponsorCard(props) {
  const [dismissed, setDismissed] = useState(false);
  const {name, logoURL, description, umsu, facebook, signup, website, tier, include} = props;
  console.log(include);

  return (
    <SponsorCard dismissed={dismissed} tier={tier}>
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
        {signup && (
          <a href={signup} onClick={logAndRedirect(name, 'signup', signup)}>
            <UMSUButton>Signup</UMSUButton>
          </a>
        )}
        {website && (
          <a href={website} onClick={logAndRedirect(name, 'website', website)}>
            <UMSUButton>Website</UMSUButton>
          </a>
        )}
        {umsu && (
          <a href={umsu} onClick={logAndRedirect(name, 'umsu', umsu)}>
            <UMSUButton>UMSU</UMSUButton>
          </a>
        )}
        {facebook && (
          <a href={facebook} onClick={logAndRedirect(name, 'facebook', facebook)}>
            <FacebookButton />
          </a>
        )}
      </ButtonWrapper>
    </SponsorCard>
  );
}
