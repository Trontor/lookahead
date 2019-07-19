import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import daysOfWeek from "../../../utility/DaysOfWeek";
import timeIntToString from "../../../utility/TimeIntToString";

const InfoTable = styled.table`
  width: 100%;
  border: 1px solid black;
  margin: 10px 0;
  th {
    &.header {
      font-size: 20px;
      color: rebeccapurple;
    }
  }
`;
const ClassInfoRow = styled.tr`
  text-align: center;
  ${props =>
    props.highlight &&
    css`
      background-color: orange;
    `}
`;

export default function InfoContainer(props) {
  const optimiser = useSelector(state => state.optimiser);
  const { currentIndex, timetables } = optimiser;
  const currentCodes = [];
  // Popular currentCodes with all classcodes of the timetable, for highlighting
  if (timetables && currentIndex >= 0 && currentIndex < timetables.length) {
    const currentTimetable = timetables[currentIndex];
    for (const entry of currentTimetable.classList) {
      currentCodes.push(...entry.codes);
    }
  }
  const { description, classes } = props;
  return (
    <InfoTable>
      <tr>
        <th className="header" colspan={4}>
          {description}
        </th>
      </tr>
      <tr>
        <th>Day</th>
        <th>Start</th>
        <th>Finish</th>
        <th>Weeks</th>
      </tr>
      {classes.map(cls => {
        const { description, day, start, finish, weeks, locations } = cls;
        const isOnTimetable = cls.codes.some(code =>
          currentCodes.includes(code)
        );
        return (
          <ClassInfoRow highlight={isOnTimetable}>
            <td>{daysOfWeek[day]}</td>
            <td>{timeIntToString(start)}</td>
            <td>{timeIntToString(finish)}</td>
            <td>{weeks.length}</td>
          </ClassInfoRow>
        );
      })}
    </InfoTable>
  );
}
