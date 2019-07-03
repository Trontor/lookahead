import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./TimetableViewer.scss";
import handleClassRender from "../utility/ClassRender";
import moment from "moment";
import {
  nextTimetable,
  previousTimetable
} from "../redux/actions/optimiserActions";

export default function TimetableViewer() {
  const { timetables, currentIndex } = useSelector(state => state.optimiser);
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.subjects);
  if (!timetables) {
    return "No timetables";
  }
  const relevantTimetable = timetables[currentIndex];
  // Converter class (SubjectClass -> FullCalendar Event Object)
  const classToEvent = cls => {
    const calculateEventDate = (dayIndex, hours) => {
      const today = moment();
      const startOfWeek = today.startOf("isoWeek");
      return startOfWeek.add(dayIndex, "days").add(hours, "hours");
    };
    let { day, start, finish, description, subjectCode, locations, type } = cls;
    start = calculateEventDate(day, start).toDate();
    finish = calculateEventDate(day, finish).toDate();
    return {
      title: description,
      backgroundColor: subjects[subjectCode].color,
      locations: locations.length,
      type,
      code: subjectCode,
      subjectName: subjects[subjectCode].name,
      className: "lookahead-event-wrapper",
      start: start,
      end: finish,
      editable: false
    };
  };
  console.log("Current Timetable:", relevantTimetable);
  // Map timetable classes to events
  relevantTimetable.classList = relevantTimetable.classList.filter(
    cls => subjects[cls.subjectCode]
  );
  const events = relevantTimetable.classList.map(classToEvent);
  return (
    <>
      {timetables && (
        <div>
          Timetable {currentIndex + 1}/{timetables.length}
          <span onClick={() => dispatch(nextTimetable())}>Next</span>
          <span onClick={() => dispatch(previousTimetable())}>Prev</span>
          <span> Clashes: {relevantTimetable.clashes}</span>
        </div>
      )}
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
        slotEventOverlap={false}
        allDaySlot={false}
      />
    </>
  );
}
