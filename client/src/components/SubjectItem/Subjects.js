import React from "react";
import {
  removeSubject,
  changeSubjectColor
} from "../../redux/actions/subjectActions";
import { useSelector, useDispatch } from "react-redux";
import ColorPickButton from "./ColorPickButton";
import { viewSubject } from "../../redux/actions/viewSubjectActions";
import Warning from "./Warning";
import {
  DeleteButton,
  ErrorMsg,
  LoadingDots,
  SubjectCard,
  SubjectCode,
  SubjectCodeLoading,
  SubjectName,
  SubjectNameLoading,
  SubjectToolbox,
  SubjectWrapper,
  SubjectsWrapper,
  ToolboxButton
} from "./SubjectItemStyles";
const studyPeriods = {
  summer_term: "Summer",
  semester_1: "Sem 1",
  winter_term: "Winter",
  semester_2: "Sem 2"
};

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
  const periods = Object.keys(subjects).reduce(
    (prev, key) =>
      !subjects[key].loading && subjects[key].data
        ? [...prev, subjects[key].data.period]
        : prev,
    []
  );
  const uniquePeriods = Array.from(new Set(periods));
  const crossStudyPeriod = uniquePeriods.length > 1;
  return (
    <SubjectsWrapper>
      {crossStudyPeriod && <Warning />}

      {Object.keys(subjects).map(code => {
        const subject = subjects[code];
        const {
          year,
          studyPeriod,
          name,
          loading,
          data,
          color,
          error
        } = subject;
        const { period = "", _weirdStreamContainers = [] } = data || {};
        let bgColor = color;
        let textColor = "white";

        const isWeird = _weirdStreamContainers.length > 0;
        return (
          <SubjectWrapper key={code}>
            <SubjectCard error={error} $loading={loading} color={bgColor}>
              {!loading ? (
                <SubjectCode>
                  {code}
                  <span>•</span>
                  {error ? (
                    <span>
                      <i className="fas fa-exclamation-triangle" />
                    </span>
                  ) : (
                    <span>{studyPeriods[period]}</span>
                  )}
                  {isWeird && (
                    <>
                      <span>•</span>
                      <span
                        onClick={() =>
                          alert(
                            "This subject is weird because some streams have an unbalanced number of classes in them."
                          )
                        }
                      >
                        WEIRD
                      </span>
                    </>
                  )}
                </SubjectCode>
              ) : (
                <SubjectCodeLoading />
              )}
              {!loading ? (
                <SubjectName>{name}</SubjectName>
              ) : (
                <SubjectNameLoading />
              )}
              {loading ? (
                <LoadingDots>
                  <span />
                  <span />
                  <span />
                  <span />
                </LoadingDots>
              ) : (
                <>
                  {error && (
                    <ErrorMsg>
                      Oops! We had trouble loading your subject.
                    </ErrorMsg>
                  )}
                  <SubjectToolbox iconColor={textColor}>
                    {!error && (
                      <ToolboxButton
                        title="View Subject Information"
                        onClick={() => dispatch(viewSubject(subject))}
                      >
                        <i className="fa fa-list" />
                      </ToolboxButton>
                    )}
                    {!error && (
                      <ColorPickButton
                        onColorChange={color => {
                          dispatch(
                            changeSubjectColor(
                              year,
                              studyPeriod,
                              code,
                              color.hex
                            )
                          );
                        }}
                        buttonStyle={ToolboxButton}
                      />
                    )}
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
                </>
              )}
            </SubjectCard>
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
