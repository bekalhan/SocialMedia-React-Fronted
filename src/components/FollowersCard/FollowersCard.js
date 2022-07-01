import React from 'react';
import {Followers} from '../../data/followersData';
import './FollowersCard.css'

function FollowersCard() {
  return (
    <div className='FollowersCard'>
        <h3>who is following you</h3>

        {Followers.map((follower,id)=>{
            return (
                <div className="FollowersCard">
                <h3>Who is following you</h3>
        
                {Followers. map((follower, id)=>{
                    return(
                        <div className="follower">
                            <div>
                                <img src={follower.img} alt="" className='followerImage' />
                                <div className="name">
                                    <span>{follower.name}</span>
                                    <span>@{follower.username}</span>
                                </div>
                            </div>
                            <button className='button fc-button'>
                                Follow
                            </button>
                        </div>
                    )
                })}
            </div>
            )
        })}
    </div>
  )
}

export default FollowersCard