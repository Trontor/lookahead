import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Modal from "react-modal";

// let modalEvent = {
//   extendedProps: {
//     locations: 1,
//     type: "Variable",
//     classCode: { number: 1, type: "W" },
//     codes: ["COMP10001/U/1/SM2/W01/08"],
//     streamNumber: 8,
//     code: "COMP10001",
//     subjectName: "Foundations of Computing"
//   }
// };

const StyledModal = styled(Modal)`
  background-color: white;
  color: black;
  outline: 0;
  border-radius: 3px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90%;
  top: 20%;
  left: 5%;
`;

export default function ClassModal(props) {
  const {
    subjectName,
    code,
    day,
    color,
    startInt,
    finishInt,
    weeks,
    locations,
    isOpen
  } = props;
  console.log("Received props", props);

  return (
    <StyledModal
      style={{ overlay: { zIndex: 10 } }}
      isOpen={isOpen}
      contentLabel="Example Modal"
    >
      <div>
        <h1>Subject Code: {code}</h1>
        <h2>Subject Name: {subjectName}</h2>
        <h2>Color: {color}</h2>
        <h2>Start: {startInt}</h2>
        <h2>Finish: {finishInt}</h2>
        <h2>Locations: {locations}</h2>
      </div>
    </StyledModal>
  );
}
