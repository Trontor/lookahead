import React from 'react';
import {WarningMsg, WarningTitle, WarningWrapper} from './WarningStyles';

export default function Warning() {
  return (
    <WarningWrapper>
      <WarningTitle>
        <i className="fas fa-exclamation-circle" /> Hey!
      </WarningTitle>
      <WarningMsg>
        You have entered subjects from two or more study periods. You may or may not want that.
      </WarningMsg>
    </WarningWrapper>
  );
}
