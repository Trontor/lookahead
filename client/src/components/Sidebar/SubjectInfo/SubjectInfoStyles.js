import styled from 'styled-components';
export const ViewSubjectWrapper = styled.div``;

export const GoBackButton = styled.button`
  cursor: pointer;
  width: 130px;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  margin-top: 10px;
  border-radius: 3px;
  color: #f9f9f9;
  background-color: ${props => props.theme.secondary};
  padding: 6px 5px;
  border: none;
  z-index: 100;
  left: ${({left}) => (left ? 0 : 'auto')};
  right: ${({right}) => (right ? 0 : 'auto')};

  i {
    margin-right: 10px;
  }

  :disabled {
    display: none;
  }

  :hover {
    background-color: ${props => props.theme.secondaryDark};
    border-color: ${props => props.theme.secondaryDark};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 3px;

  > div {
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
