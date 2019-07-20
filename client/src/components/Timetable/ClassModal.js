import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Modal from "react-modal";
import timeIntToString from "../../utility/TimeIntToString";

const StyledModal = styled(Modal)`
  background-color: white;
  color: black;
  outline: 0;
  border-radius: 3px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: absolute;
  width: 90%;
  top: 20%;
  left: 5%;
`;

const SubjectAttribute = styled.div`
  font-weight: bold;
`;

const SubjectInfo = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
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
        <SubjectInfo>
          <SubjectAttribute>Subject Code:</SubjectAttribute>
          {code}
        </SubjectInfo>
        <SubjectInfo>
          <SubjectAttribute>Subject Name: </SubjectAttribute>
          {subjectName}
        </SubjectInfo>
        <SubjectInfo>
          <SubjectAttribute>Start: </SubjectAttribute>
          {timeIntToString(startInt)}
        </SubjectInfo>
        <SubjectInfo>
          <SubjectAttribute>Finish: </SubjectAttribute>
          {timeIntToString(finishInt)}
        </SubjectInfo>
        <SubjectInfo>
          <SubjectAttribute>Locations: </SubjectAttribute>
          {locations}
        </SubjectInfo>
    </StyledModal>
  );
}
