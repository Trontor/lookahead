import React, {useState} from 'react';
import {DeliveryButton} from './DeliveryModeButtonStyles';

import {setdeliveryPreference} from '../../../redux/actions/optimisationsActions';
import {useDispatch, useSelector} from 'react-redux';

export default function DeliveryModeButton(props) {
  const dispatch = useDispatch();
  const [activatedA, setActivatedA] = useState(true);
  const [activatedB, setActivatedB] = useState(false);
  const [activatedC, setActivatedC] = useState(false);
  const stateVars = {
    any: {activated: activatedA, setActivated: setActivatedA},
    inPerson: {activated: activatedB, setActivated: setActivatedB},
    online: {activated: activatedC, setActivated: setActivatedC},
  };

  const handleClick = e => {
    const oldActive = stateVars[e].activated;

    //disable the buttons that was not the one that was pressed
    for (const [key, value] of Object.entries(stateVars)) {
      console.log('key', key);
      if (key === e) {
        stateVars[key].setActivated(!oldActive);
      } else {
        stateVars[key].setActivated(false);
      }
    }
    if (!oldActive) {
      dispatch(setdeliveryPreference(e));
    } else {
      //defaulting to any, if a button is depressed
      stateVars['any'].setActivated(true);
      dispatch(setdeliveryPreference('any'));
    }
  };

  const deliveryModes = [
    {key: 'any', value: 'Any'},
    {key: 'inPerson', value: 'In-Person'},
    {key: 'online', value: 'Online'},
  ];

  return (
    <div>
      {deliveryModes.map(mode => (
        <DeliveryButton
          key={mode.key}
          activated={stateVars[mode.key].activated}
          onClick={() => handleClick(mode.key)}
        >
          {mode.value}
        </DeliveryButton>
      ))}
    </div>
  );
}
