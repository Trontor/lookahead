import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Modal from "react-modal";
import timeIntToString from "../../utility/TimeIntToString";

const StyledModal = styled(Modal)`
  background-color: ${props => props.theme.sidebarBg};
  box-shadow: 1px 1px 3px -1px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.text};
  outline: 0;
  border-radius: 3px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: absolute;
  max-width: 90%;
  height: auto;
  margin: 0 auto;
  top: 23%;
  position: relative;

  @media screen and (min-width: 480px) {
    padding: 20px;
  }

  @media screen and (min-width: 600px) {
    padding: 28px;
    max-width: 560px;
  }
`;

const ModalHeader = styled.h1`
  margin-top: 0;
  font-size: 17px;
  border-bottom: solid 1px ${props => props.theme.ttBorderColor};
  padding-bottom: 7px;
`;

const SubjectAttribute = styled.div`
  font-weight: bold;

  @media screen and (min-width: 480px) {
    width: 128px;
  }

  @media screen and (min-width: 600px) {
    width: 150px;
  }
`;

const SubjectInfo = styled.div`
  font-size: 14px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 4px;
  }

  @media screen and (min-width: 480px) {
    display: flex;
    flex-direction: row;
  }
`;

export default function ClassModal(props) {
  const {
    subjectName,
    codes,
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
      style={{ overlay: { zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.7)' } }}
      isOpen={isOpen}
      contentLabel="Example Modal"
    >
        <ModalHeader>{codes}</ModalHeader>
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
          <SubjectAttribute>Weeks: </SubjectAttribute>
          {weeks}
        </SubjectInfo>
        <SubjectInfo>
          <SubjectAttribute>Locations: </SubjectAttribute>
          {locations}
        </SubjectInfo>
    </StyledModal>
  );
}
