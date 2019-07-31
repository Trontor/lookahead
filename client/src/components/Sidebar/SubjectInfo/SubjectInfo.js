import React from "react";
import { useDispatch } from "react-redux";
import { stopViewing } from "../../../redux/actions/viewSubjectActions";
import groupByArray from "../../../utility/GroupByArray";
import InfoContainer from "./InfoContainer";
import StreamInfoContainer from "./StreamInfoContainer";
import {
  GoBackButton,
  Info,
  InfoWrapper,
  ViewSubjectWrapper
} from "./SubjectInfoStyles";

export default function SubjectInfo(props) {
  const dispatch = useDispatch();
  const { subject } = props;
  const {
    name,
    color,
    // year,
    data: {
      code,
      // period,
      _mandatoryClasses,
      _regularClasses,
      _streamContainers
    }
  } = subject;
  const streamKeys = Object.keys(_streamContainers);
  const mandatoryClassGroups = groupByArray(_mandatoryClasses, "description");
  const regularClassGroups = groupByArray(_regularClasses, "description");
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
        mandatoryClassGroups.map((kvp, idx) => (
          <InfoContainer
            color={color}
            key={idx}
            description={kvp.key}
            classes={kvp.values}
          />
        ))}
      {_regularClasses &&
        regularClassGroups.map((kvp, idx) => (
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
          return (
            <StreamInfoContainer
              subjectCode={code}
              color={color}
              key={idx}
              type={container.type}
              name={container.name}
              streams={container.streams}
            />
          );
        })}
    </ViewSubjectWrapper>
  );
}
