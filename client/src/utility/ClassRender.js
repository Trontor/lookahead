import $ from 'jquery';

const SUBJECT_NAME_MINIMUM = {height: 70, width: 50};
const CLASS_LOCATION_MINIMUM = {height: 0, width: 90};
const CLASS_TYPE_MINIMUM = {height: 0, width: 120};

/**
 * Handles the rendering of a class event on the timetable viewer.
 * @param {EventApi} event The FullCalendar Event Object of relevance
 * @param {HTMLElement} el The corresponsind HTMLElement to
 */
export default function ({event, el}) {
  // Handle if background event
  if (event.rendering && event.rendering === 'background') {
    return;
  }
  // Handle if reserved event
  if (event.id === 'reserved') {
    return;
  }
  const content = $(el);
  // Size information of the current class
  const height = content.height();
  const width = content.width();
  // Class-specific information is stored in extended props
  const {subjectName, code, type, online, locations, streamNumber} = event.extendedProps;
  // HTML Element for the bottom elements (Subject Name + Code)
  const bottomWrapper = $('<div class="bottom-wrapper"/>');
  // Render subject name, e.g. "Software Modelling and Design" - if allowed
  if (height >= SUBJECT_NAME_MINIMUM.height && width >= SUBJECT_NAME_MINIMUM.width) {
    const subjectNameText = $(`<div class="fc-desc">${subjectName}</div>`);
    subjectNameText.appendTo(bottomWrapper);
  }
  // Render number of locations available - if allowed

  if (height >= CLASS_LOCATION_MINIMUM.height && width >= CLASS_LOCATION_MINIMUM.width) {
    let locationsText;
    if(!online){
      locationsText = $(
          `<div class="fc-loc">
          
         On Campus
      </div>`
      );
    }
    else {
      locationsText = $(
          `<div class="fc-loc">
          Online
        </div>`
      );
    }
    locationsText.appendTo(content);
  }

  // Render type of class text (Stream, Mandatory, Variable) - if allowed
  if (height >= CLASS_TYPE_MINIMUM.height && width >= CLASS_TYPE_MINIMUM.width) {
    const classTypeElement = $(`<div class="fc-type">${type}</div>`);
    // if its a stream, append the stream number to the text
    if (type === 'Stream') {
      // prevents JS injection
      classTypeElement.append(document.createTextNode(` #${streamNumber}`));
    }
    classTypeElement.appendTo(content);
  }
  // Render the subject code all the time
  const subjectCode = $(`<div class="fc-code">${code}</div>`);
  subjectCode.appendTo(bottomWrapper);
  // Add the bottom wrapper to the calendar element
  bottomWrapper.appendTo(content);
  // Show appropriate icon at top right
  let iconMapping = {
    Mandatory: 'lock',
    Variable: 'exchange-alt',
    Stream: 'water',
  };
  const lockElement = $(`<i class="fa fa-${iconMapping[type]} fa-fw event-icon"/i>`);
  lockElement.appendTo(content);
}
