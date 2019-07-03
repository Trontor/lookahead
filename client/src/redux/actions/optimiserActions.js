import { BEGIN_OPTIMISATION, COMPLETE_OPTIMISATION } from "../actionTypes";

import Optimiser from "../../optimiser/Optimiser";

export const optimise = subjects => dispatch => {
  const optimiser = new Optimiser(subjects);
  dispatch({ type: BEGIN_OPTIMISATION });
  const { timetables, time } = optimiser.generate();
  dispatch({ type: COMPLETE_OPTIMISATION, payload: { timetables } });
};
