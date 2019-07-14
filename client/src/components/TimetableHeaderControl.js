import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  nextTimetable,
  previousTimetable
} from "../redux/actions/optimiserActions";
import ArrowKeysReact from "arrow-keys-react";

const HeaderWrapper = styled.div`
  text-align: center;
  position: relative;
  height: 30px;
  line-height: 30px;
  margin: 7px 10px;

  :focus {
    outline: none;
  }

  @media screen and (min-width: 960px){
    margin: 0 0 10px 0;
  }
`;

const TimetableCount = styled.span`
  font-weight: bold;
`;

const NavigationButton = styled.button`
  position: absolute;
  cursor: pointer;
  max-width: 75px;
  border-radius: 3px;
  color: #f9f9f9;
  background-color: ${props => props.theme.secondary};
  border-color: ${props => props.theme.secondary};
  padding: 6px 5px;
  width: 100%;
  left: ${({ left }) => (left ? 0 : "auto")};
  right: ${({ right }) => (right ? 0 : "auto")};

  :disabled {
    display: none;
  }

  :hover {
    background-color: ${props => props.theme.secondaryDark};
    border-color: ${props => props.theme.secondaryDark};
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
      <TimetableCount>
        {current} of {total}
      </TimetableCount>
      <NavigationButton onClick={() => dispatch(nextTimetable())} right>
        <i className="fa fa-arrow-right" />
      </NavigationButton>
    </HeaderWrapper>
  );
}
