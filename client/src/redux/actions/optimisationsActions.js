import {
  SET_TIME_RANGE,
  ADD_AVOID_DAY,
  REMOVE_AVOID_DAY,
  SET_SKIP_LECTURES,
  SET_CRAM_CLASSES,
  SET_BREAK,
  SET_MINIMISE_CLASHES
} from "../actionTypes";

export const setTimeRange = (min, max) => dispatch => {
  dispatch({ type: SET_TIME_RANGE, payload: { min, max } });
};

export const addAvoidDay = dayIndex => dispatch => {
  dispatch({ type: ADD_AVOID_DAY, payload: dayIndex });
};

export const removeAvoidDay = dayIndex => dispatch => {
  dispatch({ type: REMOVE_AVOID_DAY, payload: dayIndex });
};

export const setSkipLectures = truthy => dispatch => {
  dispatch({ type: SET_SKIP_LECTURES, payload: truthy });
};

export const setCramClasses = truthy => dispatch => {
  dispatch({ type: SET_CRAM_CLASSES, payload: truthy });
};

export const setMinimiseClashes = truthy => dispatch => {
  dispatch({ type: SET_MINIMISE_CLASHES, payload: truthy });
};

export const setBreak = hours => dispatch => {
  dispatch({ type: SET_BREAK, payload: hours });
};
