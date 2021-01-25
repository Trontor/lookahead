import FailedMsg from './FailedMsg/FailedMsg';
import Notifications from '../Notifications/Notifications';
import Optimisations from '../Optimisations/Optimisations';
import OptimiseButton from '../Optimisations/OptimiseButton/OptimiseButton';
import React from 'react';
import SubjectInfo from './SubjectInfo/SubjectInfo';
import SubjectSelect from './SubjectSelect/SubjectSelect';
import Subjects from '../SubjectItem/Subjects';
import {useSelector} from 'react-redux';

export default function Sidebar() {
  const viewSubject = useSelector(state => state.viewSubject);
  return (
    <>
      <Notifications />
      {/* <RegistrationCountdown /> */}
      <SubjectSelect />
      {viewSubject.viewing ? <SubjectInfo subject={viewSubject.subject} /> : <Subjects />}
      <Optimisations />
      <OptimiseButton />
      <FailedMsg />
    </>
  );
}
