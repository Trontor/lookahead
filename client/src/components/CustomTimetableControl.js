import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeToCustomView,
  changeToGeneratedView
} from "../redux/actions/optimiserActions";

export default function CustomTimetableControl() {
  const { customTimetables } = useSelector(state => state.optimiser);
  const dispatch = useDispatch();
  const viewCustomTimetable = ({ id }) => {
    dispatch(changeToCustomView(id));
  };
  const viewGenerated = () => {
    dispatch(changeToGeneratedView());
  };
  return (
    <div>
      <button onClick={() => viewGenerated()}>View Generated</button>
      {customTimetables.map(custom => (
        <button key={custom.id} onClick={() => viewCustomTimetable(custom)}>
          {custom.name}
        </button>
      ))}
    </div>
  );
}
