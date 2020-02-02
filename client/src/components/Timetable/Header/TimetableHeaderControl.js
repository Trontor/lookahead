import React from "react";
import { useDispatch } from "react-redux";
import {
  HeaderWrapper,
  NavigationButton,
  TimetableCount,
  NavigationButtonWrapper
} from "./TimetableHeaderControlStyles";
import {
  nextTimetable,
  previousTimetable,
  lastTimetable,
  firstTimetable
} from "../../../redux/actions/optimiserActions";
import ArrowKeysReact from "arrow-keys-react";

export default function TimetableHeaderControl(props) {
  const { current, header } = props;
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
      <NavigationButtonWrapper left>
        <NavigationButton
          disabled={current === 1}
          onClick={() => dispatch(firstTimetable())}
          left
          style={{ width: "10px", marginRight: "5px" }}
        >
          <i class="fas fa-angle-double-left"></i>
        </NavigationButton>
        <NavigationButton
          disabled={current === 1}
          onClick={() => dispatch(previousTimetable())}
          left
        >
          <i className="fa fa-arrow-left" />
        </NavigationButton>
      </NavigationButtonWrapper>
      <TimetableCount>{header}</TimetableCount>
      <NavigationButtonWrapper right>
        <NavigationButton onClick={() => dispatch(nextTimetable())} right>
          <i className="fa fa-arrow-right" />
        </NavigationButton>
        <NavigationButton
          disabled={current === 1}
          onClick={() => dispatch(lastTimetable())}
          left
          style={{ width: "25px", marginLeft: "5px" }}
        >
          <i class="fas fa-angle-double-right"></i>
        </NavigationButton>
      </NavigationButtonWrapper>
    </HeaderWrapper>
  );
}
