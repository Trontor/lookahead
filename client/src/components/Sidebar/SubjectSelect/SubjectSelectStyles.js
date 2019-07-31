import styled from "styled-components";
export const SelectContainer = styled.div`
  display: flex;
  & > div {
    & > div {
      background-color: ${props => props.theme.sidebarBg};
    }
    display: inline-block;
  }

  .study-period-select {
    width: 140px;
    margin-right: 5px;
  }

  .subject-select {
    width: 100%;
  }
`;
