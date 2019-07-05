import {
  BEGIN_OPTIMISATION,
  COMPLETE_OPTIMISATION,
  NEXT_TIMETABLE,
  PREVIOUS_TIMETABLE,
  CREATE_CUSTOM_TIMETABLE,
  UPDATE_CUSTOM_TIMETABLE
} from "../actionTypes";
import uuid from "uuid/v1";

const initialState = {
  optimising: false,
  timetables: null,
  currentIndex: 0,
  customTimetables: [
    /**
     * {
     *  id: unique uuid
     *  name: 'Name of Custom Timetable'
     *  timetable: [SubjectClass]
     * }
     */
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CUSTOM_TIMETABLE:
      const newCustomTimetable = {
        id: uuid().split("-")[0],
        name: action.payload.name,
        timetable: action.payload.timetable
      };
      return {
        ...state,
        customTimetables: [...state.customTimetables, newCustomTimetable]
      };
    case UPDATE_CUSTOM_TIMETABLE:
      const customTTCopy = [...state.customTimetables];
      const customFound = customTTCopy.filter(
        ctt => ctt.id === action.payload.id
      );
      if (!customFound) {
        return state;
      } else {
        // Update timetable information
        customFound.name = action.payload.name;
        customFound.timetable = action.payload.timetable;
      }
      return { ...state, customTimetables: customTTCopy };
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
