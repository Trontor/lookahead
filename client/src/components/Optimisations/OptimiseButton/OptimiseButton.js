import {OptimiseButton, OptimiseButtonWrapper} from './OptimiseButtonStyles';
import {
  PossibilitiesStat,
  PossibilitiesDisclaimer,
  TimeRestrictMsgWrapper,
} from '../TimeRestrictMsg/TimeRestrictMsgStyles';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import OptimisationTypes from '../../../optimiser/optimisationTypes';
import Optimiser, {PERMUTATION_THRESHOLD} from '../../../optimiser/Optimiser';
import TimeRestrictMsg from '../TimeRestrictMsg/TimeRestrictMsg';
import {optimise} from '../../../redux/actions/optimiserActions';

let hasAutoOptimised = true;
export default () => {
  const subjects = useSelector(state => state.subjects);
  const optimisations = useSelector(state => state.optimisations);
  const optimiser = useSelector(state => state.optimiser);
  const [permutations, setPermutations] = useState(null);
  const [validRestrictions, setValidRestrictions] = useState(true);
  const dispatch = useDispatch();
  // Get subject keys
  const keys = Object.keys(subjects);
  const allLoaded = !keys.some(key => subjects[key].data === null);

  // const toggleSidebar = () => {
  //   this.Sidebar.maxWidth = 0px,
  //   this.Sidebar.minWidth = 0px
  // }

  const updatePermutations = useCallback(() => {
    if (!allLoaded) return;
    const {
      range: {min, max},
      ignoreWeirdStreams,
    } = optimisations;
    console.log('WEIRD: ' + ignoreWeirdStreams);

    const optimiser = new Optimiser(subjects, ignoreWeirdStreams);
    const restrictions = {
      earliestStart: min,
      latestFinish: max,
    };
    const validRestrictions = optimiser.applyTimeRestrictions(
      restrictions.earliestStart,
      restrictions.latestFinish
    );
    setValidRestrictions(validRestrictions);
    if (validRestrictions) {
      const permutations = optimiser.possiblePermutations();
      console.log(permutations);
      setPermutations(permutations);
    }
  }, [optimisations, allLoaded, subjects]);
  const invokeOptimisation = () => {
    const optimisationTypes = [];
    const {
      range: {min, max},
      avoidDays,
      skipLectures,
      cramClasses,
      ignoreWeirdStreams,
      breakHours,
      minimiseClashes,
    } = optimisations;
    const {reserved} = optimiser;

    if (minimiseClashes) {
      optimisationTypes.push({type: OptimisationTypes.AVOID_CLASHES});
    }
    if (ignoreWeirdStreams) {
      optimisationTypes.push({type: OptimisationTypes.IGNORE_WEIRD_STREAMS});
    }
    if (breakHours) {
      optimisationTypes.push({
        type: OptimisationTypes.LONGEST_RUN,
        data: breakHours === '' ? 24 : breakHours,
      });
    }
    if (avoidDays.length !== 0) {
      for (const index of avoidDays) {
        optimisationTypes.push({
          type: OptimisationTypes.AVOID_DAYS,
          data: index,
        });
      }
    }
    if (cramClasses) {
      if (skipLectures) {
        optimisationTypes.push({
          type: OptimisationTypes.CRAM_CLASSES_SKIP_LECTURES,
        });
      } else {
        optimisationTypes.push({
          type: OptimisationTypes.CRAM_CLASSES,
        });
      }
    }
    const restrictions = {
      earliestStart: min,
      latestFinish: max,
    };
    dispatch(optimise(subjects, optimisationTypes, restrictions, reserved));
  };

  if (
    (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') &&
    allLoaded &&
    keys.length > 0 &&
    !hasAutoOptimised
  ) {
    console.log('All loaded!');
    console.log(subjects);
    invokeOptimisation();
    hasAutoOptimised = true;
  }
  const timeout = useRef(null);
  useEffect(() => {
    if (timeout) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      updatePermutations();
    }, 250);
  }, [optimisations, updatePermutations]);

  return (
    <>
      <TimeRestrictMsgWrapper>
        {!validRestrictions && <TimeRestrictMsg />}
        {validRestrictions && permutations ? (
          <PossibilitiesStat>
            <span>{permutations.toLocaleString()} timetables</span>
            {permutations > PERMUTATION_THRESHOLD ? (
              <PossibilitiesDisclaimer>
                That's a lot, so we'll only show you around 25,000
              </PossibilitiesDisclaimer>
            ) : (
              <PossibilitiesDisclaimer>
                We're confident we can generate the best timetable based on your optimisations
              </PossibilitiesDisclaimer>
            )}
          </PossibilitiesStat>
        ) : null}
      </TimeRestrictMsgWrapper>
      <OptimiseButtonWrapper>
        <OptimiseButton disabled={!allLoaded} onClick={() => invokeOptimisation()}>
          {allLoaded ? 'Optimise' : 'Loading...'}
        </OptimiseButton>
      </OptimiseButtonWrapper>
    </>
  );
};
