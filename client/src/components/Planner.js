import React from "react";
import SubjectSelect from "./SubjectSelect";
import Subjects from "./Subjects";
import TimetableViewer from "./TimetableViewer";
import { useSelector, useDispatch } from "react-redux";
import { optimise } from "../redux/actions/optimiserActions";
import OptimisationTypes from "../optimiser/optimisationTypes";
import Notifications from "./Notifications";
import styled from "styled-components";
import Optimisations from "./Optimisations";

const Grid = styled.div`
  display: grid;
  grid-template-columns: [sidebar] 400px [viewer] auto;
  grid-template-rows: auto;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;
const Sidebar = styled.div`
  grid-row-start: sidebar;
  @media screen and (max-width: 1024px) {
    grid-row-start: 1;
  }
`;
const Main = styled.div`
  grid-row-start: viewer;
`;
export default function Planner() {
  const subjects = useSelector(state => state.subjects);
  const dispatch = useDispatch();
  // Get subject keys
  const keys = Object.keys(subjects);
  const allLoaded = !keys.some(key => subjects[key].data === null);
  if (allLoaded && keys.length > 0) {
    console.log("All loaded!");
    console.log(subjects);
    const optimisations = [
      {
        type: OptimisationTypes.AVOID_CLASHES
      },
      {
        type: OptimisationTypes.CRAM_CLASSES_SKIP_LECTURES
      }
    ];
    const restrictions = {
      earliestStart: 8,
      latestFinish: 24
    };
    dispatch(optimise(subjects, optimisations, restrictions));
  }
  return (
    <div>
      <Grid>
        <Sidebar>
          <Notifications />
          <SubjectSelect />
          <Subjects />
          <Optimisations />
          <button onClick={() => dispatch(optimise(subjects))}>Optimise</button>
        </Sidebar>
        <Main>
          <TimetableViewer />
        </Main>
      </Grid>
    </div>
  );
}
