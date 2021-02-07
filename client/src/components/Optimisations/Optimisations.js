import './CustomCheckbox.scss';
import 'rc-time-picker/assets/index.css';
import './InputRange.css';

import {
  ButtonGroup,
  Header,
  HourInputWrapper,
  Input,
  Optimisation,
  OptimisationsContainer,
  OptimisationsWrapper,
  Subheader,
  TimeOptimisation,
} from './OptimisationsStyles';
import React, {useState} from 'react';
import {
  addAvoidDay,
  removeAvoidDay,
  setBreak,
  setCramClasses,
  setKeepClassesStreamed,
  setMinimiseClashes,
  setSkipLectures,
  setTimeRange,
  setIgnoreWeirdStreams,
  setDeliveryPreference,
} from '../../redux/actions/optimisationsActions';
import {useDispatch, useSelector} from 'react-redux';

import DayAvoidButton from './DayAvoidButton/DayAvoidButton';
import InputRange from 'react-input-range';
import DeliveryModeButton from './DeliveryModeButton/DeliveryModeButton';

const formatRangeLabel = value => {
  const remainder = value % 1;
  const postColon = remainder === 0.5 ? '30' : '00';
  const meridian = value >= 12 ? 'pm' : 'am';
  if (value >= 13) {
    value -= 12;
  }
  return `${Math.floor(value)}:${postColon}${meridian}`;
};

function Optimisations() {
  const dispatch = useDispatch();
  const optimisations = useSelector(state => state.optimisations);
  const subjects = useSelector(state => state.subjects);
  console.log(Object.entries(subjects));
  const isWeird = Object.entries(subjects).some(
    ([_, {data}]) => data && data._weirdStreamContainers.length > 0
  );
  const [longestRunToggled, setLongestRunToggled] = useState(false);
  const {
    range,
    /*avoidDays,*/
    skipLectures,
    cramClasses,
    breakHours,
    minimiseClashes,
    keepClassesStreamed,
    ignoreWeirdStreams,
    deliveryPreference,
  } = optimisations;

  const changeRange = ({min, max}) => {
    if (max - min >= 2.5) dispatch(setTimeRange(min, max));
  };

  const setLongestRun = val => {
    dispatch(setBreak(val));
  };
  const longestRunToggleChanged = ({target: {checked}}) => {
    setLongestRunToggled(checked);
    setLongestRun(checked ? 3 : 24);
  };
  const longestRunChanged = e => {
    e.target.value = e.target.value.replace(/[^0-9]/gi, '');
    let intVal = Number.parseInt(e.target.value);
    if (!intVal) {
      setLongestRun('');
      return;
    }
    if (intVal < 1) {
      intVal = 1;
    } else if (intVal > 12) {
      intVal = 24;
    }
    e.target.value = intVal;
    setLongestRun(intVal);
  };
  const deliveryModes = [
    {key: 'any', displayText: 'Any'},
    {key: 'inPerson', displayText: 'In-Person'},
    {key: 'online', displayText: 'Online'},
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  return (
    <OptimisationsWrapper>
      <Header>Optimisations</Header>
      {/* <Break /> */}
      <OptimisationsContainer>
        <Optimisation center>
          <Subheader>If possible, prefer classes that are:</Subheader>
          <ButtonGroup>
            {deliveryModes.map(({key, displayText}, idx) => (
              <DeliveryModeButton
                key={key}
                activated={key == deliveryPreference}
                onClick={() => dispatch(setDeliveryPreference(key))}
              >
                {displayText}
              </DeliveryModeButton>
            ))}
          </ButtonGroup>
        </Optimisation>
        <Optimisation center style={{marginBottom: '50px'}}>
          <Subheader>Time Restriction</Subheader>
          <TimeOptimisation>
            <InputRange
              formatLabel={formatRangeLabel}
              maxValue={22}
              minValue={8}
              step={0.5}
              value={range}
              onChange={changeRange}
            />
          </TimeOptimisation>
        </Optimisation>

        <Optimisation center>
          <Subheader>If possible, avoid classes on these days:</Subheader>
          <ButtonGroup>
            {days.map((day, idx) => (
              <DayAvoidButton
                key={day}
                onToggled={val =>
                  val ? dispatch(addAvoidDay(idx)) : dispatch(removeAvoidDay(idx))
                }
              >
                {day}
              </DayAvoidButton>
            ))}
          </ButtonGroup>
        </Optimisation>

        <Optimisation>
          <input
            className="styled-checkbox"
            id="minimise-clashes"
            type="checkbox"
            checked={minimiseClashes}
            onChange={({target: {checked}}) => dispatch(setMinimiseClashes(checked))}
          />
          <label htmlFor="minimise-clashes">Minimise clashes</label>
        </Optimisation>
        <Optimisation>
          <input
            className="styled-checkbox"
            id="skip-lectures"
            type="checkbox"
            checked={skipLectures}
            onChange={({target: {checked}}) => dispatch(setSkipLectures(checked))}
          />
          <label htmlFor="skip-lectures">I skip most of my lectures</label>
        </Optimisation>
        <Optimisation>
          <input
            className="styled-checkbox"
            id="cram-classes"
            type="checkbox"
            checked={cramClasses}
            onChange={({target: {checked}}) => dispatch(setCramClasses(checked))}
          />
          <label htmlFor="cram-classes">Cram classes together</label>
        </Optimisation>
        <Optimisation>
          <input
            className="styled-checkbox"
            id="longest-run-toggle"
            type="checkbox"
            checked={longestRunToggled}
            onChange={longestRunToggleChanged}
          />
          <label htmlFor="longest-run-toggle">Allocate a break after consecutive classes</label>
        </Optimisation>
        {longestRunToggled && (
          <Optimisation child>
            Longest time without a break:
            <HourInputWrapper>
              <Input type="text" onChange={longestRunChanged} value={breakHours} />
              {breakHours ? `hour${breakHours !== 1 ? 's' : ''}` : ''}
            </HourInputWrapper>
          </Optimisation>
        )}
        <Optimisation>
          <input
            className="styled-checkbox"
            id="keep-classes-streamed-toggle"
            type="checkbox"
            checked={keepClassesStreamed}
            onChange={({target: {checked}}) => dispatch(setKeepClassesStreamed(checked))}
          />
          <label htmlFor="keep-classes-streamed-toggle">Keep classes streamed</label>
        </Optimisation>
        {keepClassesStreamed && isWeird && (
          <Optimisation sub>
            <input
              className="styled-checkbox"
              id="ignore-weird-streams-toggle"
              type="checkbox"
              checked={ignoreWeirdStreams}
              onChange={({target: {checked}}) => dispatch(setIgnoreWeirdStreams(checked))}
            />
            <label htmlFor="ignore-weird-streams-toggle">Ignore weird streams</label>
          </Optimisation>
        )}
      </OptimisationsContainer>
    </OptimisationsWrapper>
  );
}

export default Optimisations;
