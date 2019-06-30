import React from "react";
import { useSelector } from "react-redux";
function Subjects() {
  const subjects = useSelector(state => state.subjects);
  if (!subjects) {
    return <div>No subjects...</div>;
  }
  console.log(subjects);
  return (
    <ol>
      {Object.keys(subjects).map(code => {
        const { name, loading } = subjects[code];
        return (
          <li key={code}>
            Code: {code}, Name: {name}, Loading: {loading ? "ya" : "nah"}
          </li>
        );
      })}
    </ol>
  );
}

export default Subjects;
