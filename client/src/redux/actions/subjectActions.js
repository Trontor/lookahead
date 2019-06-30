import {
  GET_SUBJECT_BEGIN,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAILURE
} from "../actionTypes";
import axios from "axios";

const getSubjectBegin = (code, name) => ({
  type: GET_SUBJECT_BEGIN,
  payload: { code, name }
});

const getSubjectSuccess = (code, classInfo) => ({
  type: GET_SUBJECT_SUCCESS,
  payload: { code, classInfo }
});

export const getSubjectFailure = (code, error) => ({
  type: GET_SUBJECT_FAILURE,
  payload: { code, error }
});

export const getSubject = (year, studyPeriod, code, name) => {
  return dispatch => {
    dispatch(getSubjectBegin(code, name));
    const listURL = `/subject?year=${year}&period=${studyPeriod}&code=${code}`;
    return axios
      .get(listURL)
      .then(res => dispatch(getSubjectSuccess(code, res.data)))
      .catch(err => dispatch(getSubjectFailure(code, err)));
  };
};
