import {
  BEGIN_OPTIMISATION,
  COMPLETE_OPTIMISATION,
  NEXT_TIMETABLE,
  PREVIOUS_TIMETABLE
} from "../actionTypes";

import Optimiser from "../../optimiser/Optimiser";

export const nextTimetable = () => dispatch => {
  dispatch({ type: NEXT_TIMETABLE });
};
export const previousTimetable = () => dispatch => {
  dispatch({ type: PREVIOUS_TIMETABLE });
};

export const optimise = (subjects, optimisations) => dispatch => {
  const optimiser = new Optimiser(subjects);
  dispatch({ type: BEGIN_OPTIMISATION });
  const { timetables, time } = optimiser.generateAndOptimise(optimisations);
  dispatch({ type: COMPLETE_OPTIMISATION, payload: { timetables } });
};
