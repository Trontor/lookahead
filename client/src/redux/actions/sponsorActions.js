import {
  GET_CLUBS_BEGIN,
  GET_CLUBS_SUCCESS,
  GET_CLUBS_FAILURE
} from "../actionTypes";
import axios from "axios";

const getClubsBegin = () => ({
  type: GET_CLUBS_BEGIN
});

const getClubsSuccess = sponsors => ({
  type: GET_CLUBS_SUCCESS,
  payload: sponsors
});

const getClubsFailure = error => ({
  type: GET_CLUBS_FAILURE,
  payload: error
});

export const fetchClubList = () => {
  return dispatch => {
    dispatch(getClubsBegin());
    const listURL = `/clublist`;
    return axios
      .get(listURL)
      .then(res => dispatch(getClubsSuccess(res.data)))
      .catch(err => dispatch(getClubsFailure(err)));
  };
};
