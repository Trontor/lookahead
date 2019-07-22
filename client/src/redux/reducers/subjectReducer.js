import {
  GET_SUBJECT_BEGIN,
  REMOVE_SUBJECT,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAILURE,
  CHANGE_SUBJECT_COLOR
} from "../actionTypes";
import colors from "../../utility/SubjectColors.js";
import ReactGA from "react-ga";

const initialState = {};

const findColor = state => {
  // Copy colors pool
  let colorPool = [...colors];
  Object.entries(state).forEach(([code, { color }]) =>
    colorPool.splice(colorPool.indexOf(color), 1)
  );
  if (colorPool) {
    return colorPool.pop();
  } else return "black";
};

const changeSubjectColor = (state, { code, studyPeriod, year, color }) => {
  const newState = { ...state };
  if (
    state[code] &&
    state[code].year === year &&
    state[code].studyPeriod === studyPeriod
  ) {
    state[code].color = color;
  }
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SUBJECT_COLOR:
      return changeSubjectColor(state, action.payload);
    case GET_SUBJECT_BEGIN:
      const { code, name, year } = action.payload;
      // code: "SWEN30006"
      // label: "SWEN30006 - Software Modelling and Design"
      // value: "Software Modelling and Design"
      // Check if the subject has already been added
      if (state[code] && state[code].year === year) {
        return state;
      }
      return {
        ...state,
        [code]: {
          name,
          year,
          color: findColor(state),
          data: null,
          error: null,
          loading: true
        }
      };
    case GET_SUBJECT_SUCCESS:
      // If the subject entry doesnt exist at all, it's probably been removed
      if (!state[action.payload.code]) {
        return state;
      }
      console.log("Success!:", action.payload);

      // Update localstorage
      let subjects = JSON.parse(localStorage.getItem("subjects"));
      const newSubject = {
        year: action.payload.year,
        code: action.payload.code,
        name: action.payload.name,
        studyPeriod: action.payload.studyPeriod
      };
      if (!subjects) {
        subjects = [newSubject];
      } else if (
        !subjects.some(
          ({ year, code, studyPeriod }) =>
            year === action.payload.year &&
            code === action.payload.code &&
            studyPeriod === action.payload.studyPeriod
        )
      ) {
        subjects.push(newSubject);
      }
      localStorage.setItem("subjects", JSON.stringify(subjects));
      ReactGA.event({
        category: "Subjects",
        action: "Loaded " + action.payload.code
      });
      // Otherwise, update the subject entry
      return {
        ...state,
        [action.payload.code]: {
          ...state[action.payload.code],
          data: action.payload.classInfo,
          loading: false
        }
      };
    case GET_SUBJECT_FAILURE:
      // Update error, remove data, stop loading
      return {
        ...state,
        [action.payload.code]: {
          ...state[action.payload.code],
          data: null,
          error: action.payload.error,
          loading: false
        }
      };
    case REMOVE_SUBJECT:
      // Remove subject from localStorage

      let localStorageSubjects = JSON.parse(localStorage.getItem("subjects"));
      if (localStorageSubjects) {
        localStorageSubjects = localStorageSubjects.filter(
          ({ year, code, studyPeriod }) =>
            year !== action.payload.year &&
            code !== action.payload.code &&
            studyPeriod !== action.payload.studyPeriod
        );

        localStorage.setItem("subjects", JSON.stringify(localStorageSubjects));
      }
      // Remove subject from state
      const { [action.payload.code]: value, ...newState } = state;
      return newState;
    default:
      return state;
  }
};
