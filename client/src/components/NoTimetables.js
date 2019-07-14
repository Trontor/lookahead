import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px auto;

  @media screen and (min-width: 960px) {
    margin: 0 auto;
  }
`;

const Text = styled.span`
  vertical-align: middle;
  font-size: 24px;
  font-family: "Quicksand";
  position: relative;
  bottom: 20%;
`;

export default function NoTimetables() {
  return (
    <Wrapper>
      <Text>
        No Timetables Yet{" "}
        <span role="img" aria-label="Crying Emoji">
          😭😭😭
        </span>
      </Text>
    </Wrapper>
  );
}
