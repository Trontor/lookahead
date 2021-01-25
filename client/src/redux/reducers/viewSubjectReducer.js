import {VIEW_SUBJECT, STOP_VIEWING_SUBJECT} from '../actionTypes';

const initialState = {viewing: false, subject: null};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIEW_SUBJECT:
      return {...state, viewing: true, subject: action.payload};
    case STOP_VIEWING_SUBJECT:
      return {...state, viewing: false, subject: null};
    default:
      return {...state};
  }
};
