import React from 'react';
import styled from 'styled-components';
import Openings from '../utility/RegistrationOpenings';
import Countdown from 'react-countdown-now';

const CountdownWrapper = styled.div`
  border-radius: 2px;
  border: 2px solid orange;
`;
const Opening = styled.div`
  margin: 5px;
  font-size: ${props => (props.prominent ? 24 : 12)}px;
`;

const OpeningName = styled.span`
  color: orange;
  margin-right: 20px;
`;

const OpeningTime = styled.span`
  color: blue;
`;

const Opened = styled.span`
  color: green;
  font-weight: bold;
`;

const convertToDate = rawTime => {
  const parsed = new Date(rawTime);
  return parsed;
};
// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed}) => {
  if (completed) {
    // Render a completed state
    return <Opened>OPENED</Opened>;
  }
  let outputString = '';
  if (days) outputString += `${days} day${days === 1 ? '' : 's'}`;
  if (days < 2) {
    if (hours) outputString += `${hours} h `;
    if (hours < 2) {
      if (minutes) outputString += `${minutes} minutes `;
      if (minutes < 5) {
        outputString += `${seconds} seconds `;
      }
    }
  }
  // Render a countdown
  return (
    <OpeningTime days={days} hours={hours} minutes={minutes} seconds={seconds}>
      {outputString}
    </OpeningTime>
  );
};
export default function RegistrationCountdown() {
  return (
    <CountdownWrapper>
      {Openings.map((opening, index) => {
        return (
          <Opening prominent={index === 0}>
            <OpeningName>{opening.name}</OpeningName>
            <Countdown date={convertToDate(opening.time)} renderer={renderer} />
          </Opening>
        );
      })}
    </CountdownWrapper>
  );
}
