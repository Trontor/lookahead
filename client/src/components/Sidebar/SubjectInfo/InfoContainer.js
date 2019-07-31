import React from "react";
import { useSelector } from "react-redux";
import { ClassInfoRow, InfoTable } from "./ContainerStyles.js";
import daysOfWeek from "../../../utility/DaysOfWeek";
import timeIntToString from "../../../utility/TimeIntToString";
import { moveRegularClassByNewClass } from "../../Timetable/Viewer/utility/TimetableViewerFunctions";

export default function InfoContainer(props) {
  const optimiser = useSelector(state => state.optimiser);
  const { currentIndex, timetables } = optimiser;
  const currentCodes = [];
  // Popular currentCodes with all classcodes of the timetable, for highlighting
  const hasValidTimetable =
    timetables &&
    currentIndex >= 0 &&
    currentIndex < timetables.length &&
    timetables[currentIndex].classList.length;
  if (timetables && hasValidTimetable) {
    const currentTimetable = timetables[currentIndex];
    for (const entry of currentTimetable.classList) {
      currentCodes.push(...entry.codes);
    }
  }
  const {
    description,
    classes,
    color
    // subjectCode
  } = props;
  return (
    <InfoTable>
      <tbody>
        <tr>
          <th className="header" colSpan={4}>
            {description}
          </th>
        </tr>
        <tr>
          <th>Day</th>
          <th>Start</th>
          <th>Finish</th>
          <th>Weeks</th>
        </tr>
        {classes.map((cls, idx) => {
          const {
            // description,
            day,
            start,
            finish,
            weeks
            // locations
          } = cls;
          const isOnTimetable = cls.codes.some(code =>
            currentCodes.includes(code)
          );
          return (
            <ClassInfoRow
              key={cls.codes[0]}
              odd={idx % 2 !== 1}
              highlight={isOnTimetable}
              color={color}
              onClick={() => {
                if (hasValidTimetable) moveRegularClassByNewClass(cls);
              }}
            >
              <td>{daysOfWeek[day]}</td>
              <td>{timeIntToString(start)}</td>
              <td>{timeIntToString(finish)}</td>
              <td>{weeks.length}</td>
            </ClassInfoRow>
          );
        })}
      </tbody>
    </InfoTable>
  );
}
