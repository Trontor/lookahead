import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import daysOfWeek from "../../../utility/DaysOfWeek";
import timeIntToString from "../../../utility/TimeIntToString";

export const InfoTable = styled.table`
  width: 100%;
  background: ${props => props.theme.cardBg};
  margin: 10px 0;
  padding: 7px;
  text-align: left;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border-spacing: 0;
  /* border-top: 8px solid ${props => props.color}; */
  th {
    width: 25%;
    padding-left: 4px;
    padding-bottom: 3px;

    &.header {
      font-size: 14px;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 960px) {
    /* border-left: 8px solid ${props => props.color};
    border-top: none; */
  }
`;
export const ClassInfoRow = styled.tr`
  /* text-align: center; */
  cursor: pointer;
  ${props =>
    props.highlight &&
    css`
      background-color: ${props => props.color};
    `}

  ${props =>
    props.odd &&
    !props.highlight &&
    css`
      background-color: #eee;
    `}

  td {
    padding: 2px 4px;
  }

  td:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  td:last-child {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
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
  const { description, classes, color } = props;
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
      {classes.map((cls, idx) => {
        const { description, day, start, finish, weeks, locations } = cls;
        const isOnTimetable = cls.codes.some(code =>
          currentCodes.includes(code)
        );
        return (
          <ClassInfoRow
            odd={idx % 2 !== 1}
            highlight={isOnTimetable}
            color={color}
          >
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
