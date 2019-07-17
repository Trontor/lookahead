import moment from "moment";
import $ from "jquery";
import store from "../../redux/store";
import {
  createCustomTimetable,
  changeToCustomView,
  updateCustomTimetable,
  updateTimetable
} from "../../redux/actions/optimiserActions";
import Timetable from "../../optimiser/Timetable";
export const getSubjects = () => {
  return store.getState().subjects;
};

export const getBackgroundEvents = () => {
  return store.getState().timetable.backgroundEvents;
};

export const getRegularEvents = () => {
  return store.getState().timetable.regularEvents;
};

export const getKeepClassesStreamed = () => {
  return store.getState().optimisations.keepClassesStreamed;
};

const getCurrentTheme = () => {
  return store.getState().theme;
};

const getCurrentTimetable = () => {
  const { timetables, currentIndex } = store.getState().optimiser;
  return { currentIndex, timetable: timetables[currentIndex] };
};

export const getCurrentCustomTimetable = () => {
  const {
    customTimetables,
    currentCustomIndex,
    currentView,
    timetables,
    currentIndex
  } = store.getState().optimiser;
  const timetable = customTimetables[currentCustomIndex];
  if (!timetable || currentView !== "custom") {
    console.log(
      "The current custom timetable does not exist... create a new one!"
    );
    const currentGeneratedTimetable = timetables[currentIndex];
    store.dispatch(
      createCustomTimetable("Custom Timetable", currentGeneratedTimetable)
    );
    store.dispatch(changeToCustomView());
    return getCurrentCustomTimetable();
  }
  return timetable;
};

// Converter class (SubjectClass -> FullCalendar Event Object)
export const classToEvent = cls => {
  const subjects = getSubjects();
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

let currentShownBackgroundEvents = [];
/**
 * Handles when an event has started to be dragged
 * Main actions: make regular events {REGULAR_EVENTS_OPACITY}% visible, show
 * relevant (allowed) background events
 * @param {[Event]} allEvents
 * @param {Event} currentEvent
 */
export const handleEventDragStart = (allEvents, currentEvent) => {
  let REGULAR_EVENTS_OPACITY = getCurrentTheme().dragDropRegularEventOpacity;
  // Get all foreground events
  const regularEvents = getRegularEvents();
  // Make them opaque
  regularEvents.forEach(event => {
    $(`.${event.className}`).css("opacity", REGULAR_EVENTS_OPACITY);
  });
  // Get all allowed drop events
  const backgroundEvents = getBackgroundEvents().filter(
    e =>
      e.classCode.type === currentEvent.extendedProps.classCode.type &&
      e.classCode.number === currentEvent.extendedProps.classCode.number &&
      e.code === currentEvent.extendedProps.code
  );
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
  const intersects = currentShownBackgroundEvents.filter(event => {
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
  if (onAClass) {
    const intersectingEvent = intersects[0];
    // Find all events that are a part of this stream
    const sameStream = getBackgroundEvents().filter(
      event =>
        event.code === intersectingEvent.code &&
        event.classCode.type === intersectingEvent.classCode.type &&
        event.streamNumber === intersectingEvent.streamNumber &&
        event.className !== intersectingEvent.className
    );
    if (getKeepClassesStreamed()) {
      sameStream.forEach(e => currentStreamIndicators.push(e));
      sameStream.forEach(showEventIndicator);
    }
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
  // Hide all background events
  getBackgroundEvents().forEach(hideBackgroundEvent);
  currentShownBackgroundEvents = [];
};

/**
 * Triggered when an event is dropped into a new timeslot.
 */
export const handleEventDrop = ({ event, oldEvent }) => {
  // Better name - L O W E R S~T H E~R E P R E S E N T A T I O N A L~G A P
  const newEvent = event;
  // Destructure information about the new class time
  const {
    start,
    title,
    extendedProps: { classCode, type, /*streamNumber,*/ code, codes }
  } = newEvent;
  const subjects = getSubjects();
  // Extract all regular classes for this subject
  const regularClasses = subjects[code].data._regularClasses;
  const streamContainers = subjects[code].data._streamContainers;
  const startHoursFractional = start.getHours() + start.getMinutes() / 60;
  const dayIndex = start.getDay() - 1;
  const destinationMatch = cls =>
    cls.classCode.type === classCode.type &&
    cls.subjectCode === code &&
    cls.start === startHoursFractional &&
    cls.day === dayIndex;
  if (type === "Stream") {
    const relevantStreams = streamContainers.find(
      container => container.type === classCode.type
    ).streams;
    const fromStreamNumber = oldEvent.extendedProps.streamNumber;
    const destinationStream = relevantStreams.find(stream =>
      stream.classes.some(destinationMatch)
    );
    const destinationStreamNumber = destinationStream.streamNumbers[0];
    console.log(fromStreamNumber, destinationStreamNumber);
    // Todo: make this update the timetable properly
    if (getKeepClassesStreamed())
      moveStream(
        code,
        classCode.type,
        fromStreamNumber,
        destinationStreamNumber
      );
    return;
  }
  const matchingClasses = regularClasses.filter(destinationMatch);
  // if (matchingClasses.length === 0) {
  //   // This reaaallly shouldn't happen - but if it does...?
  //   console.error("This shouldn't happen.", oldEvent, newEvent);
  //   return;
  // }
  // Yay, we found the class we've moved to!
  const newClass = matchingClasses[0];
  const subject = code;
  const fromCode = codes[0];
  const toCode = newClass.codes[0];
  moveRegularClass(subject, fromCode, toCode);
};

// const moveStream = (subjectCode, type, oldStreamNumber, newStreamNumber) => {
//   console.log(
//     `${subjectCode}: Moving Stream Type ${type}, ${oldStreamNumber} to ${newStreamNumber}`
//   );
//   // Get information about the current custom timetable
//   const {
//     id,
//     name,
//     timetable: { classList }
//   } = getCurrentCustomTimetable();
//   // Extract the old stream classes from the classList
//   const newClassList = classList.filter(
//     cls =>
//       cls.subjectCode !== subjectCode ||
//       cls.classCode.type !== type ||
//       cls.streamNumber !== oldStreamNumber
//   );
//   // Add the new stream classes to the classList
//   // First, get the new stream classes
//   const subject = getSubjects()[subjectCode].data;
//   const newClasses = subject._streamContainers
//     .find(container => container.type === type)
//     .streams.find(stream => stream.streamNumbers.includes(newStreamNumber))
//     .classes;
//   // Add each new class to the class list
//   newClasses.forEach(cls => newClassList.push(cls));

//   const newTimetable = new Timetable(newClassList);
//   store.dispatch(updateCustomTimetable(id, name, newTimetable));
// };

// const moveRegularClass = (subject, oldCode, newCode) => {
//   console.log(`${subject}: Moving ${oldCode} to ${newCode}`);
//   const {
//     id,
//     name,
//     timetable: { classList }
//   } = getCurrentCustomTimetable();
//   let newClass = getSubjects()[subject].data._regularClasses.filter(
//     cls => cls.codes[0] === newCode
//   )[0];
//   const oldClass = classList.filter(cls => cls.codes[0] === oldCode)[0];
//   classList.splice(classList.indexOf(oldClass), 1, newClass);
//   const newTimetable = new Timetable(classList);
//   console.log("New Timetable:", newTimetable);
//   store.dispatch(updateCustomTimetable(id, name, newTimetable));
// };

const moveStream = (subjectCode, type, oldStreamNumber, newStreamNumber) => {
  console.log(
    `${subjectCode}: Moving Stream Type ${type}, ${oldStreamNumber} to ${newStreamNumber}`
  );
  // Get current timetable
  const {
    currentIndex,
    timetable: { classList }
  } = getCurrentTimetable();
  console.log(
    "Proceeding to update this classlist:",
    Object.assign({}, classList)
  );
  // Extract the old stream classes from the classList
  const newClassList = classList.filter(
    cls =>
      cls.subjectCode !== subjectCode ||
      cls.classCode.type !== type ||
      cls.streamNumber !== oldStreamNumber
  );
  // Add the new stream classes to the classList
  // First, get the new stream classes
  const subject = getSubjects()[subjectCode].data;
  const newClasses = subject._streamContainers
    .find(container => container.type === type)
    .streams.find(stream => stream.streamNumbers.includes(newStreamNumber))
    .classes;
  // Add each new class to the class list
  newClasses.forEach(cls => newClassList.push(cls));
  console.log("Updated classlist:", Object.assign({}, newClassList));
  const newTimetable = new Timetable(newClassList);
  store.dispatch(updateTimetable(currentIndex, newTimetable));
};

const moveRegularClass = (subject, oldCode, newCode) => {
  console.log(`${subject}: Moving class, ${oldCode} to ${newCode}`);
  // Get current timetable
  const {
    currentIndex,
    timetable: { classList }
  } = getCurrentTimetable();
  console.log(
    "Proceeding to update this classlist:",
    Object.assign({}, classList)
  );
  // We filter the subject to get the new class
  const newClass = getSubjects()[subject].data._regularClasses.filter(
    cls => cls.codes[0] === newCode
  )[0];
  const oldClass = classList.filter(cls => cls.codes[0] === oldCode)[0];
  // Remove old class, and insert new class
  classList.splice(classList.indexOf(oldClass), 1, newClass);
  // Create a new timetable off this information
  const newTimetable = new Timetable(classList);
  store.dispatch(updateTimetable(currentIndex, newTimetable));
};

const showBackgroundEvent = event => {
  let BACKGROUND_EVENT_COLOR = getCurrentTheme().dragDropEventBg;
  let BACKGROUND_EVENT_BORDER = getCurrentTheme().dragDropEventBorder;
  const className = event.className;
  currentShownBackgroundEvents.push(event);
  if (event.type === "Stream") {
    $(`.${className}`).append("Stream #" + event.streamNumber);
  }
  $(`.${className}`).css("margin", "2.5px");
  $(`.${className}`).css("background-color", BACKGROUND_EVENT_COLOR);
  $(`.${className}`).css("border", BACKGROUND_EVENT_BORDER);
  //   $(`.${className}`).removeClass("hide");
  //   $(`.${className}`).addClass("show");
};

const hideBackgroundEvent = event => {
  const className = event.className;
  // Removes all child elements, clearing out rendered text like "Stream #x"
  $(`.${className}`).empty();
  $(`.${className}`).css("background-color", "transparent");
  $(`.${className}`).css("border", "none");
};

const showEventIndicator = event => {
  const className = event.className;
  $(`.${className}`).css("background-color", "green");
};

export const generateBackgroundEvents = () => {
  const bgEvents = [];
  const subjects = getSubjects();
  // Loop through each subject, generating background events for them 1-by-1
  for (const [code, { data }] of Object.entries(subjects)) {
    // Check if the data for the subject has been retrieved yet
    if (!data) {
      // If not, continue to the next subject
      continue;
    }
    // Helper function to generate unique class names for each background event
    const generateClassName = ({ subjectCode, description, streamNumber }) =>
      `lookahead-background-${subjectCode}-${description}-${streamNumber}`
        .replace(/\W+/g, "-")
        .toLowerCase();
    // Generate bg events for Variable classes
    for (const cls of data._regularClasses) {
      const event = {
        ...classToEvent(cls),
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
            ...classToEvent(cls),
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
