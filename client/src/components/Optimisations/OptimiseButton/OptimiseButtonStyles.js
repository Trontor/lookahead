import styled from "styled-components";
export const OptimiseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const OptimiseButton = styled.button`
  font-family: "Quicksand";
  font-size: 15px;
  background-color: ${props => props.theme.main};
  color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 12px 25px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0.375rem;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  white-space: normal;
  word-wrap: break-word;
  letter-spacing: 0.02em;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${props => props.theme.mainDark};
  }
`;
