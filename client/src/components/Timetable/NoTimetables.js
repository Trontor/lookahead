import React from "react";
import styled from "styled-components";

export default function NoTimetables(props) {
  const { hasSubjects } = props;

  return (
    <Wrapper>
      <Text>
        No Timetables Yet{" "}
        <span role="img" aria-label="Crying Emoji">
          😭
        </span>
      </Text>
      <Text>
        {!hasSubjects
          ? "Select one or more subjects from the menu"
          : "Select your optimisations then click 'Optimise'"}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px auto;

  @media screen and (min-width: 960px) {
    margin: 0 auto;
  }
`;

const Text = styled.span`
  vertical-align: middle;
  font-size: 24px;
  font-family: "Quicksand";
  position: relative;
  bottom: 10%;
  margin-top: 5px;
  &:nth-child(n + 2) {
    font-size: 13px;
    font-family: "Karla", sans-serif;
  }
`;
