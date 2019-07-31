import React from "react";
import { Text, Wrapper } from "./NoTimetableStyles";

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
