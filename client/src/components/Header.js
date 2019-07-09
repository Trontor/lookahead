import React from "react";
import styled from "styled-components";

export default function Header() {
  const HeaderWrapper = styled.div`
    max-height: 60px;
    min-height: 20px;
    text-align: left;
    background-color: #4381c1;
    display: flex;
    justify-content: center;
    font-family: "Karla", sans-serif;
    align-content: center;
    flex-direction: column;
    color: white;
    padding: 5px 15px;
    margin: 0px;
  `;
  const HeaderText = styled.span`
    letter-spacing: 1.25px;
    display: inline;
    font-size: 24px;
    font-family: "Karla", sans-serif;
  `;
  const HeaderSubtitle = styled.span`
    font-size: 13px;
    display: inline;
    font-weight: lighter;
  `;
  const Emoji = styled.span`
    @media screen and (max-width: 400px) {
      display: none;
    }
    right: 5px;
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
