import { SET_THEME } from "../actionTypes";
import { regularTheme, darkTheme } from "../../themes";

const initialState = regularTheme;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};
