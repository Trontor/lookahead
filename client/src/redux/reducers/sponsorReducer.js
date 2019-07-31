import {
  GET_SPONSORS_SUCCESS,
  GET_SPONSORS_BEGIN,
  GET_SPONSORS_FAILURE
} from "../actionTypes";
import ReactGA from "react-ga";

const initialState = { sponsors: [], loading: false, error: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPONSORS_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_SPONSORS_SUCCESS:
      ReactGA.event({
        category: "Sponsors",
        action: "Loaded " + action.payload.length
      });
      return {
        ...state,
        sponsors: action.payload,
        loading: false,
        error: null
      };
    case GET_SPONSORS_FAILURE:
      ReactGA.event({
        category: "Sponsors",
        action: "Load Failed"
      });
      return { ...state, sponsors: [], loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
