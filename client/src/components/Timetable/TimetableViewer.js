import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./TimetableViewer.scss";
import Modal from "react-modal";
import styled from "styled-components";
import handleClassRender from "../../utility/ClassRender";
import {
  classToEvent,
  handleEventAllow,
  handleEventDragStart,
  handleEventDragStop,
  generateBackgroundEvents,
  handleEventDrop,
  handleSelect,
  handleEventClick
} from "./TimetableViewerFunctions";
import { updateEvents } from "../../redux/actions/timetableActions";
import TimetableHeaderControl from "./TimetableHeaderControl";
import NoTimetables from "./NoTimetables";
import TimetableTips from "./TimetableTips";

let modalEvent = null;
const StyledModal = styled(Modal)`
  background-color: green;
`;
export default function TimetableViewer() {
  const optimiser = useSelector(state => state.optimiser);
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.subjects);
  const timetable = useSelector(state => state.timetable);
  const {
    timetables,
    currentIndex,
    customTimetables,
    currentCustomIndex,
    currentView,
    reserved
  } = optimiser;
  const [modalIsOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (!timetables) {
      return;
    }
    let currentTimetable = timetables[currentIndex];

    // let headerText = `Timetable ${currentIndex + 1}/${timetables.length}`;
    if (currentView === "custom") {
      // const { id, name, timetable } = customTimetables[currentCustomIndex];
      currentTimetable = customTimetables[currentCustomIndex].timetable;
      // headerText = `Custom Timetable ${id}: ${name}`;
    }
    console.log("Current Timetable:", currentTimetable);
    // Map timetable classes to events
    currentTimetable.classList = currentTimetable.classList.filter(
      cls => subjects[cls.subjectCode]
    );
    const events = currentTimetable.classList.map(cls => classToEvent(cls));
    events.push(...generateBackgroundEvents());
    console.log(reserved);
    events.push(...reserved);
    console.log("Dispatching events...");
    dispatch(updateEvents(events));
  }, [
    currentCustomIndex,
    currentIndex,
    currentView,
    customTimetables,
    dispatch,
    subjects,
    timetables,
    optimiser,
    reserved
  ]);

  const showEvent = event => {
    modalEvent = event;
    console.log("Showing:", modalEvent);
    setModalOpen(true);
  };

  if (!timetables) {
    return <NoTimetables />;
  }
  const events = timetable.allEvents;
  const numberWithCommas = x =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let headerText = `${currentIndex + 1} of ${numberWithCommas(
    timetables.length
  )}`;
  if (currentView === "custom") {
    headerText = customTimetables[currentCustomIndex].name;
  }

  return (
    <>
      {/* <div>
        <h1>Your Timetables</h1>
        {customTimetables.map(custom => (
          <>
            <div key={custom.id}>Custom Timetable: {custom.name}</div>
            <button onClick={() => viewCustomTimetable(custom)}>View</button>
            <hr />{" "}
          </>
        ))}
        <button onClick={newCustomTimetable}>Add a Custom Timetable</button>
      </div>

      {timetables && (
        <div>
          {headerText}
          <div>
            <button onClick={() => dispatch(nextTimetable())}>Next</button>
            <button onClick={() => dispatch(previousTimetable())}>Prev</button>
          </div>
          <div>Clashes: {currentTimetable.clashes}</div>
          <div>
            Hours/Day:{" "}
            {Object.keys(currentTimetable.dayHours).map(dayIndex => (
              <span>
                {["Mon", "Tue", "Wed", "Thu", "Fri"][dayIndex]}:{" "}
                {currentTimetable.dayHours[dayIndex]}{" "}
              </span>
            ))}
          </div>
        </div>
      )} */}
      <TimetableTips />
      <TimetableHeaderControl header={headerText} />
      {/* <CustomTimetableControl /> */}
      <FullCalendar
        defaultView="timeGridWeek"
        height="parent"
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
        eventClick={eInfo => handleEventClick(eInfo, showEvent)}
        select={handleSelect}
        eventDrop={handleEventDrop}
        eventDragStart={({ event }) => handleEventDragStart(events, event)}
        eventAllow={(dropLocation, draggedEvent) =>
          handleEventAllow(dropLocation, draggedEvent, events)
        }
        eventDragStop={({ event }) => handleEventDragStop(events, event)}
        eventPositioned={handleClassRender}
        header={false}
        handleWindowResize={true}
        contentHeight="auto"
        selectable={true}
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
      <StyledModal
        isOpen={modalIsOpen && modalEvent !== null}
        contentLabel="Example Modal"
      >
        {modalEvent && (
          <div>
            <h1>{modalEvent.extendedProps.code}</h1>
            <h2>{modalEvent.extendedProps.subjectName}</h2>
            <h2>{modalEvent.extendedProps.streamNumber}</h2>
            <h2>{modalEvent.extendedProps.type}</h2>
            <h2>{modalEvent.extendedProps.classCode.type}</h2>
            <h2>{modalEvent.extendedProps.classCode.type}</h2>
            <h2>{modalEvent.extendedProps.locations}</h2>
          </div>
        )}
      </StyledModal>
    </>
  );
}
