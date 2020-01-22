import { SET_THEME } from "../actionTypes";
import { regularTheme, darkTheme } from "../../themes";
import ReactGA from "react-ga";

let initialState = regularTheme;
if (localStorage.getItem("theme")) {
  initialState =
    localStorage.getItem("theme") === "regular" ? regularTheme : darkTheme;
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  initialState = darkTheme;
}
let themeTimeout = null;
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      if (themeTimeout) {
        clearTimeout(themeTimeout);
      }
      themeTimeout = setTimeout(() => {
        ReactGA.event({
          category: "Theme",
          action: "Set theme to " + action.payload.name
        });
      }, 60 * 1000);
      localStorage.setItem("theme", action.payload.name);

      return action.payload;
    default:
      return state;
  }
};
