import {
  FETCH_SUBJECT_LIST_BEGIN,
  FETCH_SUBJECT_LIST_SUCCESS,
  FETCH_SUBJECT_LIST_FAILURE
} from "../actionTypes";
import ReactGA from "react-ga";

const initialState = {
  loading: false,
  error: null,
  lists: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECT_LIST_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_SUBJECT_LIST_SUCCESS:
      const list = action.payload.list;
      const selectOptions = [];
      ReactGA.event({
        category: "Subject List",
        action: "Loaded " + action.payload.studyPeriod
      });
      list.forEach(subject => {
        selectOptions.push({
          label: subject.code + " - " + subject.name,
          value: subject.name,
          code: subject.code
        });
      });
      const updatedLists = {
        ...state.lists,
        [action.payload.studyPeriod]: selectOptions
      };
      return {
        ...state,
        loading: false,
        lists: updatedLists
      };
    case FETCH_SUBJECT_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
