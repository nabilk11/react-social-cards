import React from 'react';
import './phoneNumber.css';

export default function PhoneNumber({ number, type }) {
  return (
    <div className='phoneNumber'>
        <p>{type}: {number}</p>

    </div>
  )
}
