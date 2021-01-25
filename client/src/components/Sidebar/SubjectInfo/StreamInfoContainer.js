import React from 'react';
import {useSelector} from 'react-redux';
import {InfoTable, StreamClassInfoRow} from './ContainerStyles';
import timeIntToString from '../../../utility/TimeIntToString';
import daysOfWeek from '../../../utility/DaysOfWeek';
import {moveStream} from '../../Timetable/Viewer/utility/TimetableViewerFunctions';

export default function StreamInfoContainer(props) {
  const {streams, type, name, color, subjectCode} = props;
  const optimiser = useSelector(state => state.optimiser);
  const {currentIndex, timetables} = optimiser;
  const currentCodes = [];
  // Popular currentCodes with all classcodes of the timetable, for highlighting
  if (timetables && currentIndex >= 0 && currentIndex < timetables.length) {
    const currentTimetable = timetables[currentIndex];
    for (const entry of currentTimetable.classList) {
      currentCodes.push(...entry.codes);
    }
  }

  const currentStream = streams.find(stream =>
    stream.classes.some(cls => cls.codes.some(code => currentCodes.includes(code)))
  );

  const currentStreamNumbers = !currentStream ? [] : currentStream.streamNumbers;
  return (
    <InfoTable>
      {/* Headers */}
      <tr>
        <th className="header" colspan={4}>
          {name}
        </th>
      </tr>
      <tr>
        <th>Stream</th>
        <th>Day</th>
        <th>Start</th>
        <th>Finish</th>
        <th>Weeks</th>
      </tr>
      {/* We map the streams */}
      {streams.map((stream, streamIndex) => {
        // Important information
        const {classes, streamNumbers} = stream;
        const rowSpan = classes.length;
        const streamText = streamNumbers.join(' & ');
        // Render row for this stream
        return (
          <>
            {classes.map((cls, idx) => {
              const {
                //  description,
                day,
                start,
                finish,
                weeks,
                // locations
              } = cls;
              const isOnTimetable = cls.codes.some(code => currentCodes.includes(code));
              return (
                <StreamClassInfoRow
                  odd={streamIndex % 2 !== 0}
                  firstRow={idx === 0}
                  lastRow={idx === rowSpan - 1}
                  highlight={isOnTimetable}
                  color={color}
                  onClick={() => {
                    if (!currentStreamNumbers.length) {
                      return;
                    }
                    moveStream(subjectCode, type, currentStreamNumbers[0], streamNumbers[0]);
                  }}
                >
                  {idx === 0 && <td rowSpan={rowSpan}>{streamText}</td>}
                  <td>{daysOfWeek[day]}</td>
                  <td>{timeIntToString(start)}</td>
                  <td>{timeIntToString(finish)}</td>
                  <td>{weeks.length}</td>
                </StreamClassInfoRow>
              );
            })}
          </>
        );
      })}
    </InfoTable>
  );
}
