import {
  SET_TIME_RANGE,
  ADD_AVOID_DAY,
  REMOVE_AVOID_DAY,
  SET_SKIP_LECTURES,
  SET_CRAM_CLASSES,
  SET_BREAK,
  SET_MINIMISE_CLASHES,
  SET_KEEP_CLASSES_STREAMED,
  SET_IGNORE_WEIRD_STREAMS,
  SET_DELIVERY_PREFERENCE,
} from '../actionTypes';

const initialState = {
  range: {min: 8, max: 22},
  avoidDays: [],
  skipLectures: false,
  cramClasses: true,
  breakHours: 24,
  minimiseClashes: true,
  keepClassesStreamed: true,
  ignoreWeirdStreams: true,
  deliveryPreference: 'any',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_RANGE:
      const {min, max} = action.payload;
      if (min < max && max > 0 && min > 0) {
        return {...state, range: {min, max}};
      }
      return {...state};
    case ADD_AVOID_DAY:
      const dayIndex = action.payload;
      const newAvoidDays = state.avoidDays;
      if (!state.avoidDays.includes(dayIndex)) {
        newAvoidDays.push(dayIndex);
      }
      return {...state, avoidDays: newAvoidDays};
    case REMOVE_AVOID_DAY:
      return {
        ...state,
        avoidDays: state.avoidDays.filter(idx => idx !== action.payload),
      };
    case SET_SKIP_LECTURES:
      return {...state, skipLectures: action.payload};
    case SET_KEEP_CLASSES_STREAMED:
      return {...state, keepClassesStreamed: action.payload};
    case SET_CRAM_CLASSES:
      return {...state, cramClasses: action.payload};
    case SET_BREAK:
      return {...state, breakHours: action.payload};
    case SET_IGNORE_WEIRD_STREAMS:
      return {...state, ignoreWeirdStreams: action.payload};
    case SET_MINIMISE_CLASHES:
      return {...state, minimiseClashes: action.payload};
    case SET_DELIVERY_PREFERENCE:
      return {...state, deliveryPreference: action.payload};
    default:
      return {...state};
  }
};
