import styled, {css} from 'styled-components';

export const TipWrapper = styled.div`
  margin: 5px 5px 20px 5px;
`;

export const TipHeader = styled.h3`
  margin-bottom: 9px;
  margin-left: 7px;

  i {
    color: gold;
    padding-left: 2px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0;
    margin-left: 0;
  }
`;

export const Tip = styled.div`
  margin: 7px;
  padding: 1px 7px;
  font-size: 12px;
  border-left: 3px solid ${props => props.theme.accent};
  letter-spacing: -0.01em;

  i {
    font-size: 10px;
  }

  @media screen and (min-width: 1024px) {
    margin: 5px 0;
  }

  ${({mobile}) =>
    mobile &&
    css`
      @media screen and (min-width: 1024px) {
        display: none;
      }
    `}

  ${({desktop}) =>
    desktop &&
    css`
      display: none;

      @media screen and (min-width: 1024px) {
        display: block;
      }
    `}
`;
