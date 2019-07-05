import { UPDATE_EVENTS } from "../actionTypes";

const initialState = { regularEvents: [], backgroundEvents: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EVENTS:
      const allEvents = action.payload;
      return {
        ...state,
        regularEvents: allEvents.filter(
          event => event.rendering !== "background"
        ),
        backgroundEvents: allEvents.filter(
          event => event.rendering === "background"
        )
      };
    default:
      return state;
  }
};
