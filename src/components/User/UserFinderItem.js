import React from 'react'

const UserFinderItem = (props) => {

  const { name, username, gender, profile_picture} = props.data;

  return (
    <div className='user-found-item'>
      <img src = {profile_picture} alt='' />

      <div className='user-found-item-text'>
        <p>{name}</p>
        <p>{username}</p>
        <p>{gender}</p>
      </div>
    </div>
  )
}

export default UserFinderItem