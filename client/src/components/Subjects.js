import React from "react";
import { removeSubject } from "../redux/actions/subjectActions";
import { useSelector, useDispatch } from "react-redux";
import ClassInfo from "./ClassInfo";
function Subjects() {
  const subjects = useSelector(state => state.subjects);
  const dispatch = useDispatch();
  if (!subjects) {
    return <div>No subjects...</div>;
  }
  return (
    <ol>
      {Object.keys(subjects).map(code => {
        const { name, loading, data } = subjects[code];
        console.log(subjects[code]);
        return (
          <li onClick={() => dispatch(removeSubject(code))} key={code}>
            Code: {code}, <br />
            Name: {name},<br /> Loading:{" "}
            {loading ? "ya" : <ClassInfo data={data} />}
          </li>
        );
      })}
    </ol>
  );
}

export default Subjects;
