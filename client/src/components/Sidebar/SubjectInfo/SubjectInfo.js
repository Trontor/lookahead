import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { stopViewing } from "../../../redux/actions/viewSubjectActions";
import groupByArray from "../../../utility/GroupByArray";
import InfoContainer from "./InfoContainer";

const ViewSubjectWrapper = styled.div``;

const GoBackButton = styled.button`
  position: absolute;
  cursor: pointer;
  max-width: 50px;
  border-radius: 3px;
  color: #f9f9f9;
  background-color: ${props => props.theme.secondary};
  padding: 6px 5px;
  width: 100%;
  border: none;
  left: ${({ left }) => (left ? 0 : "auto")};
  right: ${({ right }) => (right ? 0 : "auto")};

  :disabled {
    display: none;
  }

  :hover {
    background-color: ${props => props.theme.secondaryDark};
    border-color: ${props => props.theme.secondaryDark};
  }
`;

export default function SubjectInfo(props) {
  const dispatch = useDispatch();
  const { subject } = props;
  const {
    name,
    year,
    data: {
      code,
      period,
      _mandatoryClasses,
      _regularClasses,
      _streamContainers
    }
  } = subject;
  console.log(subject);

  return (
    <ViewSubjectWrapper>
      <GoBackButton onClick={() => dispatch(stopViewing())}>
        <i className="fa fa-angle-left" />
      </GoBackButton>
      <br />
      <br />
      <br />
      {name}
      {year}
      {code}
      {period}
      {_mandatoryClasses &&
        groupByArray(_mandatoryClasses, "description").map((kvp, idx) => (
          <InfoContainer key={idx} description={kvp.key} classes={kvp.values} />
        ))}
      {_regularClasses &&
        groupByArray(_regularClasses, "description").map((kvp, idx) => (
          <InfoContainer key={idx} description={kvp.key} classes={kvp.values} />
        ))}
    </ViewSubjectWrapper>
  );
}
