import { combineReducers } from "redux";
import subjectLists from "./subjectListReducer";
import subjects from "./subjectReducer";
import optimiser from "./optimiserReducer";
import timetable from "./timetableReducer";
import optimisations from "./optimisationsReducer";
export default combineReducers({
  optimiser,
  optimisations,
  subjectLists,
  subjects,
  timetable
});
