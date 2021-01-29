import styled, {css} from 'styled-components';
export const AvoidButton = styled.button`
  outline: 0;
  width: 50px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bold;
  font-size: 11px;
  border: 1px solid ${props => props.theme.main};
  padding: 6px 0; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  margin-bottom: 12px;

  &:hover {
  }

  @media screen and (min-width: 1024px) {
    width: 40px;
  }

  ${props => {
    if (props.activated) {
      console.log(props.activated);
      return css`
        background-color: ${props => props.theme.main};
        color: white;
      `;
    } else {
      return css`
        background-color: ${props => props.theme.sidebarBg};
        color: ${props => props.theme.main};
      `;
    }
  }}

  &:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 2px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${props => props.theme.main};
      color: white;
    }
  }
`;
