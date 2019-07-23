import React from "react";
import styled, { css } from "styled-components";

const WarningWrapper = styled.div`
  padding: 10px;
  color: white;
  background-color: #D9286C;
  border-radius: 3px;
  border: 1px solid #EC5690;
  margin-top: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  opacity: 0.85;
`;

const WarningTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 6px;
`;

const WarningMsg = styled.div`
  padding-bottom: 5px;
`;

export default function Warning() {
  return(
    <WarningWrapper>
      <WarningTitle>
      <i class="fas fa-exclamation-circle"></i> Hey!
      </WarningTitle>
      <WarningMsg>You have entered subjects from two or more study periods.
      You may or may not want that.</WarningMsg>
    </WarningWrapper>
  )

};