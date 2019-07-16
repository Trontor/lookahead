import React from "react";
import styled from "styled-components";
import Openings from "../utility/RegistrationOpenings"; 
import Countdown from "react-countdown-now"; 

const CountdownWrapper = styled.div`
  border-radius: 2px;
  border: 2px solid orange;
`;
const Opening = styled.div`
  margin: 20px;
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
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Opened>OPENED</Opened>;
  }
  let outputString = "";
  if (days) outputString += `${days} d `;
  if (hours) outputString += `${hours} h `;
  if (minutes) outputString += `${minutes} m `;
  if (seconds) outputString += `${seconds} s `;
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
