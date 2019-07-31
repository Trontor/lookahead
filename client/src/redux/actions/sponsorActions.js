import {
  GET_SPONSORS_BEGIN,
  GET_SPONSORS_SUCCESS,
  GET_SPONSORS_FAILURE
} from "../actionTypes";
import axios from "axios";

const getClubsBegin = () => ({
  type: GET_SPONSORS_BEGIN
});

const getClubsSuccess = sponsors => ({
  type: GET_SPONSORS_SUCCESS,
  payload: sponsors
});

const getClubsFailure = error => ({
  type: GET_SPONSORS_FAILURE,
  payload: error
});

export const fetchClubList = () => {
  return dispatch => {
    dispatch(getClubsBegin());
    const listURL = `/sponsorlist`;
    return axios
      .get(listURL)
      .then(res => dispatch(getClubsSuccess(res.data)))
      .catch(err => dispatch(getClubsFailure(err)));
  };
};
