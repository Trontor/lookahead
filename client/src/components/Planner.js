import React from "react";
import TimetableViewer from "./Timetable/TimetableViewer";
import styled from "styled-components";
import Sponsors from "./Sponsors/Sponsors";
import Sidebar from "./Sidebar/Sidebar";
import BronzeSponsors from "./Sponsors/BronzeSponsors";
import Footer from "./Footer";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto [footer] 100px;
  height: calc(100% - 60px);
  @media screen and (min-width: 960px) {
    grid-template-rows: [content] auto [footer] 100px;
    grid-template-columns: [sidebar] minmax(22%, 350px) [viewer] auto;
  }
`;

const SidebarWrapper = styled.div`
  background-color: ${props => props.theme.sidebarBg};
  grid-row: 1;
  max-width: inherit;
  padding: 10px;
  padding-bottom: 20px;
  z-index: 2;
  box-shadow: -2px 0 3px 0 rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 960px) {
    grid-column-start: sidebar;
    box-shadow: 2px -2px 1px -2px rgba(0, 0, 0, 0.15);
    /* border-right: solid 1px #eee; */
  }
`;

const Main = styled.div`
  grid-row: 2;
  padding-top: 10px;

  @media screen and (min-width: 960px) {
    grid-column-start: viewer;
    grid-row: 1 / 3;
    padding: 10px 10px 0;
  }
`;

export default function Planner() {
  return (
    <Grid>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Main>
        <Sponsors />
        <TimetableViewer />
        <BronzeSponsors />
      </Main>
      <Footer />
    </Grid>
  );
}
