import {UPDATE_EVENTS} from '../actionTypes';

const initialState = {allEvents: [], regularEvents: [], backgroundEvents: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EVENTS:
      const allEvents = action.payload;
      return {
        ...state,
        allEvents,
        regularEvents: allEvents.filter(event => event.rendering !== 'background'),
        backgroundEvents: allEvents.filter(event => event.rendering === 'background'),
      };
    default:
      return state;
  }
};
