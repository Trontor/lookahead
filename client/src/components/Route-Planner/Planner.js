import React from "react";
import TimetableViewer from "../Timetable/Viewer/TimetableViewer";
import Sponsors from "../Sponsors/Sponsors";
import Sidebar from "../Sidebar/Sidebar";
import BronzeSponsors from "../Sponsors/BronzeSponsors";
import Footer from "../Footer/Footer";
import { Grid, Main, SidebarWrapper } from "./PlannerStyles";
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
