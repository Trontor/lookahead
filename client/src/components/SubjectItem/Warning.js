import React from "react";
import styled, { css } from "styled-components";

const WarningMsg = styled.div``;

export default function Warning() {
  return(
    <WarningMsg>You have entered subjects from two or more different study periods,
    you probably don't want that...</WarningMsg>
  )

};