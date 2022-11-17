import React from 'react'
import CreatePost from './CreatePost'
import Post from '../Post/Post'

const Posts = (props) => {

   const {data} = props;
   
  return (
    <div className="profile-content">
       <div className="tab-content p-0">
          <div className="tab-pane fade active show" id="profile-post">
          {window.location.href.includes('user') ? null:  <CreatePost/>}
             <ul className="timeline">
               {data === null ? null: data.map(post => <Post post = {post} key = {post.id}/>)}
             </ul>
          </div>
       </div>
    </div>
  )
}

export default Posts