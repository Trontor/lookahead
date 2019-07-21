import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Modal from "react-modal";
import timeIntToString from "../../utility/TimeIntToString";

const StyledModal = styled(Modal)`
  background-color: ${props => props.theme.sidebarBg};
  box-shadow: 1px 1px 3px -1px rgba(0, 0, 0, 0.5);
  border-top: 7px solid ${props => props.color};
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
    flex: 0 0 128px;
  }

  @media screen and (min-width: 600px) {
    flex: 0 0 150px;
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

const CloseButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: ${props => props.theme.text};
  background-color: transparent;
  border: none;
  opacity: 0.5;
  top: 18px;
  right: 18px;
  position: absolute;
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

  const closeModal = () => {
    props.closeModal();
  };
  console.log(codes);

  return (
    <StyledModal
      style={{
        overlay: { zIndex: 10, backgroundColor: "rgba(0, 0, 0, 0.75)" }
      }}
      onRequestClose={closeModal}
      isOpen={isOpen}
      contentLabel="Example Modal"
      color={color}
    >
      <CloseButton onClick={closeModal}>×</CloseButton>
      <ModalHeader>
        {codes.map(code => (
          <>
            {code}
            <br />
          </>
        ))}
      </ModalHeader>
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
