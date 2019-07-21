import React from "react";
import { useSelector } from "react-redux";
import { InfoTable, ClassInfoRow } from "./InfoContainer";
import timeIntToString from "../../../utility/TimeIntToString";
import styled, { css } from "styled-components";
import daysOfWeek from "../../../utility/DaysOfWeek";
import { moveStream } from "../../Timetable/TimetableViewerFunctions";

const StreamClassInfoRow = styled.tr`
  cursor: pointer;
  ${props =>
    props.highlight &&
    css`
      background-color: ${props.color};
      color: #3f3844;
      ${props.firstRow &&
        css`
          td:last-child {
            border-top-right-radius: 3px;
          }
          td:first-child {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }
        `}
      ${props.lastRow &&
        css`
          td:last-child {
            border-bottom-right-radius: 3px;
          }
        `}
    `}

  ${props =>
    props.odd &&
    !props.highlight &&
    css`
      background-color: ${props => props.theme.sidebarBg};
      td:first-child {
        background-color: inherit;
      }
    `}

  td {
    padding: 3px 5px;
  }
`;

export default function StreamInfoContainer(props) {
  const { streams, type, name, color, subjectCode } = props;
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

  const currentStream = streams.find(stream =>
    stream.classes.some(cls =>
      cls.codes.some(code => currentCodes.includes(code))
    )
  );

  const currentStreamNumbers = !currentStream
    ? []
    : currentStream.streamNumbers;
  return (
    <InfoTable>
      {/* Headers */}
      <tr>
        <th className="header" colspan={4}>
          {name}
        </th>
      </tr>
      <tr>
        <th>Stream</th>
        <th>Day</th>
        <th>Start</th>
        <th>Finish</th>
        <th>Weeks</th>
      </tr>
      {/* We map the streams */}
      {streams.map((stream, streamIndex) => {
        // Important information
        const { classes, streamNumbers } = stream;
        const rowSpan = classes.length;
        const streamText = streamNumbers.join(" & ");
        // Render row for this stream
        return (
          <>
            {classes.map((cls, idx) => {
              const { description, day, start, finish, weeks, locations } = cls;
              const isOnTimetable = cls.codes.some(code =>
                currentCodes.includes(code)
              );
              return (
                <StreamClassInfoRow
                  odd={streamIndex % 2 !== 0}
                  firstRow={idx === 0}
                  lastRow={idx === rowSpan - 1}
                  highlight={isOnTimetable}
                  color={color}
                  onClick={() => {
                    if (!currentStreamNumbers.length) {
                      return;
                    }
                    moveStream(
                      subjectCode,
                      type,
                      currentStreamNumbers[0],
                      streamNumbers[0]
                    );
                  }}
                >
                  {idx === 0 && <td rowSpan={rowSpan}>{streamText}</td>}
                  <td>{daysOfWeek[day]}</td>
                  <td>{timeIntToString(start)}</td>
                  <td>{timeIntToString(finish)}</td>
                  <td>{weeks.length}</td>
                </StreamClassInfoRow>
              );
            })}
          </>
        );
      })}
      {/* {classes.map(cls => {
        const { description, day, start, finish, weeks, locations } = cls;
        const isOnTimetable = cls.codes.some(code =>
          currentCodes.includes(code)
        );
        return (
          <ClassInfoRow highlight={isOnTimetable} color={color}>
            <td>{daysOfWeek[day]}</td>
            <td>{timeIntToString(start)}</td>
            <td>{timeIntToString(finish)}</td>
            <td>{weeks.length}</td>
          </ClassInfoRow>
        );
      })} */}
    </InfoTable>
  );
}
