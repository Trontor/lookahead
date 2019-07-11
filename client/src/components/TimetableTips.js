import React from "react";
import styled, { css } from "styled-components";

const TipWrapper = styled.div`
  /* margin: 10px 5px;
  height: 60px;
  border-radius: 2px;
  border: 5px solid aliceblue; */
`;
const Tip = styled.div`
  margin: 5px 10px;
  padding-left: 10px;
  font-size: 12px;
  font-family: "Karla", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-left: 2px solid green;
  i {
    font-size: 10px;
  }
  ${({ desktop }) =>
    desktop &&
    css`
      @media screen and (max-width: 600px) {
        display: none;
      }
    `}
  ${({ mobile }) =>
    mobile &&
    css`
      @media screen and (min-width: 600px) {
        display: none;
      }
    `}
`;
export default function TimetableTips() {
  return (
    <TipWrapper>
      <Tip desktop>
        Use your arrow keys to quickly navigate between the timetables.
      </Tip>
      <Tip desktop>
        Click and drag classes around to customise your timetable (mandatory{" "}
        <i className="fa fa-lock" /> classes cant be changed).
      </Tip>
      <Tip mobile>
        Tap (hold) and drag classes around to customise your timetable.
      </Tip>
    </TipWrapper>
  );
}
