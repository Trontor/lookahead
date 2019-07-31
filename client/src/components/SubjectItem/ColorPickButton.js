import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import { Cover, PopOver, TwitterWrapper } from "./ColorPickButtonStyles";
import SubjectColors from "../../utility/SubjectColors";

export default function ColorPickButton(props) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [tipPosition, setTipPosition] = useState(null);
  const handleClick = e => {
    setTipPosition({ x: e.clientX, y: e.clientY });
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const Button = props.buttonStyle;
  return (
    <>
      <Button title="Change Colour" onClick={handleClick}>
        <i className="fas fa-palette" />
      </Button>

      {displayColorPicker ? (
        <>
          <Cover id="color-cover" onClick={handleClose} />
          <PopOver id="color-pop-over">
            <TwitterWrapper tip={tipPosition}>
              <TwitterPicker
                colors={[...SubjectColors].reverse()}
                onChange={props.onColorChange}
                triangle="hide"
              />
            </TwitterWrapper>
          </PopOver>
        </>
      ) : null}
    </>
  );
}
