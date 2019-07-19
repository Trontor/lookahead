import React from "react";
import styled from "styled-components";
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
  tr {
    text-align: center;
  }
`;
export default function InfoContainer(props) {
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
        return (
          <tr>
            <td>{daysOfWeek[day]}</td>
            <td>{timeIntToString(start)}</td>
            <td>{timeIntToString(finish)}</td>
            <td>{weeks.length}</td>
          </tr>
        );
      })}
    </InfoTable>
  );
}
