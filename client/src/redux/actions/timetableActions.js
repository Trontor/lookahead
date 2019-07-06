import { UPDATE_EVENTS } from "../actionTypes";

export const updateEvents = allEvents => ({
  type: UPDATE_EVENTS,
  payload: allEvents
});
