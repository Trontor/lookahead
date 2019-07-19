import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { stopViewing } from "../../../redux/actions/viewSubjectActions";
import groupByArray from "../../../utility/GroupByArray";
import InfoContainer from "./InfoContainer";

const ViewSubjectWrapper = styled.div``;

const GoBackButton = styled.button`
  cursor: pointer;
  max-width: 50px;
  margin-top: 10px;
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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 3px;

  > div {
    margin-right: 10px;
  }
`;

const Info = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export default function SubjectInfo(props) {
  const dispatch = useDispatch();
  const { subject } = props;
  const {
    name,
    color,
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
      <InfoWrapper>
        <Info>{name}</Info>
        {/* <Info>{year}</Info>
        <Info>{code}</Info> */}
        {/* <Info>{period}</Info> */}
      </InfoWrapper>
      {_mandatoryClasses &&
        groupByArray(_mandatoryClasses, "description").map((kvp, idx) => (
          <InfoContainer color={color} key={idx} description={kvp.key} classes={kvp.values} />
        ))}
      {_regularClasses &&
        groupByArray(_regularClasses, "description").map((kvp, idx) => (
          <InfoContainer color={color} key={idx} description={kvp.key} classes={kvp.values} />
        ))}
    </ViewSubjectWrapper>
  );
}
