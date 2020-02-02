import styled from "styled-components";
export const HeaderWrapper = styled.div`
  text-align: center;
  position: relative;
  height: 30px;
  line-height: 30px;
  margin: 7px 10px;

  :focus {
    outline: none;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 10px 0;
  }
`;

export const TimetableCount = styled.span`
  font-weight: bold;
`;
export const NavigationButtonWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  max-width: 150px;
  position: absolute;
  left: ${({ left }) => (left ? 0 : "auto")};
  right: ${({ right }) => (right ? 0 : "auto")};
`;

export const NavigationButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  color: #f9f9f9;
  flex-grow: ${props => (props.fixed ? 0 : 1)};
  background-color: ${props => props.theme.secondary};
  padding: 6px 5px;
  border: none;

  :disabled {
    display: none;
  }

  :hover {
    background-color: ${props => props.theme.secondaryDark};
    border-color: ${props => props.theme.secondaryDark};
  }
`;
