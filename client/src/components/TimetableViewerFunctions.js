import moment from "moment";
import $ from "jquery";

// Converter class (SubjectClass -> FullCalendar Event Object)
export const classToEvent = (subjects, cls) => {
  const calculateEventDate = (dayIndex, hours) => {
    const today = moment();
    const startOfWeek = today.startOf("isoWeek");
    return startOfWeek.add(dayIndex, "days").add(hours, "hours");
  };
  let {
    day,
    classCode,
    start,
    finish,
    description,
    subjectCode,
    locations,
    type,
    streamNumber,
    codes
  } = cls;
  start = calculateEventDate(day, start).toDate();
  finish = calculateEventDate(day, finish).toDate();
  const locked = type === "Mandatory" ? false : true;
  return {
    title: description,
    backgroundColor: subjects[subjectCode].color,
    locations: locations.length,
    type,
    classCode,
    codes,
    streamNumber,
    code: subjectCode,
    subjectName: subjects[subjectCode].name,
    className: "lookahead-event-wrapper",
    start: start,
    end: finish,
    editable: locked,
    durationEditable: false
  };
};

const REGULAR_EVENTS_OPACITY = 0.25;
let currentBackgroundEvents = [];
/**
 * Handles when an event has started to be dragged
 * Main actions: make regular events {REGULAR_EVENTS_OPACITY}% visible, show
 * relevant (allowed) background events
 * @param {[Event]} allEvents
 * @param {Event} currentEvent
 */
export const handleEventDragStart = (allEvents, currentEvent) => {
  // Get all foreground events
  const regularEvents = allEvents.filter(e => e.rendering !== "background");
  // Make them opaque
  regularEvents.forEach(event => {
    $(`.${event.className}`).css("opacity", REGULAR_EVENTS_OPACITY);
  });
  // Get all allowed drop events
  const backgroundEvents = allEvents.filter(
    e =>
      e.rendering === "background" &&
      e.title === currentEvent.title &&
      e.code === currentEvent.extendedProps.code
  );
  // Track the currently shown background events
  currentBackgroundEvents = backgroundEvents;
  // Show all allowed background events
  backgroundEvents.forEach(showBackgroundEvent);
};

let currentStreamIndicators = [];
/**
 * Determines whether or not an event being dragged can be placed at a certain
 * location.
 * @param {DropLocation} dropLocation
 * @param {Event} draggedEvent
 * @param {[Event]} allEvents
 */
export const handleEventAllow = (dropLocation, draggedEvent, allEvents) => {
  const intersects = currentBackgroundEvents.filter(event => {
    const sameDay = dropLocation.start.getDay() === event.start.getDay();
    const sameHour = dropLocation.start.getHours() === event.start.getHours();
    const sameMinutes =
      dropLocation.start.getMinutes() === event.start.getMinutes();
    return sameDay && sameHour && sameMinutes;
  });
  const onAClass = intersects.length > 0;
  const isStream = draggedEvent.extendedProps.type === "Stream";
  if (!isStream) {
    return onAClass;
  }
  const bgEvents = allEvents.filter(event => event.rendering === "background");
  if (onAClass) {
    const intersectingEvent = intersects[0];

    // Find all events that are a part of this stream
    const sameStream = bgEvents.filter(
      event =>
        event.code === intersectingEvent.code &&
        event.classCode.type === intersectingEvent.classCode.type &&
        event.streamNumber === intersectingEvent.streamNumber &&
        event.className !== intersectingEvent.className
    );
    console.log(draggedEvent);
    sameStream.forEach(e => currentStreamIndicators.push(e));
    sameStream.forEach(showEventIndicator);
    return true;
  } else {
    currentStreamIndicators.forEach(hideBackgroundEvent);
    currentStreamIndicators = [];
    return false;
  }
};

/**
 * Handles when an event is stopped being dragged.
 * Main actions: make regular events 100% visible, hide all background events
 * @param {[Event]} allEvents
 * @param {Event} currentEvent
 */
export const handleEventDragStop = (allEvents, currentEvent) => {
  // Get all foreground events
  const regularEvents = allEvents.filter(e => e.rendering !== "background");
  regularEvents.forEach(event => {
    $(`.${event.className}`).css("opacity", 1);
  });
  // Get all allowed drop events
  const backgroundEvents = allEvents.filter(e => e.rendering === "background");
  // Hide all allowed background events
  backgroundEvents.forEach(hideBackgroundEvent);
  currentBackgroundEvents = [];
};

export const handleEventDrop = ({ event, oldEvent }) => {
  console.log(event, oldEvent);
};

const BACKGROUND_EVENT_COLOR = "orange";
const showBackgroundEvent = event => {
  const className = event.className;
  if (event.type === "Stream") {
    $(`.${className}`).append("Stream #" + event.streamNumber);
  }
  $(`.${className}`).css("background-color", BACKGROUND_EVENT_COLOR);
  //   $(`.${className}`).removeClass("hide");
  //   $(`.${className}`).addClass("show");
};

const hideBackgroundEvent = event => {
  const className = event.className;
  // Removes all child elements, clearing out rendered text like "Stream #x"
  $(`.${className}`).empty();
  $(`.${className}`).css("background-color", "transparent");
};

const showEventIndicator = event => {
  const className = event.className;
  $(`.${className}`).css("background-color", "green");
};

export const generateBackgroundEvents = subjects => {
  const bgEvents = [];
  // Loop through each subject, generating background events for them 1-by-1
  for (const [code, { data }] of Object.entries(subjects)) {
    // Check if the data for the subject has been retrieved yet
    if (!data) {
      // If not, continue to the next subject
      continue;
    }
    // Helper function to generate unique class names for each background event
    const generateClassName = ({ subjectCode, description, streamNumber }) =>
      `lookahead-background-${subjectCode}-${description}-${streamNumber}`.replace(
        " ",
        ""
      );
    // Generate bg events for Variable classes
    for (const cls of data._regularClasses) {
      const event = {
        ...classToEvent(subjects, cls),
        className: generateClassName(cls),
        backgroundColor: "transparent",
        rendering: "background"
      };
      bgEvents.push(event);
    }
    // Generate bg events for streams
    for (const { streams } of Object.values(data._streamContainers)) {
      for (const { classes } of streams) {
        for (const cls of classes) {
          const event = {
            ...classToEvent(subjects, cls),
            className: generateClassName(cls),
            backgroundColor: "transparent",
            rendering: "background"
          };
          bgEvents.push(event);
        }
      }
    }
  }
  return bgEvents;
};
