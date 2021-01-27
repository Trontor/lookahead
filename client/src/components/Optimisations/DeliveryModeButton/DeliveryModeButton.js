import React, {useState} from 'react';
import {DeliveryButton} from './DeliveryModeButtonStyles';

import {
  setDeliveryPref
} from '../../../redux/actions/optimisationsActions';
import {useDispatch, useSelector} from 'react-redux';

export default function DeliveryModeButton(props) {
  const dispatch = useDispatch();
  const [activatedA, setActivatedA] = useState(true);
  const [activatedB, setActivatedB] = useState(false);
  const [activatedC, setActivatedC] = useState(false);

  const {onToggled} = props;
  const handleClick = e => {
    console.log("!")

    switch (e) {
      case "any": {
        const newActive = !activatedA;
        setActivatedA(newActive);
        setActivatedB(false);
        setActivatedC(false);
        dispatch(setDeliveryPref(e))
        break;
      }
      case 'inPerson': {
        setActivatedA(false);
        const newActive = !activatedB;
        setActivatedB(newActive);
        setActivatedC(false);
        break;
      }
      case 'online': {
        setActivatedA(false);
        setActivatedB(false);
        const newActive = !activatedC;
        setActivatedC(newActive);
        break;
      }
    }
    dispatch(setDeliveryPref(e))
  };
  return (
      <div>
        <DeliveryButton key='A' activated={activatedA} onClick={() => handleClick('any')}>
          Any
        </DeliveryButton>
        <DeliveryButton key='B' activated={activatedB} onClick={() => handleClick('inPerson')}>
          In Person
        </DeliveryButton>
        <DeliveryButton key='C' activated={activatedC} onClick={() => handleClick('online')}>
          Online
        </DeliveryButton>
      </div>
  );
}
