import {
  BEGIN_OPTIMISATION,
  COMPLETE_OPTIMISATION,
  UPDATE_TIMETABLE,
  NEXT_TIMETABLE,
  PREVIOUS_TIMETABLE,
  CREATE_CUSTOM_TIMETABLE,
  VIEW_CUSTOM_TIMETABLES,
  VIEW_GENERATED_TIMETABLES,
  UPDATE_CUSTOM_TIMETABLE,
  ADD_RESERVED,
  REMOVE_RESERVED,
  FAIL_OPTIMISATION
} from "../actionTypes";

import axios from "axios";
import Optimiser from "../../optimiser/Optimiser";

export const nextTimetable = () => dispatch => {
  dispatch({ type: NEXT_TIMETABLE });
};

export const previousTimetable = () => dispatch => {
  dispatch({ type: PREVIOUS_TIMETABLE });
};

export const createCustomTimetable = (name, timetable) => dispatch => {
  dispatch({ type: CREATE_CUSTOM_TIMETABLE, payload: { name, timetable } });
};

export const updateCustomTimetable = (id, name, timetable) => dispatch => {
  dispatch({ type: UPDATE_CUSTOM_TIMETABLE, payload: { id, name, timetable } });
};
export const updateTimetable = (index, timetable) => dispatch => {
  dispatch({ type: UPDATE_TIMETABLE, payload: { index, timetable } });
};

export const changeToGeneratedView = () => dispatch => {
  dispatch({ type: VIEW_GENERATED_TIMETABLES });
};
export const changeToCustomView = id => dispatch => {
  dispatch({ type: VIEW_CUSTOM_TIMETABLES, payload: id });
};

export const addReservedEvent = event => dispatch => {
  dispatch({ type: ADD_RESERVED, payload: event });
};

export const removeReservedEvent = event => dispatch => {
  dispatch({ type: REMOVE_RESERVED, payload: event });
};

export const optimise = (
  subjects,
  optimisations,
  restrictions,
  reservations
) => dispatch => {
  const optimiser = new Optimiser(subjects);
  optimiser.applyTimeRestrictions(
    restrictions.earliestStart,
    restrictions.latestFinish
  );
  dispatch({ type: BEGIN_OPTIMISATION });
  try {
    const { timetables, time } = optimiser.generateAndOptimise(
      optimisations,
      reservations
    );
    axios.post("/report/optimise", {
      subjects: Object.keys(subjects),
      earliest: restrictions.earliestStart,
      latest: restrictions.latestFinish,
      generated: timetables.length,
      optimisations,
      time
    });
    dispatch({
      type: COMPLETE_OPTIMISATION,
      payload: { timetables }
    });
  } catch {
    dispatch({
      type: FAIL_OPTIMISATION
    });
  }
};
