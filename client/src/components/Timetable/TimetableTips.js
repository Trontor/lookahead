import React from "react";
import styled, { css } from "styled-components";

const TipWrapper = styled.div`
  margin: 5px 5px 20px 5px;
`;

const TipHeader = styled.h3`
  margin-bottom: 9px;
  margin-left: 7px;

  i {
    color: gold;
    padding-left: 2px;
  }

  @media screen and (min-width: 960px) {
    margin-top: 0;
    margin-left: 0;
  }
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
      <TipHeader>
        Tips{"  "}
        <i className="fa fa-lightbulb" aria-hidden="true" />
      </TipHeader>
      <Tip desktop>
        Click and drag somewhere on the timetable to create a reserved event.
      </Tip>
      <Tip mobile>
        Tap, hold then drag somewhere on the timetable to create a reserved.
        event.
      </Tip>
      <Tip desktop>
        Use your arrow keys ← → to quickly navigate between the timetables.
      </Tip>
      <Tip desktop>
        Click and drag classes around to customise your timetable (Mandatory
        <i className="fa fa-lock" /> classes can't be changed).
      </Tip>
      <Tip mobile>
        Tap, hold then drag classes around to customise your timetable.
      </Tip>
    </TipWrapper>
  );
}
