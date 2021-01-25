import {VIEW_SUBJECT, STOP_VIEWING_SUBJECT} from '../actionTypes';

export const viewSubject = subject => dispatch => {
  dispatch({type: VIEW_SUBJECT, payload: Object.assign({}, subject)});
};
export const stopViewing = () => dispatch => {
  dispatch({type: STOP_VIEWING_SUBJECT});
};
