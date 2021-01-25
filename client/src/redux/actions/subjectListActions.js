import {
  FETCH_SUBJECT_LIST_BEGIN,
  FETCH_SUBJECT_LIST_SUCCESS,
  FETCH_SUBJECT_LIST_FAILURE,
} from '../actionTypes';
import axios from 'axios';

export const fetchSubjectListBegin = () => ({
  type: FETCH_SUBJECT_LIST_BEGIN,
});

export const fetchSubjectListSuccess = (studyPeriod, list) => ({
  type: FETCH_SUBJECT_LIST_SUCCESS,
  payload: {studyPeriod, list},
});

export const fetchSubjectListFailure = error => ({
  type: FETCH_SUBJECT_LIST_FAILURE,
  payload: {error},
});

export const fetchSubjectList = (year, studyPeriod) => {
  return dispatch => {
    dispatch(fetchSubjectListBegin());
    const listURL = `/subjectlist?year=${year}&period=${studyPeriod}`;
    return axios
      .get(listURL)
      .then(res => dispatch(fetchSubjectListSuccess(studyPeriod, res.data)))
      .catch(err => dispatch(fetchSubjectListFailure(err)));
  };
};
