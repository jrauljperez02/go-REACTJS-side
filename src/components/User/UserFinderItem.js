import React from 'react'

const UserFinderItem = (props) => {

  const { name, username, gender, profile_picture} = props.data;

  return (
    <div className='user-finder-item'>
      <img src = {profile_picture} alt='' />

      <div className='user-finder-item-text'>
        <p>{name}</p>
        <p>{username}</p>
        <p>{gender}</p>
      </div>
    </div>
  )
}

export default UserFinderItem