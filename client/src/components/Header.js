import React from "react";
import styled from "styled-components";

export default function Header() {
  const HeaderWrapper = styled.div`
    max-height: 60px;
    min-height: 20px;
    text-align: left;
    background-color: #4B55A5;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    color: white;
    padding: 8px 12px;
    margin: 0px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  `;
  const HeaderText = styled.span`
    letter-spacing: 0.1em;
    display: inline;
    font-size: 24px;
    font-family: "Cabin", sans-serif;
    font-weight: bold;
    padding-bottom: 2px;
  `;
  const HeaderSubtitle = styled.span`
    font-size: 13px;
    display: inline;
    font-family: "Karla", sans-serif;
  `;
  const Emoji = styled.span`
    @media screen and (max-width: 400px) {
      display: none;
    }
    right: 12px;
    font-size: 26px;
    position: absolute;
    text-align: right;
  `;
  return (
    <HeaderWrapper>
      <HeaderText>lookahead</HeaderText>
      <HeaderSubtitle>
        A University of Melbourne Timetable Optimiser
      </HeaderSubtitle>
      <Emoji>
        <span aria-label="Two eyes emoji" role="img">
          👀
        </span>
      </Emoji>
    </HeaderWrapper>
  );
}
