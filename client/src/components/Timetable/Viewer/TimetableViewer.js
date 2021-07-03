import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './TimetableViewer.scss';
import handleClassRender from '../../../utility/ClassRender';
import {
  classToEvent,
  handleEventAllow,
  handleEventDragStart,
  handleEventDragStop,
  generateBackgroundEvents,
  handleEventDrop,
  handleSelect,
  handleEventClick,
} from './utility/TimetableViewerFunctions';
import {updateEvents} from '../../../redux/actions/timetableActions';
import TimetableHeaderControl from '../Header/TimetableHeaderControl';
import NoTimetables from '../NoTimetables/NoTimetables';
import TimetableTips from '../Tips/TimetableTips';
import TimetableViewerWrapper from './TimetableViewerStyles';
import ClassModal from '../ClassModal/ClassModal';

let modalEvent = null;
export default function TimetableViewer() {
  const optimiser = useSelector(state => state.optimiser);
  const dispatch = useDispatch();
  const subjects = useSelector(state => state.subjects);
  const timetable = useSelector(state => state.timetable);
  const is24 = useSelector(state => state.timeFormat === '24hr');
  const {
    timetables,
    currentIndex,
    customTimetables,
    currentCustomIndex,
    currentView,
    reserved,
  } = optimiser;
  const [modalIsOpen, setModalOpen] = useState(false);
  const viewerRef = useRef(null);
  // Check if any subject has a class on the weekend
  const hasWeekendClasses = Object.entries(subjects).some(
    ([_, {data}]) => data && data._weekendClasses
  );
  useEffect(() => {
    if (!timetables) {
      return;
    }
    let currentTimetable = timetables[currentIndex];

    // let headerText = `Timetable ${currentIndex + 1}/${timetables.length}`;
    if (currentView === 'custom') {
      // const { id, name, timetable } = customTimetables[currentCustomIndex];
      currentTimetable = customTimetables[currentCustomIndex].timetable;
      // headerText = `Custom Timetable ${id}: ${name}`;
    }
    console.log('Current Timetable:', currentTimetable);

    // Map timetable classes to events
    currentTimetable.classList = currentTimetable.classList.filter(
      cls => subjects[cls.subjectCode]
    );
    const events = currentTimetable.classList.map(cls => classToEvent(cls));
    events.push(...generateBackgroundEvents());
    console.log(reserved);
    events.push(...reserved);
    console.log('Dispatching events...');
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
    reserved,
  ]);
  useEffect(() => {
    if (!timetables) {
      return;
    }
    setTimeout(() => {
      viewerRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  }, [timetables]);

  const showEvent = event => {
    if (event.background) {
      return;
    }
    modalEvent = event;
    console.log('Showing:', modalEvent);
    setModalOpen(true);
  };

  if (!timetables || (timetables.length === 1 && !timetables[0].classList)) {
    return <NoTimetables hasSubjects={Object.keys(subjects).length > 0} />;
  }
  const events = timetable.allEvents;
  const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let headerText = `${currentIndex + 1} of ${numberWithCommas(timetables.length)}`;
  if (currentView === 'custom') {
    headerText = customTimetables[currentCustomIndex].name;
  }

  console.log('Modal Event:', modalEvent);

  return (
    <>
      <TimetableTips ref={viewerRef} />
      <TimetableHeaderControl header={headerText} />
      {/* <CustomTimetableControl /> */}
      <TimetableViewerWrapper>
        <FullCalendar
          defaultView="timeGridWeek"
          height="parent"
          plugins={[timeGridPlugin, interactionPlugin]}
          weekends={hasWeekendClasses}
          slotLabelFormat={
            is24
              ? {
                  hour: 'numeric',
                  minute: '2-digit',
                  omitZeroMinute: true,
                  hour12: false,
                  meridiem: 'narrow',
                }
              : undefined
          }

          events={events}
          eventClick={eInfo => handleEventClick(eInfo, showEvent)}
          select={handleSelect}
          eventDrop={handleEventDrop}
          eventDragStart={({event}) => handleEventDragStart(events, event)}
          eventAllow={(dropLocation, draggedEvent) =>
            handleEventAllow(dropLocation, draggedEvent, events)
          }
          eventDragStop={({event}) => handleEventDragStop(events, event)}
          eventPositioned={handleClassRender}
          header={false}
          handleWindowResize={true}
          contentHeight="auto"
          selectable={true}
          columnHeaderFormat={{weekday: 'short'}}
          minTime="08:00:00"
          maxTime="22:30:00"
          snapDuration="00:15"
          firstDay={1}
          editable={true}
          slotEventOverlap={false}
          allDaySlot={false}
          eventResourceEditable={true}
        />
      </TimetableViewerWrapper>

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
}
