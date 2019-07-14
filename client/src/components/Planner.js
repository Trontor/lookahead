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
  grid-template-columns: 100%;
  height: calc(100% - 60px);
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: [sidebar] minmax(20%, 380px) [viewer] auto;
    grid-template-rows: auto;
  }
`;

const Sidebar = styled.div`
  background-color: ${props => props.theme.sidebarBg};
  grid-column-start: 1;
  max-width: inherit;
  padding: 10px;
  padding-bottom: 20px;
  z-index: 1;

  @media screen and (min-width: 960px) {
    grid-column-start: sidebar;
    /* box-shadow: 2px -2px 3px -2px rgba(0, 0, 0, 0.1); */
    border-right: solid 1px #eee;
  }
`;

const Main = styled.div`
  grid-column-start: 1;

  @media screen and (min-width: 960px) {
    grid-column-start: viewer;
  }
`;

const OptimiseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const OptimiseButton = styled.button`
  /* background-color: #a6c !important; */
  font-family: "Quicksand";
  font-size: 15px;
  /* background-color: ${props => props.theme.accent}; */
  background-color: lightsalmon;
  color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 12px 25px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0.375rem;
  border: 0;
  border-radius: 0.125rem;
  cursor: pointer;
  text-transform: uppercase;
  white-space: normal;
  word-wrap: break-word;

  &:active {
    background-color: #739 !important;
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;

let hasAutoOptimised = false;
export default function Planner() {
  const subjects = useSelector(state => state.subjects);
  const optimisations = useSelector(state => state.optimisations);
  const dispatch = useDispatch();
  // Get subject keys
  const keys = Object.keys(subjects);
  const allLoaded = !keys.some(key => subjects[key].data === null);
  const AUTO_OPTIMISE = true;
  const showSidebar = true;

  // const toggleSidebar = () => {
  //   this.Sidebar.maxWidth = 0px,
  //   this.Sidebar.minWidth = 0px
  // }

  const invokeOptimisation = () => {
    const optimisationTypes = [];
    const {
      range: { min, max },
      avoidDays,
      skipLectures,
      cramClasses,
      breakHours,
      minimiseClashes
    } = optimisations;
    if (minimiseClashes) {
      optimisationTypes.push({ type: OptimisationTypes.AVOID_CLASHES });
    }
    if (breakHours) {
      optimisationTypes.push({
        type: OptimisationTypes.LONGEST_RUN,
        data: breakHours === "" ? 24 : breakHours
      });
    }
    if (cramClasses) {
      if (skipLectures) {
        optimisationTypes.push({
          type: OptimisationTypes.CRAM_CLASSES_SKIP_LECTURES
        });
      } else {
        optimisationTypes.push({
          type: OptimisationTypes.CRAM_CLASSES
        });
      }
    }
    if (avoidDays.length !== 0) {
    }
    const restrictions = {
      earliestStart: min,
      latestFinish: max
    };
    dispatch(optimise(subjects, optimisationTypes, restrictions));
  };

  if (AUTO_OPTIMISE && allLoaded && keys.length > 0 && !hasAutoOptimised) {
    console.log("All loaded!");
    console.log(subjects);
    invokeOptimisation();
    hasAutoOptimised = true;
  }
  return (
    <Grid>
      <Sidebar>
        <Notifications />
        <SubjectSelect />
        <Subjects />
        <Optimisations />
        <OptimiseButtonWrapper>
          <OptimiseButton onClick={() => invokeOptimisation()}>
            Optimise
          </OptimiseButton>
        </OptimiseButtonWrapper>
      </Sidebar>
      <Main>
        <TimetableViewer />
      </Main>
    </Grid>
  );
}
