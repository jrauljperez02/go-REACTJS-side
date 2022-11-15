import React from 'react'

const FollowingUser = (props) => {

    const {data} = props;

  return (
    <div className='user-found-item' style={{marginBottom: 10}}>
      <img src = {data.profile_picture} alt=''/>

      <div className='user-found-item-text'>
        <p>{data.name}</p>
        <p>{data.username}</p>
      </div>
    </div>
  )
}

export default FollowingUser