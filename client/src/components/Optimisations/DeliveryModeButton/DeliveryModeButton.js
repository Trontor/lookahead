import React, {useState} from 'react';
import {DeliveryButton} from './DeliveryModeButtonStyles';

export default function DeliveryModeButton({activated, onClick, children}) {
  return (
    <DeliveryButton activated={activated} onClick={onClick}>
      {children}
    </DeliveryButton>
  );
}
