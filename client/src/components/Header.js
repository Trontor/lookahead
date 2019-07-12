import React from "react";
import styled from "styled-components";
import { regularTheme, darkTheme } from "../themes";
import { setTheme } from "../redux/actions/themeActions";
import { useSelector, useDispatch } from "react-redux";

const HeaderWrapper = styled.div`
  max-height: 60px;
  min-height: 20px;
  text-align: left;
  background-color: ${props => props.theme.main};
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
  cursor: pointer;
`;

export default function Header() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme);

  const getCurrentEmoji = () => {
    switch (currentTheme) {
      case regularTheme:
        return "🌙";
      case darkTheme:
        return "🌞";
      default:
        return "👀";
    }
  };

  const switchTheme = () => {
    if (currentTheme === regularTheme) {
      dispatch(setTheme(darkTheme));
    } else {
      dispatch(setTheme(regularTheme));
    }
  };
  const emoji = getCurrentEmoji();
  return (
    <HeaderWrapper>
      <HeaderText>lookahead</HeaderText>
      <HeaderSubtitle>
        A University of Melbourne Timetable Optimiser
      </HeaderSubtitle>
      <Emoji onClick={switchTheme}>
        <span aria-label={`${emoji} emoji`} role="img">
          {emoji}
        </span>
      </Emoji>
    </HeaderWrapper>
  );
}
