import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./TimetableViewer.scss";
import handleClassRender from "../utility/ClassRender";
import {
  classToEvent,
  handleEventAllow,
  handleEventDragStart,
  handleEventDragStop,
  generateBackgroundEvents,
  handleEventDrop
} from "./TimetableViewerFunctions";
import {
  nextTimetable,
  previousTimetable
} from "../redux/actions/optimiserActions";
import { updateEvents } from "../redux/actions/timetableActions";

export default function TimetableViewer() {
  const {
    timetables,
    currentIndex,
    customTimetables,
    currentCustomIndex,
    currentView
  } = useSelector(state => state.optimiser);
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.subjects);
  if (!timetables) {
    return "No timetables";
  }

  let currentTimetable = timetables[currentIndex];
  let headerText = `Timetable ${currentIndex + 1}/${timetables.length}`;
  if (currentView === "custom") {
    const { id, name, timetable } = customTimetables[currentCustomIndex];
    currentTimetable = timetable;
    headerText = `Custom Timetable ${id}: ${name}`;
  }
  console.log("Current Timetable:", currentTimetable);
  // Map timetable classes to events
  currentTimetable.classList = currentTimetable.classList.filter(
    cls => subjects[cls.subjectCode]
  );
  const events = currentTimetable.classList.map(cls => classToEvent(cls));
  events.push(...generateBackgroundEvents());
  dispatch(updateEvents(events));

  return (
    <>
      {timetables && (
        <div>
          {headerText}
          <span onClick={() => dispatch(nextTimetable())}>Next</span>
          <span onClick={() => dispatch(previousTimetable())}>Prev</span>
          <span> Clashes: {currentTimetable.clashes}</span>
        </div>
      )}
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[timeGridPlugin, interactionPlugin]}
        weekends={false}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: true,
          hour12: false,
          meridiem: "narrow"
        }}
        events={events}
        eventDrop={handleEventDrop}
        eventDragStart={({ event }) => handleEventDragStart(events, event)}
        eventAllow={(dropLocation, draggedEvent) =>
          handleEventAllow(dropLocation, draggedEvent, events)
        }
        eventDragStop={({ event }) => handleEventDragStop(events, event)}
        eventPositioned={handleClassRender}
        header={false}
        handleWindowResize={true}
        height="parent"
        contentHeight="auto"
        columnHeaderFormat={{ weekday: "short" }}
        minTime="08:00:00"
        maxTime="22:30:00"
        snapDuration="00:15"
        firstDay={1}
        editable={true}
        slotEventOverlap={false}
        allDaySlot={false}
        eventResourceEditable={true}
      />
    </>
  );
}
