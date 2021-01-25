import styled, {css} from 'styled-components';
export const PopOver = styled.div`
  position: absolute;
  z-index: 100;
  left: 25%;

  @media screen and (min-width: 768px) {
    transform: translateX(-190px);
  }

  @media screen and (min-width: 1024px) {
    transform: translateX(-20px);
  }
`;

export const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const TwitterWrapper = styled.div`
  > div > div:not(:last-child) {
    ${({tip}) => {
      if (!tip) {
        return null;
      }
      const xCoord = tip.x;
      return css`
        left: ${xCoord > 276 ? 276 - 20 : xCoord - 20}px !important;

        @media screen and (min-width: 1024px) {
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
