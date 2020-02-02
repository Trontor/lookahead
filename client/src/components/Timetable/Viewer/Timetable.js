import React, { useState } from "react";

import {
  classToEvent,
  handleEventAllow,
  handleEventDragStart,
  handleEventDragStop,
  generateBackgroundEvents,
  handleEventDrop,
  handleSelect,
  handleEventClick
} from "./utility/TimetableViewerFunctions";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import handleClassRender from "../../../utility/ClassRender";

import ClassModal from "../ClassModal/ClassModal";

let modalEvent = null;
export const Timetable = ({ weekendClasses, events }) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const showEvent = event => {
    if (event.background) {
      return;
    }
    modalEvent = event;
    setModalOpen(true);
  };

  return (
    <>
      <FullCalendar
        defaultView="timeGridWeek"
        height="parent"
        plugins={[timeGridPlugin, interactionPlugin]}
        weekends={weekendClasses}
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
      {modalEvent && (
        <ClassModal
          isOpen={modalIsOpen}
          closeModal={() => setModalOpen(false)}
          color={modalEvent.backgroundColor}
          {...modalEvent.extendedProps}
        />
      )}
    </>
  );
};
