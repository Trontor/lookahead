import {
  GET_CLUBS_SUCCESS,
  GET_CLUBS_BEGIN,
  GET_CLUBS_FAILURE
} from "../actionTypes";
import ReactGA from "react-ga";

const initialState = { clubs: [], loading: false, error: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLUBS_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_CLUBS_SUCCESS:
      ReactGA.event({
        category: "Sponsors",
        action: "Loaded " + action.payload.length
      });
      return { ...state, clubs: action.payload, loading: false, error: null };
    case GET_CLUBS_FAILURE:
      ReactGA.event({
        category: "Sponsors",
        action: "Load Failed"
      });
      return { ...state, clubs: [], loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
