import React from "react";
import SubjectSelect from "./SubjectSelect";
import Subjects from "./Subjects";
import TimetableViewer from "./TimetableViewer";
import { useSelector, useDispatch } from "react-redux";
import { optimise } from "../redux/actions/optimiserActions";
import OptimisationTypes from "../optimiser/optimisationTypes";

export default function Planner() {
  const subjects = useSelector(state => state.subjects);
  const dispatch = useDispatch();
  // Get subject keys
  const keys = Object.keys(subjects);
  const allLoaded = !keys.some(key => subjects[key].data === null);
  if (allLoaded && keys.length > 0) {
    console.log("All loaded!");
    console.log(subjects);
    const optimisations = [
      {
        type: OptimisationTypes.AVOID_CLASHES
      },
      {
        type: OptimisationTypes.CRAM_CLASSES
      }
    ];
    dispatch(optimise(subjects, optimisations));
  }
  return (
    <div>
      <SubjectSelect />
      <Subjects />
      <TimetableViewer />
      <button onClick={() => dispatch(optimise(subjects))}>Optimise</button>
    </div>
  );
}
