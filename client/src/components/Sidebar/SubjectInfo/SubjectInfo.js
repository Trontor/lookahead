import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { stopViewing } from "../../../redux/actions/viewSubjectActions";
import groupByArray from "../../../utility/GroupByArray";
import InfoContainer from "./InfoContainer";
import StreamInfoContainer from "./StreamInfoContainer";

const ViewSubjectWrapper = styled.div``;

const GoBackButton = styled.button`
  cursor: pointer;
  width: 130px;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  margin-top: 10px;
  border-radius: 3px;
  color: #f9f9f9;
  background-color: ${props => props.theme.secondary};
  padding: 6px 5px;
  border: none;
  left: ${({ left }) => (left ? 0 : "auto")};
  right: ${({ right }) => (right ? 0 : "auto")};

  i {
    margin-right: 10px;
  }

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
  const streamKeys = Object.keys(_streamContainers);
  console.log(streamKeys);

  return (
    <ViewSubjectWrapper>
      <GoBackButton onClick={() => dispatch(stopViewing())}>
        <i className="fa fa-angle-left" />
        Subjects List
      </GoBackButton>
      <InfoWrapper>
        <Info>{name}</Info>
      </InfoWrapper>
      {_mandatoryClasses &&
        groupByArray(_mandatoryClasses, "description").map((kvp, idx) => (
          <InfoContainer
            color={color}
            key={idx}
            description={kvp.key}
            classes={kvp.values}
          />
        ))}
      {_regularClasses &&
        groupByArray(_regularClasses, "description").map((kvp, idx) => (
          <InfoContainer
            color={color}
            key={idx}
            description={kvp.key}
            classes={kvp.values}
          />
        ))}
      {streamKeys &&
        streamKeys.map((key, idx) => {
          const container = _streamContainers[key];
          console.log(container);
          return (
            <StreamInfoContainer
              color={color}
              key={idx}
              name={container.name}
              streams={container.streams}
            />
          );
        })}
    </ViewSubjectWrapper>
  );
}
