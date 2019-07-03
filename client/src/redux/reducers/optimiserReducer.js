import {
  BEGIN_OPTIMISATION,
  COMPLETE_OPTIMISATION,
  NEXT_TIMETABLE,
  PREVIOUS_TIMETABLE
} from "../actionTypes";

const initialState = {
  optimising: false,
  timetables: null,
  currentIndex: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_TIMETABLE:
      if (state.currentIndex + 1 < state.timetables.length) {
        return { ...state, currentIndex: state.currentIndex + 1 };
      }
      return state;
    case PREVIOUS_TIMETABLE:
      if (state.currentIndex - 1 >= 0) {
        return { ...state, currentIndex: state.currentIndex - 1 };
      }
      return state;
    case BEGIN_OPTIMISATION:
      return { ...state, optimising: true };
    case COMPLETE_OPTIMISATION:
      const { timetables } = action.payload;
      console.log(timetables.length + " timetables generated.");
      return {
        ...state,
        optimising: false,
        currentIndex: 0,
        timetables
      };

    default:
      return state;
  }
};
