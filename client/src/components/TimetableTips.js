import React from "react";
import styled, { css } from "styled-components";

const TipWrapper = styled.div`
  margin: 10px 5px;
`;

const Tip = styled.div`
  margin: 7px;
  padding: 1px 7px;
  font-size: 12px;
  font-family: "Karla", Helvetica, sans-serif;
  border-left: 3px solid ${props => props.theme.accent};
  letter-spacing: -0.01em;

  i {
    font-size: 10px;
  }

  @media screen and (min-width: 960px) {
    margin: 5px 0;
  }

  ${({ mobile }) =>
    mobile &&
    css`

      @media screen and (min-width: 960px) {
        display: none;
      }
  `}


  ${({ desktop }) =>
    desktop &&
    css`
      display: none;

      @media screen and (min-width: 960px) {
        display: block;
      }
  `}

  /* ${({ mobile }) =>
    mobile &&
    css`
      @media screen and (min-width: 600px) {
        display: none;
      }
    `}

  ${({ desktop }) =>
    desktop &&
    css`
      @media screen and (max-width: 600px) {
        display: none;
      }
    `}
    } */
`;

export default function TimetableTips() {
  return (
    <TipWrapper>
      <Tip desktop>
        Use your arrow keys ← → to quickly navigate between the timetables.
      </Tip>
      <Tip desktop>
        Click and drag classes around to customise your timetable (mandatory{"  "}
         <i className="fa fa-lock" /> classes cant be changed).
      </Tip>
      <Tip mobile>
        Tap (hold) and drag classes around to customise your timetable.
      </Tip>
    </TipWrapper>
  );
}
