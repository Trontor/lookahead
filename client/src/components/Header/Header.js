import React from "react";
import { regularTheme, darkTheme } from "../../themes";
import { setTheme } from "../../redux/actions/themeActions";
import { useSelector, useDispatch } from "react-redux";
import {
  Emoji,
  HeaderSubtitle,
  HeaderText,
  HeaderWrapper
} from "./HeaderStyles";

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
        <img
          height="20"
          alt="Lookahead Logo"
          src={require("../../lookahead.png")}
        />
        {/* Lookahead <EyeEmoji>👀</EyeEmoji> */}
      </HeaderText>
      <HeaderSubtitle>
        A University of Melbourne Semester Planner
      </HeaderSubtitle>
      <Emoji onClick={switchTheme}>
        <span aria-label={`${emoji} emoji`} role="img">
          {emoji}
        </span>
      </Emoji>
    </HeaderWrapper>
  );
}
