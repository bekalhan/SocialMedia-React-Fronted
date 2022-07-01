import React from 'react'
import './Home.css';
import ProfileSide from '../../components/Profile/Profile';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';

function Home() {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
  )
}

export default Home