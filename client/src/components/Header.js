import React from "react";
import styled from "styled-components";
import { regularTheme, darkTheme } from "../themes";
import { setTheme } from "../redux/actions/themeActions";
import { useSelector, useDispatch } from "react-redux";

const HeaderWrapper = styled.div`
  max-height: 60px;
  min-height: 20px;
  text-align: left;
  background-color: ${props => props.theme.headerBg};
  display: flex;
  justify-content: center;
  /* align-content: center; */
  flex-direction: column;
  color: white;
  padding: 14px 12px;
  margin: 0px;
  z-index: 2;
  position: relative;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 960px) {
  }
`;

const HeaderText = styled.div`
  letter-spacing: 0.02em;
  text-transform: lowercase;
  display: inline;
  font-family: "Quicksand";
  font-size: 24px;
  font-weight: 800;
  padding-bottom: 1px;
`;

const HeaderSubtitle = styled.span`
  font-size: 10px;
  display: inline;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.08em;
  opacity: 0.8;
`;

const EyeEmoji = styled.span`
  font-size: 24px;
  transform: translateY(10px);
`;

const Emoji = styled.span`
  right: 12px;
  font-size: 24px;
  position: absolute;
  transform: translateY(2px);
  text-align: right;
  cursor: pointer;

  @media screen and (max-width: 359px) {
    display: none;
  }
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
      <HeaderText>
        Lookahead <EyeEmoji>👀</EyeEmoji>
      </HeaderText>
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
