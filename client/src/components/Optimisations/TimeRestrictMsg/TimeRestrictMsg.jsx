import React from "react";
import {TimeRestrictError} from "./TimeRestrictMsgStyles";

export default function TimeRestictMsg() {
  return (
    <TimeRestrictError>
      Sorry, there are no available class times for one or more of your subjects within your selected time restriction. Adjust the time restriction and try again.
    </TimeRestrictError>
  );
}


