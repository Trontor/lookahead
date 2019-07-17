import {
  GET_CLUBS_SUCCESS,
  GET_CLUBS_BEGIN,
  GET_CLUBS_FAILURE
} from "../actionTypes";

const initialState = { clubs: [], loading: false, error: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLUBS_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_CLUBS_SUCCESS:
      return { ...state, clubs: action.payload, loading: false, error: null };
    case GET_CLUBS_FAILURE:
      return { ...state, clubs: [], loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
