import { combineReducers } from "redux";
import subjectLists from "./subjectListReducer";
import subjects from "./subjectReducer";

export default combineReducers({ subjectLists, subjects });
