import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubjectList } from "../../redux/actions/subjectListActions";

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
  const lists = useSelector(state => state.subjectLists, true);
  const dispatch = useDispatch();
  // React hooks
  const [selectedOption, setSelectedOption] = useState(
    studyPeriods[CURRENT_STUDY_PERIOD_INDEX]
  );

  useEffect(() => {
    dispatch(fetchSubjectList(CURRENT_SUBJECT_LIST_YEAR, selectedOption.value));
  }, [dispatch, selectedOption]);

  console.log(lists);
  return (
    <div>
      {lists && lists.map(list => <div>{list.studyPeriod}</div>)}
      <Select
        value={selectedOption}
        onChange={option => setSelectedOption(option)}
        options={studyPeriods}
      />
    </div>
  );
};

SubjectSelect.propTypes = {};

export default SubjectSelect;
