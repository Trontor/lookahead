import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSubjectList} from '../../../redux/actions/subjectListActions';
import {getSubject} from '../../../redux/actions/subjectActions';
import {withTheme} from 'styled-components';
import {SelectContainer} from './SubjectSelectStyles';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import moment from 'moment';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

let LogRocketInitialised = false;

const CURRENT_STUDY_PERIOD_INDEX = new Date().getMonth() <= 5 ? 1 : 3; // Switch to Semester 2 from July onwards
const CURRENT_SUBJECT_LIST_YEAR = 2021;
const studyPeriods = [
  {value: 'summer_term', label: 'Summer'},
  {value: 'semester_1', label: 'Sem 1'},
  {value: 'winter_term', label: 'Winter'},
  {value: 'semester_2', label: 'Sem 2'},
  {value: 'year_long', label: 'Year Long'},
  // { value: "january", label: "January" },
  // { value: "february", label: "February" },
  // { value: "march", label: "March" },
  // { value: "april", label: "April" },
  // { value: "may", label: "May" },
]
  .concat(moment.months().map(month => ({value: month.toLowerCase(), label: month})))
  .map(period => ({
    ...period,
    label: `${period.label} ${CURRENT_SUBJECT_LIST_YEAR}`,
    year: CURRENT_SUBJECT_LIST_YEAR,
  }));

const SubjectSelect = props => {
  // Redux hooks
  const subjectLists = useSelector(state => state.subjectLists, true);
  const dispatch = useDispatch();
  // React hooks
  const [selectedStudyPeriod, setSelectedStudyPeriod] = useState(
    studyPeriods[CURRENT_STUDY_PERIOD_INDEX]
  );
  // Tracks the currently entered text in the subject filter
  const [inputValue, setInputValue] = useState('test');
  // Uncomment below to load subjects at the start
  useEffect(() => {
    let localStorageSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (!localStorageSubjects) return;
    for (const subject of localStorageSubjects) {
      const {year, code, name, studyPeriod} = subject;
      dispatch(getSubject(year, studyPeriod, code, name));
    }
    if (!(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) return;
    localStorage.removeItem('notifications');
  }, [dispatch]);

  useEffect(() => {
    const studyPeriod = selectedStudyPeriod.value;
    const studyPeriodYear = selectedStudyPeriod.year;
    if (!subjectLists.lists[studyPeriod]) {
      setInputValue('');
      dispatch(fetchSubjectList(studyPeriodYear, studyPeriod));
    }
  }, [dispatch, selectedStudyPeriod, subjectLists.lists]);

  const currentList = subjectLists.lists[selectedStudyPeriod.value];

  // Filters input to provide relevant subjects
  const filterSubjects = inputValue => {
    if (!currentList) {
      return [];
    } else if (!inputValue) {
      return currentList;
    }
    const returnList = currentList.filter(i => {
      return (
        i.code.toLowerCase().includes(inputValue.toLowerCase().trim()) ||
        i.value.toLowerCase().includes(inputValue.toLowerCase().trim())
      );
    });
    console.log('Filter:', inputValue, currentList, returnList);
    return returnList;
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
      let suffix = inputValue ? 'Enter more characters...' : 'Enter some characters ⌨';
      return `${prefix}. ${suffix}.`;
    } else if (optionLength.length === 0) {
      return `No matching subjects found for: ${selectedStudyPeriod.label}`;
    } else {
      return null;
    }
  };
  const applySelectTheme = theme => {
    return {
      ...theme,
      borderRadius: '3px',
    };
  };
  const customStyles = {
    input: provided => ({
      ...provided,
      fontSize: '12px',
      color: props.theme.color,
    }),
    placeholder: provided => ({
      ...provided,
      fontSize: '12px',
      color: props.theme.color,
    }),
    menu: base => ({
      ...base,
      zIndex: 100,
      marginTop: '2px',
    }),
    option: (provided, {data, isDisabled, isFocused, isSelected}) => ({
      ...provided,
      backgroundColor: isFocused ? 'lightsteelblue' : null,
      color: isFocused ? '#62656E' : null,
      fontSize: '13px',
      height: '100%',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 3000ms';
      return {
        ...provided,
        color: props.theme.color,
        opacity,
        transition,
        fontSize: '12px',
      };
    },
  };

  const handleSubjectSelect = ({code, value}) => {
    if (!LogRocketInitialised) {
      if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
        LogRocket.init('ae9dbf/lookahead');
        setupLogRocketReact(LogRocket);
        LogRocketInitialised = true;
      }
    }
    dispatch(getSubject(CURRENT_SUBJECT_LIST_YEAR, selectedStudyPeriod.value, code, value));
  };
  return (
    <SelectContainer>
      <Select
        styles={customStyles}
        className="study-period-select"
        value={selectedStudyPeriod}
        onChange={option => setSelectedStudyPeriod(option)}
        options={studyPeriods}
        theme={applySelectTheme}
      />
      <AsyncSelect
        className="subject-select"
        styles={customStyles}
        loadOptions={loadOptions}
        placeholder={subjectLists.loading ? 'Loading...' : 'Search for a subject...'}
        theme={applySelectTheme}
        value={inputValue}
        defaultOptions
        isDisabled={subjectLists.loading}
        onChange={handleSubjectSelect}
        noOptionsMessage={obj => noOptionsMessage(obj.inputValue)}
      />
    </SelectContainer>
  );
};

export default withTheme(SubjectSelect);
