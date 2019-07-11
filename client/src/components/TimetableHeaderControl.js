import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  nextTimetable,
  previousTimetable
} from "../redux/actions/optimiserActions";
import ArrowKeysReact from "arrow-keys-react";

const HeaderWrapper = styled.div`
  font-family: Montserrat, sans-serif;
  text-align: center;
  position: relative;
  margin: 10px 0;
  :focus {
    outline: none;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  cursor: pointer;
  max-width: 75px;
  border: 1px solid rgb(0, 123, 255);
  border-radius: 2px;
  color: rgb(0, 123, 255);
  background-color: white;
  padding: 5px;
  width: 100%;
  left: ${({ left }) => (left ? 0 : "auto")};
  right: ${({ right }) => (right ? 0 : "auto")};
  :disabled {
    display: none;
  }
  :hover {
    background-color: rgb(0, 123, 255);
    color: white;
  }
`;
export default function TimetableHeaderControl(props) {
  const { current, total } = props;
  const dispatch = useDispatch();
  let currentTimeout = null;
  ArrowKeysReact.config({
    left: () => {
      clearTimeout(currentTimeout);
      currentTimeout = setTimeout(() => dispatch(previousTimetable()));
    },
    right: () => {
      clearTimeout(currentTimeout);
      currentTimeout = setTimeout(() => dispatch(nextTimetable()));
    }
  });

  return (
    <HeaderWrapper tabIndex="1" {...ArrowKeysReact.events}>
      <NavigationButton
        disabled={current === 1}
        onClick={() => dispatch(previousTimetable())}
        left
      >
        <i className="fa fa-arrow-left" />
      </NavigationButton>
      {current} / {total}
      <NavigationButton onClick={() => dispatch(nextTimetable())} right>
        <i className="fa fa-arrow-right" />
      </NavigationButton>
    </HeaderWrapper>
  );
}
