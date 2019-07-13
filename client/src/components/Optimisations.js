import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import "./CustomCheckbox.scss";
import "rc-time-picker/assets/index.css";
import InputRange from "react-input-range";
import "./InputRange.css";
import DayAvoidButton from "./DayAvoidButton";
import {
  setTimeRange,
  setBreak,
  setSkipLectures,
  setMinimiseClashes,
  setCramClasses,
  addAvoidDay,
  removeAvoidDay
} from "../redux/actions/optimisationsActions";

const OptimisationsWrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.text};
  margin: 0 auto;
  padding: 5px;
  /* max-width: 500px; */
`;

const OptimisationsContainer = styled.div`
  margin: 0 auto;
  display: inline-block;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 20px;
  font-family: "Quicksand";
  line-height: 0.8em;
`;

const Optimisation = styled.div`
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin: 12px 0;

  .rc-time-picker-input {
    width: 75px;
  }

  ${({ child }) =>
    child &&
    css`
      font-size: 14px;
      input {
        font-size: 12px;
      }
      margin-left: 30px;
    `};
`;

const TimeOptimisation = styled.div`
  margin: 30px 40px 40px 40px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  border: 1px solid blueviolet;
  width: 20px;
  text-align: center;
  border-radius: 3px;
`;

const ButtonGroup = styled.div`
  margin: 5px;
  display: inline-block;

  /* Clear floats (clearfix hack) */
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const formatRangeLabel = value => {
  const remainder = value % 1;
  const postColon = remainder === 0.5 ? "30" : "00";
  const meridian = value > 12 ? "pm" : "am";
  if (value >= 13) {
    value -= 12;
  }
  return `${Math.floor(value)}:${postColon}${meridian}`;
};

function Optimisations() {
  // const [longestRunToggled, setLongestRunToggled] = useState(false);
  // const [longestRun, setLongestRun] = useState(24);
  // const [range, setRange] = useState({ min: 8, max: 22 });
  const dispatch = useDispatch();
  const optimisations = useSelector(state => state.optimisations);
  // console.log(optimisations);

  const [longestRunToggled, setLongestRunToggled] = useState(false);
  const {
    range,
    avoidDays,
    skipLectures,
    cramClasses,
    breakHours,
    minimiseClashes
  } = optimisations;
  console.log(optimisations);

  const changeRange = ({ min, max }) => {
    if (max - min >= 2.5) dispatch(setTimeRange(min, max));
  };

  const setLongestRun = val => {
    dispatch(setBreak(val));
  };
  const longestRunToggleChanged = ({ target: { checked } }) => {
    setLongestRunToggled(checked);
    setLongestRun(checked ? 3 : 24);
  };
  const longestRunChanged = e => {
    e.target.value = e.target.value.replace(/[^0-9]/gi, "");
    let intVal = Number.parseInt(e.target.value);
    if (!intVal) {
      setLongestRun("");
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

  console.log(avoidDays);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <OptimisationsWrapper>
      <Header>Optimisations</Header>
      {/* <Break /> */}
      <OptimisationsContainer>
        <Optimisation center style={{ marginBottom: "30px" }}>
          Time Restriction:
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
          Try to avoid classes on these days:
          <br />
          <ButtonGroup>
            {days.map((day, idx) => (
              <DayAvoidButton
                onToggled={val =>
                  val
                    ? dispatch(addAvoidDay(idx))
                    : dispatch(removeAvoidDay(idx))
                }
              >
                {day}
              </DayAvoidButton>
            ))}
          </ButtonGroup>
        </Optimisation>

        <Optimisation>
          <input
            class="styled-checkbox"
            id="minimise-clashes"
            type="checkbox"
            checked={minimiseClashes}
            onChange={({ target: { checked } }) =>
              dispatch(setMinimiseClashes(checked))
            }
          />
          <label for="minimise-clashes">I want to minimise clashes</label>
        </Optimisation>
        <Optimisation>
          <input
            class="styled-checkbox"
            id="skip-lectures"
            type="checkbox"
            checked={skipLectures}
            onChange={({ target: { checked } }) =>
              dispatch(setSkipLectures(checked))
            }
          />
          <label for="skip-lectures">I skip most of my lectures</label>
        </Optimisation>
        <Optimisation>
          <input
            class="styled-checkbox"
            id="cram-classes"
            type="checkbox"
            checked={cramClasses}
            onChange={({ target: { checked } }) =>
              dispatch(setCramClasses(checked))
            }
          />
          <label for="cram-classes">I like to cram classes together</label>
        </Optimisation>
        <Optimisation>
          <input
            class="styled-checkbox"
            id="longest-run-toggle"
            type="checkbox"
            checked={longestRunToggled}
            onChange={longestRunToggleChanged}
          />
          <label for="longest-run-toggle">
            I need a break after consecutive classes
          </label>
        </Optimisation>
        {longestRunToggled && (
          <Optimisation child>
            Longest time without a break:
            <Input
              type="text"
              onChange={longestRunChanged}
              value={breakHours}
            />{" "}
            {breakHours ? `hour${breakHours !== 1 ? "s" : ""}` : ""}
          </Optimisation>
        )}
      </OptimisationsContainer>
    </OptimisationsWrapper>
  );
}

export default Optimisations;
