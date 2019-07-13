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

  @media screen and (min-width: 960px) {
    height: auto;
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0;
    display: grid;
    grid-template-columns: [sidebar] minmax(30%, 250px) [viewer] auto;
    grid-template-rows: auto;
  }
`;

const Sidebar = styled.div`
  grid-column-start: 1;
  max-width: inherit;
  padding: 5px;
  height: 100%;

  @media screen and (min-width: 960px) {
    grid-column-start: sidebar;
    min-width: 280px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.12), 0 2px 8px 0 rgba(0, 0, 0, 0.12);
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
  background-color: ${props => props.theme.main};
  color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
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

  if (AUTO_OPTIMISE && allLoaded && keys.length > 0) {
    console.log("All loaded!");
    console.log(subjects);
    // invokeOptimisation();
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
