import React, { useState } from "react";
import { AvoidButton } from "./DayAvoidButtonStyles";

export default function DayAvoidButton(props) {
  const [activated, setActivated] = useState(false);
  const { onToggled } = props;
  const handleClick = e => {
    const newActive = !activated;
    setActivated(newActive);
    onToggled(newActive);
  };
  return (
    <AvoidButton activated={activated} onClick={handleClick}>
      {props.children}
    </AvoidButton>
  );
}
