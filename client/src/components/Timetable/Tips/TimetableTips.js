import React from 'react';
import {Tip, TipHeader, TipWrapper} from './TimetableTipStyles';

const TimetableTips = React.forwardRef((_, ref) => {
  return (
    <TipWrapper ref={ref}>
      <TipHeader>
        Tips{'  '}
        <i className="fa fa-lightbulb" aria-hidden="true" />
      </TipHeader>
      <Tip desktop>Click and drag somewhere on the timetable to create a reserved event.</Tip>
      <Tip mobile>Tap on a reserved event to delete it.</Tip>
      <Tip desktop>Click on a reserved event to delete it.</Tip>
      <Tip mobile>Tap, hold then drag somewhere on the timetable to create a reserved. event.</Tip>
      <Tip desktop>Use your arrow keys ← → to quickly navigate between the timetables.</Tip>
      <Tip desktop>
        Click and drag classes around to customise your timetable (Mandatory{' '}
        <i className="fa fa-lock" /> classes can't be changed).
      </Tip>
      <Tip mobile>Tap, hold then drag classes around to customise your timetable.</Tip>
    </TipWrapper>
  );
});

export default TimetableTips;
