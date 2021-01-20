import { SET_TIME_FORMAT } from "../actionTypes";

export const setTimeFormat = (timeFormat) => ({
    type: SET_TIME_FORMAT,
    payload: timeFormat,
});
