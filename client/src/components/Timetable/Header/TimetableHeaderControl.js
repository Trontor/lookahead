import React from 'react';
import {useDispatch} from 'react-redux';
import {HeaderWrapper, NavigationButton, TimetableCount} from './TimetableHeaderControlStyles';
import {nextTimetable, previousTimetable} from '../../../redux/actions/optimiserActions';
import ArrowKeysReact from 'arrow-keys-react';

export default function TimetableHeaderControl(props) {
  const {current, header} = props;
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
    },
  });

  return (
    <HeaderWrapper tabIndex="1" {...ArrowKeysReact.events}>
      <NavigationButton disabled={current === 1} onClick={() => dispatch(previousTimetable())} left>
        <i className="fa fa-arrow-left" />
      </NavigationButton>
      <TimetableCount>{header}</TimetableCount>
      <NavigationButton onClick={() => dispatch(nextTimetable())} right>
        <i className="fa fa-arrow-right" />
      </NavigationButton>
    </HeaderWrapper>
  );
}
