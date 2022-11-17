import React from 'react'

const UserFinderItem = (props) => {

  const { name, username, gender, profile_picture} = props.data;
  console.log(profile_picture)

  return (
    <div className='user-finder-item'>
      <img src = {profile_picture === null ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png': profile_picture} alt='' />

      <div className='user-finder-item-text'>
        <p>{name}</p>
        <p>{username}</p>
        <p>{gender}</p>
      </div>
    </div>
  )
}

export default UserFinderItem