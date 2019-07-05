import { combineReducers } from "redux";
import subjectLists from "./subjectListReducer";
import subjects from "./subjectReducer";
import optimiser from "./optimiserReducer";
import timetable from "./timetableReducer";
export default combineReducers({
  optimiser,
  subjectLists,
  subjects,
  timetable
});
