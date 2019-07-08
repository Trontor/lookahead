import React from "react";
import { removeSubject } from "../redux/actions/subjectActions";
import { useSelector, useDispatch } from "react-redux";
import ClassInfo from "./ClassInfo";
import styled from "styled-components";

const SubjectsWrapper = styled.div`
  margin: 5px;
`;
const SubjectWrapper = styled.div`
  color: white;
  font-family: "Montserrat", sans-serif;
`;

const SubjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 3px 15px;
  min-height: 50px;
  border-radius: 5px;
  margin: 5px 0;
  background-color: ${props => props.color};
  @media screen and (max-width: 600px) {
    padding-top: 10px;
    & div {
      text-align: center;
      flex: 100%;
    }
  }
`;

const SubjectCode = styled.div`
  align-self: center;
`;
const WidthRestriction = styled.div`
  max-width: 500px;
`;

const SubjectName = styled.div`
  font-weight: bold;
  align-self: center;
`;

const SubjectToolbox = styled.div`
  font-weight: bold;
  align-self: center;
`;

const ToolboxButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: white;
  padding: 5px;
  margin: 0 5px;
  background-color: transparent;
  border: none;
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
        return (
          <SubjectWrapper>
            <SubjectHeader color={color}>
              <SubjectCode>{code}</SubjectCode>
              <SubjectName>{name}</SubjectName>
              <SubjectToolbox>
                <ToolboxButton onClick={() => openSWS(year, code)}>
                  <i className="fa fa-calendar-alt" />
                </ToolboxButton>
                <ToolboxButton onClick={() => openHandbook(year, code)}>
                  <i className="fa fa-book" />
                </ToolboxButton>
                <ToolboxButton onClick={() => deleteSubject(year, code)}>
                  <i className="fa fa-times" />
                </ToolboxButton>
              </SubjectToolbox>
            </SubjectHeader>
          </SubjectWrapper>
        );
      })}
    </SubjectsWrapper>
  );
}

export default Subjects;
