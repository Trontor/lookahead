import React from "react";
import { removeSubject } from "../redux/actions/subjectActions";
import { useSelector, useDispatch } from "react-redux";
import ClassInfo from "./ClassInfo";
import styled, { css } from "styled-components";

const SubjectsWrapper = styled.div`
  margin: 5px;
`;
const SubjectWrapper = styled.div`
  color: ${props => props.textColor};
  position: relative;
  font-family: "Karla", sans-serif;
`;

const loadingCSS = css`
  border-width: 2px;
  border-radius: 0px;
  background: white;
  position: relative;
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    height: calc(100% + 2px * 2);
    width: calc(100% + 2px * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * var(2px));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;
const SubjectHeader = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row; */
  padding: 12px 12px 8px 12px;
  min-height: 50px;
  border-radius: 1px;
  margin: 5px 0;
  background-color: ${props => props.color};
  @media screen and (max-width: 600px) {
    padding-top: 10px;
    & div {
      text-align: center;
      flex: 100%;
    }
  }
  ${({ loading }) => loading && loadingCSS}
`;

const SubjectCode = styled.div`
  /* align-self: center; */
  /* bottom: 10px; */
  font-weight: bold;
  color: inherit;
  opacity: 0.75;
  font-size: 12px;
  @media screen and (max-width: 600px) {
    /* margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 2px; */
    text-align: center;
    position: relative;
  }
`;
const WidthRestriction = styled.div`
  max-width: 500px;
`;

const SubjectName = styled.div`
  font-weight: bold;
  max-width: 18.5vw;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 5px;
  @media screen and (max-width: 960px) {
    max-width: inherit;
    align-self: center;
    margin-bottom: 0;
  }
`;

const SubjectToolbox = styled.div`
  font-weight: bold;
  vertical-align: middle;
  color: ${({ iconColor }) => iconColor};
  right: 30px;
  top: 19px;
  position: absolute;
  @media screen and (max-width: 600px) {
    position: relative;
    right: 0;
    top: 0;
  }
`;

const ToolboxButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  margin: 3px 4px 0 4px;
  color: inherit;
  background-color: transparent;
  border: none;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  padding: 2px;
  top: 5px;
  right: 10px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.75;
  @media screen and (max-width: 600px) {
    top: 7px;
    right: 10px;
  }
`;

const SubjectLoader = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${props => props.color};
  text-align: center;
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
        const { year, name, loading, data, color } = subjects[code];
        let bgColor = color;
        let textColor = "white";
        if (loading) {
          bgColor = "transparent";
          textColor = "black";
        }
        return (
          <SubjectWrapper textColor={textColor}>
            {/* <SubjectLoader color={color} /> */}

            <SubjectHeader loading={loading} color={bgColor}>
              <SubjectCode>{code}</SubjectCode>
              <SubjectName>{name}</SubjectName>
              <SubjectToolbox iconColor={textColor}>
                <ToolboxButton onClick={() => openSWS(year, code)}>
                  <i className="fa fa-calendar-alt" />
                </ToolboxButton>
                <ToolboxButton onClick={() => openHandbook(year, code)}>
                  <i className="fa fa-book" />
                </ToolboxButton>
                {/* <ToolboxButton onClick={() => deleteSubject(year, code)}>
                <i className="fa fa-times" />
                </ToolboxButton> */}
              </SubjectToolbox>
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
