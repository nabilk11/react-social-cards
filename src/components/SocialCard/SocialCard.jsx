import React from 'react';
import Location from '../Location/Location';

import './socialcard.css';

export const SocialCard = ({ userData }) => {
  return (
    <div className='card'>
       <div className="card_title"> {userData.name.first} {userData.name.last}</div>
       <div className="card_body">
           <Location location={userData.location} />
           <div className="card_image"><img src={userData.picture.medium} alt="user_img" /></div>
       </div>


    </div>
  )
}
