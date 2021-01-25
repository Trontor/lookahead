import styled from 'styled-components';
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

export const NavigationButton = styled.button`
  position: absolute;
  cursor: pointer;
  max-width: 75px;
  border-radius: 3px;
  color: #f9f9f9;
  background-color: ${props => props.theme.secondary};
  padding: 6px 5px;
  width: 100%;
  border: none;
  left: ${({left}) => (left ? 0 : 'auto')};
  right: ${({right}) => (right ? 0 : 'auto')};

  :disabled {
    display: none;
  }

  :hover {
    background-color: ${props => props.theme.secondaryDark};
    border-color: ${props => props.theme.secondaryDark};
  }
`;
