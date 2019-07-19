import styled from "styled-components";

export default styled.div`
  $opacity: 0.75;

  .reserved-event {
    background-color: gray;
    border: none;
    font-size: 20px;
  }
  // Removes the yellow background highlight for the current day
  .fc-today {
    background-color: inherit !important;
  }

  .fc-slats td,
  .fc-time-grid td {
    height: 2.25em !important;

    @media screen and (min-width: 960px) {
      height: 2.1em !important;
    }
  }
  .fc-view {
    z-index: 0;
    table {
      z-index: 0;
    }
  }

  .lookahead-event-wrapper {
    font-family: Helvetica, Tahoma, Geneva, Verdana, sans-serif;
    color: #262628; //text color
    border-radius: 2px;
    border: 0;
    padding: 2px;
    margin-left: -2px;
    margin-right: -2px;
    display: flex;
    flex-direction: column;
    font-weight: 400;

    &:hover {
      color: #181616;
    }

    .fc-time {
      font-size: 7px;
    }

    .fc-title {
      font-weight: bold;
      font-size: 9px;
      padding-top: 1px;
    }

    .fc-desc {
      margin-top: auto;
      font-size: 8px;
    }

    .fc-code {
      margin-top: auto;
      font-size: 7.5px;
    }

    .event-icon {
      opacity: $opacity;
      position: absolute;
      right: 3px;
      top: 4px;
      font-size: 7px;
    }

    .fc-type {
      opacity: $opacity;
      position: absolute;
      top: 2px;
      right: 14px;
      font-size: 6.5px;
    }

    .fc-loc {
      opacity: $opacity;
      position: absolute;
      bottom: 2px;
      right: 2px;
      font-size: 8px;
    }

    .bottom-wrapper {
      margin-top: auto;
    }
  }

  @media (min-width: 480px) {
    .lookahead-event-wrapper {
      margin-right: -3px;
      padding: 3px;

      .fc-time {
        font-size: 10px;
      }

      .fc-type {
        font-size: 8px;
        top: 4px;
      }

      .event-icon {
        top: 5px;
      }

      .fc-title {
        font-size: 10.5px;
        line-height: 1.2em;
      }

      .fc-desc {
        font-size: 10.5px;
        line-height: 1.1em;
        padding-bottom: 2px;
      }

      .fc-loc {
        bottom: 3px;
        right: 4px;
      }

      .fc-code {
        font-size: 8.5px;
      }
    }
  }

  @media (min-width: 768px) {
    .lookahead-event-wrapper {
      margin-right: -5px;
      padding: 4px;

      .fc-title {
        font-size: 12px;
      }

      .fc-desc {
        font-size: 11px;
      }

      .fc-loc {
        font-size: 9px;
      }

      .fc-code {
        font-size: 10px;
      }
    }
  }

  @media (min-width: 960px) {
    .lookahead-event-wrapper {
      margin-left: -2px;
      margin-right: -3px;
      padding: 4px;

      .fc-time {
        font-size: 8px;
      }

      .fc-type {
        top: 4px;
        font-size: 8px;
      }

      .event-icon {
        font-size: 7.5px;
        top: 5px;
      }

      .fc-title {
        font-size: 10.5px;
      }

      .fc-desc {
        font-size: 10px;
      }

      .fc-code {
        font-size: 9px;
      }

      .fc-loc {
        font-size: 8px;
      }
    }
  }

  @media (min-width: 1200px) {
    .lookahead-event-wrapper {
      font-size: 10px;
      margin-right: -5px;

      .fc-title {
        font-size: 11.5px;
        padding-top: 2px;
      }

      .fc-type {
        top: 4px;
        font-size: 9px;
      }

      .fc-desc {
        font-size: 11px;
      }

      .event-icon {
        top: 6px;
        font-size: 8px;
      }

      .fc-loc,
      .fc-time {
        font-size: 10px;
      }

      .fc-loc {
        right: 5px;
      }
    }
  }
`;

// @media (max-width: 500px) {
//   .lookahead-event-wrapper {
//     margin-right: -2px;

//     .fc-title {
//       font-size: 9px;
//       padding-top: 5px;
//     }

//     .fc-type {
//       top: 0px;
//     }

//     .event-icon {
//       font-size: 6px;
//     }
//   }
// }
// @media (min-width: 1800px) {

//   .lookahead-event-wrapper {
//     font-size: 10px;
//     margin-right: -10px;

//     .fc-time {
//       font-size: 12px;
//     }

//     .fc-title {
//       font-size: 12px;
//     }

//     .fc-desc {
//       font-size: 12px;
//     }

//     .event-icon {
//       font-size: 8px;
//     }
//   }
// }
