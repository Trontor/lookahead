import React from "react";
import { dispatch, useSelector } from "react-redux";
import SubjectSelect from "../SubjectSelect";
import Subjects from "../SubjectItem/Subjects";
import Notifications from "../Notifications";
import Optimisations from "../Optimisations/Optimisations";
import Sponsors from "../Sponsors/Sponsors";
import OptimiseButton from "../OptimiseButton";
import RegistrationCountdown from "../RegistrationCountdown";
import SubjectInfo from "./SubjectInfo/SubjectInfo";

export default function Sidebar() {
  const viewSubject = useSelector(state => state.viewSubject);
  return (
    <>
      <Notifications />
      {/* <RegistrationCountdown /> */}
      <SubjectSelect />
      {viewSubject.viewing ? (
        <SubjectInfo subject={viewSubject.subject} />
      ) : (
        <Subjects />
      )}
      <Optimisations />
      <OptimiseButton />
    </>
  );
}
