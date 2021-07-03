import {SET_TIME_FORMAT} from '../actionTypes';

let initialState = '24hr';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_FORMAT:
      return action.payload;
    default:
      return state;
  }
};
