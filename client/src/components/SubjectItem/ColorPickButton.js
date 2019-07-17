import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import styled, { css } from "styled-components";
import SubjectColors from "../../utility/SubjectColors";

const PopOver = styled.div`
  position: absolute;
  z-index: 100;
  left: 25%;

  @media screen and (min-width: 768px) {
    transform: translateX(-190px);
  }

  @media screen and (min-width: 960px) {
    transform: translateX(-20px);
  }
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
    ${({ tip }) => {
      if (!tip) {
        return null;
      }
      const xCoord = tip.x;
      return css`
        left: ${xCoord > 276 ? 276 - 20 : xCoord - 20}px !important;

        @media screen and (min-width: 960px) {
          display: none;
        }
      `;
    }}
  }

  .twitter-picker {
    margin-top: 10px;
    max-width: 204px;
    padding-bottom: 8px;
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
        <i class="fas fa-palette" />
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
