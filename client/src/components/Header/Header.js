import React from "react";
import { regularTheme, darkTheme } from "../../themes";
import { setTheme } from "../../redux/actions/themeActions";
import { useSelector, useDispatch } from "react-redux";
import {
    Emoji,
    HeaderSubtitle,
    HeaderText,
    HeaderWrapper,
    TimeFormatSwitch,
    TimeFormatButton,
} from "./HeaderStyles";
import { setTimeFormat } from "../../redux/actions/timeFormatActions";

export default function Header() {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme);
    const currentTimeFormat = useSelector((state) => state.timeFormat);

    const emoji = useSelector((state) => {
        switch (state.theme) {
            case regularTheme:
                return "🌙";
            case darkTheme:
                return "🌞";
            default:
                return "👀";
        }
    });

    const switchTheme = () => {
        if (currentTheme === regularTheme) {
            dispatch(setTheme(darkTheme));
        } else {
            dispatch(setTheme(regularTheme));
        }
    };

    const switchTimeFormat = () => {
        if (currentTimeFormat === "12hr") {
            dispatch(setTimeFormat("24hr"));
        } else {
            dispatch(setTimeFormat("12hr"));
        }
    };

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

            <TimeFormatButton onClick={switchTimeFormat}>
                <span>{currentTimeFormat} time</span>
            </TimeFormatButton>

            <Emoji onClick={switchTheme}>
                <span aria-label={`${emoji} emoji`} role="img">
                    {emoji}
                </span>
            </Emoji>
        </HeaderWrapper>
    );
}
