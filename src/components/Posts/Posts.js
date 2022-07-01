import React from 'react';
import {PostsData} from '../../data/postsData';
import Post from '../Post/Post';

function Posts() {
  return (
    <div>
        {PostsData.map((post,id)=>{
            return <Post data={post} id={id} />
        })}
    </div>
  )
}

export default Posts