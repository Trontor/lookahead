import { SET_THEME } from "../actionTypes";
import { regularTheme, darkTheme } from "../../themes";

const initialState =
  localStorage.getItem("theme") === "regular" ? regularTheme : darkTheme;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem("theme", action.payload.name);
      return action.payload;
    default:
      return state;
  }
};
