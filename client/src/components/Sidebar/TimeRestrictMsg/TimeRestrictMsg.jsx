import React from "react";
import {TimeRestrictErrorMsg} from "./TimeRestrictMsgStyles";
import { useSelector } from "react-redux";

export default function TimeRestictMsg() {
  const optimiser = useSelector(state => state.optimiser);
  const { failed } = optimiser;
  return (
    <TimeRestrictErrorMsg>
      {failed &&
        "Sorry, there are no available class times for one or more of your subjects within your selected time restriction. Adjust your time restriction and try again."}
    </TimeRestrictErrorMsg>
  );
}


