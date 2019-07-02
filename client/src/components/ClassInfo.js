import React from "react";

export default function ClassInfo(props) {
  const { _mandatoryClasses, _regularClasses, _streamContainers } = props.data;

  return (
    <ul>
      {/* {_mandatoryClasses &&
        _mandatoryClasses.map(cls => {
          return <li>{cls.description}</li>;
        })}
      {_regularClasses.map(cls => {
        return <li>{cls.description}</li>;
      })}
      Streams:
      {_streamContainers.map(container => {
        return <li>{container.type}</li>;
      })} */}
    </ul>
  );
}
