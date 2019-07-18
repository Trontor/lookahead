import { combineReducers } from "redux";
import subjectLists from "./subjectListReducer";
import subjects from "./subjectReducer";
import optimiser from "./optimiserReducer";
import timetable from "./timetableReducer";
import optimisations from "./optimisationsReducer";
import theme from "./themeReducer";
import sponsors from "./sponsorReducer";
export default combineReducers({
  optimiser,
  optimisations,
  subjectLists,
  subjects,
  timetable,
  theme,
  sponsors
});
