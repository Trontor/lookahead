import React from "react";
import {
  removeSubject,
  changeSubject,
  changeSubjectColor
} from "../../redux/actions/subjectActions";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { TwitterPicker } from "react-color";
import ColorPickButton from "./ColorPickButton";
import { viewSubject } from "../../redux/actions/viewSubjectActions";
const SubjectsWrapper = styled.div`
  /* margin: 5px; */
  /* min-height: 290px; */
`;
const SubjectWrapper = styled.div`
  /* color: ${props => props.textColor}; */
  position: relative;
`;

const hideMe = css`
  display: none;
`;

const loadingBorder = css`
  position: relative;
  border-color: transparent;
  height: auto;
  background-image: linear-gradient(
      ${props => props.theme.cardBg},
      ${props => props.theme.cardBg}
    ),
    repeating-linear-gradient(
      60deg,
      ${props => props.theme.loadingGradient} 0%,
      ${props => props.theme.cardBg} 25%,
      ${props => props.theme.loadingGradient} 50%,
      ${props => props.theme.cardBg} 70%,
      ${props => props.theme.loadingGradient} 100%
    );
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  background-size: 100% 100%, 200% auto;
  background-position: 0 0, 0 200%;
  background-origin: padding-box, border-box;
  animation: gradient 3s linear infinite;
  animation-fill-mode: forwards;

  @keyframes gradient {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 0 0, -200% -200%;
    }
  }

  @media screen and (min-width: 960px) {
    border-color: transparent;
    background-image: linear-gradient(
        ${props => props.theme.cardBg},
        ${props => props.theme.cardBg}
      ),
      linear-gradient(
        180deg,
        ${props => props.theme.loadingGradient} 0%,
        ${props => props.theme.cardBg} 50%,
        ${props => props.theme.loadingGradient} 100%
      );
    background-size: 100% 100%, 100% 200%;
    background-position: 0 0, 0 100%;
    animation: gradient 1.5s infinite;

    @keyframes gradient {
      0% {
        background-position: 0 0, 0 0;
      }
      100% {
        background-position: 0 0, 0 -200%;
      }
    }
  }
`;

const gradientShimmer = css`
  height: 16px;
  opacity: 0.5;
  background-image: repeating-linear-gradient(
    -60deg,
    ${props => props.theme.loadingGradient} 0%,
    ${props => props.theme.cardBg} 50%,
    ${props => props.theme.loadingGradient} 100%
  );
  background-size: 200% auto;
  background-position: 0 100%;
  animation: shimmer 1s infinite;
  animation-fill-mode: forwards;
  border-radius: 5px;

  @media screen and (min-width: 960px) {
    height: 14px;
  }

  @keyframes shimmer {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SubjectCodeLoading = styled.div`
  width: 100px;
  margin: 2px auto 8px auto;
  ${gradientShimmer}

  @media screen and (min-width: 960px) {
    margin-left: 0;
    width: 80px;
  }
`;

const SubjectNameLoading = styled.div`
  width: 240px;
  margin: 0 auto;
  ${gradientShimmer}

  @media screen and (min-width: 960px) {
    margin-left: 0;
    width: 50%;
  }
`;

const LoadingDotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 12px;
`;

const LoadingDot = styled.div`
  height: 10px;
  max-width: 10px;
  margin: 0 10px;
  border-radius: 50%;
  background: linear-gradient(
    -60deg,
    ${props => props.theme.loadingGradient} 0%,
    ${props => props.theme.cardBg} 50%,
    ${props => props.theme.loadingGradient} 100%
  );
  background-size: 400% auto;
  background-position: 0 100%;
  animation: dot linear 5s infinite;
  animation-fill-mode: forwards;
  opacity: 0.5;

  @keyframes dot {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 200px;
    }
  }
`;

const SubjectHeader = styled.div`
  padding: 10px 0 12px 0;
  background-color: ${props => props.theme.cardBg};
  border-top: 8px solid ${props => props.color};
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 2px 2px 3px -2px rgba(0, 0, 0, 0.1);
  & div {
    text-align: center;
    flex: 100%;
  }

  @media screen and (min-width: 960px) {
    padding: 12px 12px 13px;
    min-height: 50px;
    border-left: 8px solid ${props => props.color};
    border-top: 0;
    & div {
      text-align: left;
    }
  }
  ${({ loading }) => loading && loadingBorder}
`;

const SubjectCode = styled.div`
  text-align: center;
  position: relative;
  font-weight: bold;
  opacity: 0.75;
  font-size: 13px;

  @media screen and (min-width: 960px) {
    text-align: left;
  }
  $
`;

const SubjectName = styled.div`
  max-width: inherit;
  align-self: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 7px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 960px) {
    max-width: 55%;
    font-size: 14px;
    margin-top: 2px;
    margin-bottom: 5px;
  }
`;

const SubjectToolbox = styled.div`
  position: relative;
  right: 0;
  top: 0;
  color: ${props => props.color};

  @media screen and (min-width: 768px) {
    right: 30px;
    top: 42%;
    position: absolute;
  }

  @media screen and (min-width: 960px) {
    font-weight: bold;
    vertical-align: middle;
    top: 35%;
  }
`;

const ToolboxButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 0 12px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.7;
  ${({ loading }) => loading && hideMe}

  @media screen and (min-width: 768px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 960px) {
    padding: 0 7px;
    font-size: 15px;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.6;
  top: 10px;
  right: 4px;
  position: absolute;

  @media screen and (min-width: 960px) {
    top: 5px;
    right: 4px;
  }
`;

function Subjects() {
  const subjects = useSelector(state => state.subjects);
  const dispatch = useDispatch();
  if (!subjects) {
    return <div>No subjects...</div>;
  }

  const openHandbook = (year, code) => {
    const handbookURL = `https://handbook.unimelb.edu.au/${year}/subjects/${code.toLowerCase()}`;
    window.open(handbookURL, "_blank");
  };
  const openSWS = (year, code) => {
    const swsURL = `https://sws.unimelb.edu.au/${year}/Reports/List.aspx?objects=${code}&weeks=1-52&days=1-7&periods=1-56&template=module_by_group_list`;
    window.open(swsURL, "_blank");
  };
  const deleteSubject = (year, code) => {
    dispatch(removeSubject(code));
  };

  return (
    <SubjectsWrapper>
      {Object.keys(subjects).map(code => {
        const subject = subjects[code];
        const { year, studyPeriod, name, loading, data, color } = subject;
        let bgColor = color;
        let textColor = "white";

        return (
          <SubjectWrapper>
            <SubjectHeader loading={loading} color={bgColor}>
              {!loading ? (
                <SubjectCode>{code}</SubjectCode>
              ) : (
                <SubjectCodeLoading />
              )}
              {!loading ? (
                <SubjectName>{name}</SubjectName>
              ) : (
                <SubjectNameLoading />
              )}
              {loading && (
                <LoadingDotWrapper>
                  <LoadingDot />
                  <LoadingDot />
                  <LoadingDot />
                  <LoadingDot />
                </LoadingDotWrapper>
              )}
              {!loading && (
                <SubjectToolbox iconColor={textColor}>
                  <ToolboxButton
                    title="View Subject Information"
                    onClick={() => dispatch(viewSubject(subject))}
                  >
                    <i className="fa fa-list" />
                  </ToolboxButton>
                  <ColorPickButton
                    onColorChange={color => {
                      dispatch(
                        changeSubjectColor(year, studyPeriod, code, color.hex)
                      );
                    }}
                    buttonStyle={ToolboxButton}
                  />
                  <ToolboxButton
                    title="View Official Timetable"
                    onClick={() => openSWS(year, code)}
                  >
                    <i className="fa fa-calendar-alt" />
                  </ToolboxButton>
                  <ToolboxButton
                    title="View Handbook Entry"
                    onClick={() => openHandbook(year, code)}
                  >
                    <i className="fa fa-book" />
                  </ToolboxButton>
                </SubjectToolbox>
              )}
            </SubjectHeader>
            <DeleteButton onClick={() => deleteSubject(year, code)}>
              ×
            </DeleteButton>
          </SubjectWrapper>
        );
      })}
    </SubjectsWrapper>
  );
}

export default Subjects;
