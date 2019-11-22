import React from "react";
import { useSelector } from "react-redux";
import SubjectSelect from "./SubjectSelect/SubjectSelect";
import Subjects from "../SubjectItem/Subjects";
import Notifications from "../Notifications/Notifications";
import Optimisations from "../Optimisations/Optimisations";
import OptimiseButton from "../Optimisations/OptimiseButton/OptimiseButton";
import SubjectInfo from "./SubjectInfo/SubjectInfo";
import {
  NotificationWrapper,
  NotificationHeader,
  NotificationContent
} from "../Notifications/NotificationStyles";

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
      {failed &&
        "Sorry 🥺. We tried our best to prevent this error from showing. Something went wrong... Try making the time restriction tighter then try again. If not - hold tight. My owner has been notified!"}
    </>
  );
}
