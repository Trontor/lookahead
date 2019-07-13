import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const AvoidButton = styled.button`
  outline: 0;
  width: 50px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bold;
  border: 1px solid ${props => props.theme.accent};
  padding: 7px 0; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  margin-top: 5px;

  &:hover {
    
  }

  @media screen and (min-width: 960px) {
    width: 40px;
  }

  ${props => {
    if (props.activated) {
      return css`
        background-color: ${props => props.theme.accent};
        color: white;
      `;
    } else {
      return css`
        background-color: ${props => props.theme.bodyBg};
        color: ${props => props.theme.accent};
      `;
    }
  }}

  &:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }

  &:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  &:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  &:hover {
    background-color: ${props => props.theme.accent};
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
