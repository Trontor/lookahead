import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./TimetableViewer.scss";
import handleClassRender from "../utility/ClassRender";
import moment from "moment";

export default function TimetableViewer() {
  const { timetables, currentIndex } = useSelector(state => state.optimiser);
  const subjects = useSelector(state => state.subjects);
  const relevantTimetable = timetables[currentIndex];
  // Converter class (SubjectClass -> FullCalendar Event Object)
  const classToEvent = cls => {
    console.log(subjects);
    const calculateEventDate = (dayIndex, hours) => {
      const today = moment();
      const startOfWeek = today.startOf("isoWeek");
      return startOfWeek.add(dayIndex, "days").add(hours, "hours");
    };
    let { day, start, finish, description, subjectCode } = cls;
    start = calculateEventDate(day, start).toDate();
    finish = calculateEventDate(day, finish).toDate();
    return {
      title: description,
      backgroundColor: "red",
      locations: 2,
      type: "Mandatory",
      code: subjectCode,
      subjectName: subjects[subjectCode].name,
      className: "lookahead-event-wrapper",
      start: start,
      end: finish,
      editable: false
    };
  };
  // Map timetable classes to events
  const events = relevantTimetable.classList.map(classToEvent);
  console.log(relevantTimetable, events);
  return (
    <FullCalendar
      defaultView="timeGridWeek"
      plugins={[timeGridPlugin]}
      weekends={false}
      slotLabelFormat={{
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: true,
        hour12: false,
        meridiem: "narrow"
      }}
      events={events}
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
      allDaySlot={false}
    />
  );
}
