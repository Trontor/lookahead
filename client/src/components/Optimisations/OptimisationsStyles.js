import styled, {css} from 'styled-components';

export const OptimisationsWrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.text};
  margin: 0 auto;
  padding: 5px 0;
`;

export const OptimisationsContainer = styled.div`
  margin: 0 auto;
  display: inline-block;
`;

export const Header = styled.h1`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Subheader = styled.h2`
  font-size: 14px;
  line-height: 1em;
`;

export const SmallMsg = styled.span`
  font-size: 0.85em;
  line-height: 2em;
  opacity: 0.7;
`;

export const Optimisation = styled.div`
  text-align: ${({center}) => (center ? 'center' : 'left')};
  margin: 8px 0;
  padding-left: ${({sub}) => (sub ? '25px' : '0px')};
  .rc-time-picker-input {
    width: 75px;
  }

  ${({child}) =>
    child &&
    css`
      margin-top: -2px;
      margin-left: 30px;

      input {
        font-size: 12px;
        width: 28px;
        margin-right: 5px;
      }
    `};
`;

export const HourInputWrapper = styled.div`
  display: block;
  margin-top: 8px;
`;

export const TimeOptimisation = styled.div`
  margin: 30px 40px 40px 40px;
  max-width: 200px;
`;

export const Input = styled.input`
  padding: 5px 2px;
  margin: 2px;
  color: #555;
  border: 1px solid #ddd;
  width: 20px;
  text-align: center;
  border-radius: 2px;
`;

export const ButtonGroup = styled.div`
  margin: 5px;
  display: inline-block;

  /* Clear floats (clearfix hack) */
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;
