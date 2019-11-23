import styled from "styled-components";
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto [footer] 100px;
  height: calc(100% - 60px);
  @media screen and (min-width: 1024px) {
    grid-template-rows: [content] auto [footer] 100px;
    grid-template-columns: [sidebar] minmax(22%, 330px) [viewer] auto;
  }
`;

export const SidebarWrapper = styled.div`
  background-color: ${props => props.theme.sidebarBg};
  grid-row: 1;
  max-width: inherit;
  padding: 10px;
  padding-bottom: 15px;
  z-index: 2;
  box-shadow: -2px 0 3px 0 rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 1024px) {
    grid-column-start: sidebar;
    box-shadow: 2px -2px 1px -2px rgba(0, 0, 0, 0.15);
    /* border-right: solid 1px #eee; */
  }
`;

export const Main = styled.div`
  grid-row: 2;
  padding: 10px 0 0;

  @media screen and (min-width: 1024px) {
    grid-column-start: viewer;
    grid-row: 1 / 3;
    padding: 10px;
  }
`;
