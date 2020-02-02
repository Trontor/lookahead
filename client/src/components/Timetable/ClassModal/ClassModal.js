import React from "react";
import timeIntToString from "../../../utility/TimeIntToString";
import {
  CloseButton,
  ModalHeader,
  StyledModal,
  SubjectAttribute,
  SubjectInfo
} from "./ClassModalStyles";
export default function ClassModal(props) {
  const {
    subjectName,
    codes,
    code,
    // day,
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
      ariaHideApp={false}
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
          <React.Fragment key={code}>
            {code}
            <br />
          </React.Fragment>
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
        {locations.map(loc => (
          <React.Fragment key={loc}>
            {loc}
            <br />
          </React.Fragment>
        ))}
      </SubjectInfo>
    </StyledModal>
  );
}
