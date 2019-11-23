import {
  NotificationContent,
  NotificationHeader,
  NotificationWrapper
} from "../Notifications/NotificationStyles";

import Notifications from "../Notifications/Notifications";
import Optimisations from "../Optimisations/Optimisations";
import OptimiseButton from "../Optimisations/OptimiseButton/OptimiseButton";
import React from "react";
import SubjectInfo from "./SubjectInfo/SubjectInfo";
import SubjectSelect from "./SubjectSelect/SubjectSelect";
import Subjects from "../SubjectItem/Subjects";
import TimeRestrictMsg from "./TimeRestrictMsg/TimeRestrictMsg";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const viewSubject = useSelector(state => state.viewSubject);
  const optimiser = useSelector(state => state.optimiser);
  const { failed } = optimiser;
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
      <TimeRestrictMsg/>
    </>
  );
}
