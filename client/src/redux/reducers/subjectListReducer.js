import {
  FETCH_SUBJECT_LIST_BEGIN,
  FETCH_SUBJECT_LIST_SUCCESS,
  FETCH_SUBJECT_LIST_FAILURE
} from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  subjectLists: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECT_LIST_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_SUBJECT_LIST_SUCCESS:
      const updatedLists = {
        ...state.subjectLists,
        [action.payload.studyPeriod]: action.payload.list
      };
      return {
        ...state,
        loading: false,
        subjectLists: updatedLists
      };
    case FETCH_SUBJECT_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
