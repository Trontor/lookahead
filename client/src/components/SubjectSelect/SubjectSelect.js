import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubjectList } from "../../redux/actions/subjectListActions";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import styled from "styled-components";

const CURRENT_STUDY_PERIOD_INDEX = 3;
const CURRENT_SUBJECT_LIST_YEAR = 2019;
const studyPeriods = [
  { value: "summer_term", label: "Summer" },
  { value: "semester_1", label: "Semester 1" },
  { value: "winter_term", label: "Winter" },
  { value: "semester_2", label: "Semester 2" }
];

const SubjectSelect = props => {
  // Redux hooks
  const subjectLists = useSelector(state => state.subjectLists, true);
  const dispatch = useDispatch();
  // React hooks
  const [selectedOption, setSelectedOption] = useState(
    studyPeriods[CURRENT_STUDY_PERIOD_INDEX]
  );
  // Tracks the currently selected subject
  const [selectedSubject, setSelectedSubject] = useState(null);
  // Tracks the currently entered text in the subject filter
  const [inputValue, setInputValue] = useState("test");

  useEffect(() => {
    const selectedStudyPeriod = selectedOption.value;
    if (!subjectLists.lists[selectedStudyPeriod]) {
      setInputValue("");
      dispatch(
        fetchSubjectList(CURRENT_SUBJECT_LIST_YEAR, selectedOption.value)
      );
    }
  }, [dispatch, selectedOption, subjectLists.lists]);

  const currentList = subjectLists.lists[selectedOption.value];

  // Filters input to provide relevant subjects
  const filterSubjects = inputValue => {
    if (!currentList) {
      return [];
    } else if (!inputValue) {
      return currentList;
    }
    return currentList.filter(i => {
      return i.label.toLowerCase().includes(inputValue.toLowerCase());
    });
  };

  const loadOptions = (inputValue, callback) => {
    // Filter the subject list based on the input value
    const filtered = filterSubjects(inputValue);
    if (filtered && filtered.length > 300) {
      callback(null);
      return;
    }
    callback(filterSubjects(inputValue));
  };
  // Determines what message to display if there are no options provided
  const noOptionsMessage = inputValue => {
    const optionLength = filterSubjects(inputValue);
    // Filter returned 'undefined', so we need more text!
    if (optionLength.length) {
      let prefix = `${optionLength.length} possibilities`;
      let suffix = inputValue
        ? "Enter more characters..."
        : "Enter some characters ⌨";
      return `${prefix}. ${suffix}.`;
    } else if (optionLength.length === 0) {
      return `No matching subjects found for: ${selectedOption.label}`;
    } else {
      return null;
    }
  };
  const applySelectTheme = theme => {
    return {
      ...theme,
      borderRadius: 0
    };
  };
  const customStyles = {
    menu: base => ({
      ...base,
      zIndex: 100
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "12px",
      textAlign: "center",
      height: "100%"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 3000ms";
      return {
        ...provided,
        opacity,
        transition,
        fontSize: "12px"
      };
    }
  };
  const SelectContainer = styled.div`
    display: flex;
    & > div {
      display: inline-block;
    }
    .study-period-select {
      width: 135px;
    }
    .subject-select {
      width: 100%;
    }
  `;
  return (
    <SelectContainer>
      <Select
        styles={customStyles}
        className="study-period-select"
        value={selectedOption}
        onChange={option => setSelectedOption(option)}
        options={studyPeriods}
        theme={applySelectTheme}
      />
      <AsyncSelect
        className="subject-select"
        styles={customStyles}
        cacheOptions
        loadOptions={loadOptions}
        placeholder="Search for a subject..."
        theme={applySelectTheme}
        value={inputValue}
        defaultOptions
        isDisabled={subjectLists.loading}
        noOptionsMessage={obj => noOptionsMessage(obj.inputValue)}
      />
    </SelectContainer>
  );
};

SubjectSelect.propTypes = {};

export default SubjectSelect;
