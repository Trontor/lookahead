import {
  ADD_RESERVED,
  BEGIN_OPTIMISATION,
  COMPLETE_OPTIMISATION,
  CREATE_CUSTOM_TIMETABLE,
  FAIL_OPTIMISATION,
  NEXT_TIMETABLE,
  PREVIOUS_TIMETABLE,
  REMOVE_RESERVED,
  UPDATE_CUSTOM_TIMETABLE,
  UPDATE_TIMETABLE,
  VIEW_CUSTOM_TIMETABLES,
  VIEW_GENERATED_TIMETABLES
} from "../actionTypes";

import ReactGA from "react-ga";
import uuid from "uuid/v1";

const initialState = {
  optimising: false,
  reserved: [],
  timetables: null,
  currentView: "generated",
  currentIndex: 0,
  currentCustomIndex: 0,
  failed: false,
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
    case ADD_RESERVED:
      ReactGA.event({
        category: "Reserved",
        action: "Add Reserved"
      });
      return { ...state, reserved: [...state.reserved, action.payload] };
    case REMOVE_RESERVED:
      ReactGA.event({
        category: "Reserved",
        action: "Remove Reserved"
      });
      return {
        ...state,
        reserved: [
          ...state.reserved.filter(
            e => e.start.valueOf() !== action.payload.start.valueOf()
          )
        ]
      };
    case VIEW_GENERATED_TIMETABLES:
      // Regular timetable index
      let tt_index = state.currentIndex;
      if (tt_index < 0 || tt_index >= state.timetables.length) {
        tt_index = 0;
      }
      return { ...state, currentView: "generated", currentIndex: tt_index };
    case VIEW_CUSTOM_TIMETABLES:
      // Custom timetable index
      const id = action.payload;
      let ctt_index = state.currentCustomIndex;
      if (id) {
        const match = state.customTimetables.find(val => val.id === id);
        if (match) {
          ctt_index = state.customTimetables.indexOf(match);
        }
      }
      if (ctt_index < 0 || ctt_index >= state.customTimetables.length) {
        ctt_index = 0;
      }
      return {
        ...state,
        currentView: "custom",
        currentCustomIndex: ctt_index
      };
    case CREATE_CUSTOM_TIMETABLE:
      const newCustomTimetable = {
        id: uuid().split("-")[0],
        name: action.payload.name,
        timetable: action.payload.timetable
      };
      return {
        ...state,
        customTimetables: [...state.customTimetables, newCustomTimetable],
        currentCustomIndex: state.currentCustomIndex + 1
      };
    case UPDATE_TIMETABLE:
      const updateIndex = action.payload.index;
      const allTimetables = [...state.timetables];
      if (updateIndex >= 0 && updateIndex < allTimetables.length) {
        allTimetables[updateIndex] = action.payload.timetable;
      }
      ReactGA.event({
        category: "Timetables",
        action: "Updated Timetable"
      });
      return { ...state, timetables: allTimetables };
    case UPDATE_CUSTOM_TIMETABLE:
      const customTTCopy = [...state.customTimetables];
      const customFound = customTTCopy.find(
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
      ReactGA.event({
        category: "Timetables",
        action: "Next Timetable"
      });
      if (state.currentIndex + 1 < state.timetables.length) {
        return { ...state, currentIndex: state.currentIndex + 1 };
      }
      return state;
    case PREVIOUS_TIMETABLE:
      ReactGA.event({
        category: "Timetables",
        action: "Previous Timetable"
      });
      if (state.currentIndex - 1 >= 0) {
        return { ...state, currentIndex: state.currentIndex - 1 };
      }
      return state;
    case BEGIN_OPTIMISATION:
      return { ...state, optimising: true };
    case FAIL_OPTIMISATION:
      return { ...state, optimising: false, timetables: null, failed: true };
    case COMPLETE_OPTIMISATION:
      const { timetables } = action.payload;
      console.log(timetables.length + " timetables generated.");
      ReactGA.event({
        category: "Optimisations",
        action: "Optimised Timetables",
        value: timetables.length
      });
      return {
        ...state,
        failed: false,
        optimising: false,
        currentIndex: 0,
        timetables
      };

    default:
      return state;
  }
};
