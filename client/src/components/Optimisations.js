import React, { useState } from "react";
import styled, { css } from "styled-components";
import "./CustomCheckbox.scss";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
const OptimisationsWrapper = styled.div`
  margin: 5px;
  background-color: white;
  font-size: 16px;
  font-family: "Karla";
  text-align: center;
  margin: 0 auto;
  max-width: 500px;
`;

const OptimisationsContainer = styled.div`
  margin: 0 auto;
  display: inline-block;
`;
const Header = styled.h1`
  text-align: center;
  font-size: 24px;
`;
const Optimisation = styled.div`
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin: 5px 0;
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

const TimeOptimisation = styled.div``;

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
  button {
    outline: 0;
    color: #4caf50; /* Green background */
    border: 1px solid green; /* Green border */
    background-color: white; /* White text */
    padding: 5px 10px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    float: left; /* Float the buttons side by side */
    &:not(:last-child) {
      border-right: none; /* Prevent double borders */
    }
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    &:hover {
      background-color: #4caf50;
      color: white;
    }
  }
  /* Clear floats (clearfix hack) */
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

function Optimisations() {
  const [longestRunToggled, setLongestRunToggled] = useState(false);
  const [longestRun, setLongestRun] = useState(24);
  return (
    <OptimisationsWrapper>
      <Header>Optimisations</Header>
      {/* <Break /> */}
      <OptimisationsContainer>
        <Optimisation center>
          Earliest Start
          <TimeOptimisation>
            <TimePicker
              allowEmpty={false}
              defaultValue={new moment("8:00", "HH:mm")}
              showSecond={false}
              use12Hours={true}
              focusOnOpen={true}
              minuteStep={30}
            />
          </TimeOptimisation>
        </Optimisation>
        <Optimisation center>
          Latest Finish
          <TimeOptimisation>
            <TimePicker
              allowEmpty={false}
              defaultValue={new moment("8:00", "HH:mm")}
              showSecond={false}
              use12Hours={true}
              focusOnOpen={true}
              minuteStep={30}
            />
          </TimeOptimisation>
        </Optimisation>

        <Optimisation center>
          Try to avoid classes on these days
          <br />
          <ButtonGroup>
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
              <button>{day}</button>
            ))}
          </ButtonGroup>
        </Optimisation>

        <Optimisation>
          <input
            class="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-1">I skip most of my lectures</label>
        </Optimisation>
        <Optimisation>
          <input
            class="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-1">I want to minimise clashes</label>
        </Optimisation>
        <Optimisation>
          <input
            class="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-1">I like to cram classes together</label>
        </Optimisation>
        <Optimisation>
          <input
            class="styled-checkbox"
            id="longest-run-toggle"
            type="checkbox"
            defaultChecked={longestRunToggled}
            checked={longestRunToggled}
            onChange={({ target: { checked } }) => {
              setLongestRunToggled(checked);
              setLongestRun(checked ? 3 : 24);
            }}
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
              onChange={e => {
                e.target.value = e.target.value.replace(/[^0-9]/gi, "");
                let intVal = Number.parseInt(e.target.value);
                if (!intVal) {
                  setLongestRun(null);
                  return;
                }
                if (intVal < 1) {
                  intVal = 1;
                } else if (intVal > 12) {
                  intVal = 24;
                }
                e.target.value = intVal;
                setLongestRun(intVal);
              }}
              value={longestRun}
              defaultValue={longestRun}
            />{" "}
            {longestRun ? `hour${longestRun !== 1 ? "s" : ""}` : ""}
          </Optimisation>
        )}
      </OptimisationsContainer>
    </OptimisationsWrapper>
  );
}

export default Optimisations;
