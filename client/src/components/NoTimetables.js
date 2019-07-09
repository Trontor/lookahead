import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.span`
  vertical-align: middle;
  font-size: 24px;
  font-family: Karla;
`;
export default function NoTimetables() {
  return (
    <Wrapper>
      <Text>
        No Timetables Yet{" "}
        <span role="img" aria-label="Crying Emoji">
          😭
        </span>
      </Text>
    </Wrapper>
  );
}
