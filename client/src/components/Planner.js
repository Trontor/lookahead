import React from "react";
import SubjectSelect from "./SubjectSelect";
import Subjects from "./Subjects";
import Optimiser from "../optimiser/Optimiser";

import { useSelector } from "react-redux";

export default function Planner() {
  const subjects = useSelector(state => state.subjects);
  const optimiser = new Optimiser(subjects);
  const { combinations, time } = optimiser.generate();
  console.log(combinations.length + " combinations, generated.");
  console.log(time.toFixed(2) + " ms");
  return (
    <div>
      <SubjectSelect />
      <Subjects />
    </div>
  );
}
