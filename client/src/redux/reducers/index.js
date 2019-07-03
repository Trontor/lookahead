import { combineReducers } from "redux";
import subjectLists from "./subjectListReducer";
import subjects from "./subjectReducer";
import optimiser from "./optimiserReducer";
export default combineReducers({ optimiser, subjectLists, subjects });
