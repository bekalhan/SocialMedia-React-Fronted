import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';

function Profile() {
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
    
  )
}

export default Profile