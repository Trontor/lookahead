import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import styled from "styled-components";

const PopOver = styled.div`
  position: absolute;
  z-index: 100;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const TwitterWrapper = styled.div`
  > div > div:not(:last-child) {
    left: ${props => {
      if (props.tip) {
        console.log(props.tip.x);
        const boundary = props.tip.x > 276 ? 276 : props.tip.x;
        return boundary - 20;
      }
      return 12;
    }}px !important;
  }
  .twitter-picker {
    margin-top: 10px;
  }
`;

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
      <Button onClick={handleClick}>
        <i className="fa fa-paint-brush" />
      </Button>

      {displayColorPicker ? (
        <PopOver>
          <Cover onClick={handleClose} />
          <TwitterWrapper tip={tipPosition}>
            <TwitterPicker onChange={props.onColorChange} />
          </TwitterWrapper>
        </PopOver>
      ) : null}
    </>
  );
}
