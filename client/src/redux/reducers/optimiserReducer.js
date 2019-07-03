import { BEGIN_OPTIMISATION, COMPLETE_OPTIMISATION } from "../actionTypes";

const initialState = {
  optimising: false,
  timetables: null,
  currentIndex: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
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
