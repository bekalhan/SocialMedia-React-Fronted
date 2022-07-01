import React from 'react';
import profilePhoto from '../../img/profile.jpg';
import cover from '../../img/cover.jpg';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={cover}></img>
            <img src={profilePhoto}></img>
        </div>
        <div className='ProfileName'>
            <span>Berat Kalhan</span>
            <span>Junior Web Developer</span>
        </div>
        <div className='followStatus'>
            <hr />
            <div>
                <div className='follow'>
                    <span>0</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1M</span>
                    <span>Followers</span>
                </div>

                </div>
                <hr></hr>
        </div>
        <span>My Profile</span>

    </div>
  )
}

export default ProfileCard