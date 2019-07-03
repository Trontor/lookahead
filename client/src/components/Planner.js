import React from "react";
import SubjectSelect from "./SubjectSelect";
import Subjects from "./Subjects";
import TimetableViewer from "./TimetableViewer";
import { useSelector, useDispatch } from "react-redux";
import { optimise } from "../redux/actions/optimiserActions";

export default function Planner() {
  const subjects = useSelector(state => state.subjects);
  const dispatch = useDispatch();
  dispatch(optimise(subjects));
  return (
    <div>
      <SubjectSelect />
      <Subjects />
      <TimetableViewer />
    </div>
  );
}
