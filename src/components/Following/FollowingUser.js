import React from 'react'
import { Link } from 'react-router-dom';

const FollowingUser = (props) => {

    const {data} = props;

  return (
    <Link to = {`/user/${data.username}/`} className='following-user' style={{marginBottom: 10}}>
      <img src = {data.profile_picture} alt=''/>

      <div className='following-user-text'>
        <p>{data.name}</p>
        <p>{data.username}</p>
      </div>
    </Link>
  )
}

export default FollowingUser