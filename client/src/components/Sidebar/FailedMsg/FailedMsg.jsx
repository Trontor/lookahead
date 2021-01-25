import {FailedErrorMsg} from './FailedMsgStyles';
import React from 'react';
import {useSelector} from 'react-redux';

export default function FailedMsg() {
  const optimiser = useSelector(state => state.optimiser);
  const {failed} = optimiser;
  return (
    <>
      {failed && (
        <FailedErrorMsg>
          Sorry, something went wrong. Adjust the time restriction and try again. If that doesn't
          work - hold tight. My creators have been notified!
        </FailedErrorMsg>
      )}
    </>
  );
}
