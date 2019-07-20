import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

let modalEvent = {
  extendedProps: {
    locations: 1,
    type: "Variable",
    classCode: { number: 1, type: "W" },
    codes: ["COMP10001/U/1/SM2/W01/08"],
    streamNumber: 8,
    code: "COMP10001",
    subjectName: "Foundations of Computing"
  }
};

const ModalContent = styled.div`
  width: 100%;
  padding: 10px;
`;

export default function ClassModal(props) {
  const { name, code, day, start, finish, weeks, locations } = props;

  return(
    <ModalContent>
      <div>
        <h1>Subject Code: {modalEvent.extendedProps.code}</h1>
        <h2>Subject Name: {modalEvent.extendedProps.subjectName}</h2>
        <h2>Start: {modalEvent.extendedProps.start}</h2>
        <h2>Finish: {modalEvent.extendedProps.finish}</h2>
        <h2>Locations: {modalEvent.extendedProps.locations}</h2>
      </div>
    </ModalContent>
  );
}