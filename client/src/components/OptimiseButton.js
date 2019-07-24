import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { optimise } from "../redux/actions/optimiserActions";
import OptimisationTypes from "../optimiser/optimisationTypes";

const OptimiseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const OptimiseButton = styled.button`
  font-family: "Quicksand";
  font-size: 15px;
  background-color: ${props => props.theme.main};
  color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 12px 25px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0.375rem;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  white-space: normal;
  word-wrap: break-word;
  letter-spacing: 0.02em;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${props => props.theme.mainDark}
  }
`;
let hasAutoOptimised = false;
export default () => {
  const subjects = useSelector(state => state.subjects);
  const optimisations = useSelector(state => state.optimisations);
  const optimiser = useSelector(state => state.optimiser);
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
    const { reserved } = optimiser;

    if (minimiseClashes) {
      optimisationTypes.push({ type: OptimisationTypes.AVOID_CLASHES });
    }
    if (breakHours) {
      optimisationTypes.push({
        type: OptimisationTypes.LONGEST_RUN,
        data: breakHours === "" ? 24 : breakHours
      });
    }
    if (avoidDays.length !== 0) {
      for (const index of avoidDays) {
        optimisationTypes.push({
          type: OptimisationTypes.AVOID_DAYS,
          data: index
        });
      }
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
    const restrictions = {
      earliestStart: min,
      latestFinish: max
    };
    dispatch(optimise(subjects, optimisationTypes, restrictions, reserved));
  };

  if (
    (!process.env.NODE_ENV || process.env.NODE_ENV === "development") &&
    allLoaded &&
    keys.length > 0 &&
    !hasAutoOptimised
  ) {
    console.log("All loaded!");
    console.log(subjects);
    invokeOptimisation();
    hasAutoOptimised = true;
  }
  return (
    <OptimiseButtonWrapper>
      <OptimiseButton
        disabled={!allLoaded}
        onClick={() => invokeOptimisation()}
      >
        {allLoaded ? "Optimise" : "Loading..."}
      </OptimiseButton>
    </OptimiseButtonWrapper>
  );
};
