import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const AvoidButton = styled.button`
  outline: 0;
  border: 1px solid #4caf50; /* Green border */
  ${props => {
    if (props.activated) {
      return css`
        background-color: #4caf50;
        color: white;
      `;
    } else {
      return css`
        background-color: white;
        color: #4caf50;
      `;
    }
  }}
  padding: 5px 10px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  &:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;
export default function DayAvoidButton(props) {
  const [activated, setActivated] = useState(false);
  const { onToggled } = props;
  useEffect(() => {
    onToggled(activated);
  }, [activated]);
  return (
    <AvoidButton activated={activated} onClick={() => setActivated(!activated)}>
      {props.children}
    </AvoidButton>
  );
}
