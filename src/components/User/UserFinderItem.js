import React from 'react'

const UserFinderItem = (props) => {

  const { first_name, last_name, username, gender} = props.data;

  return (
    <div className='user-found-item'>
      <img src = 'https://i.etsystatic.com/36532523/r/il/97ae46/4078306713/il_340x270.4078306713_n74s.jpg' alt='' />

      <div className='user-found-item-text'>
        <p>{first_name} {last_name}</p>
        <p>{username}</p>
        <p>{gender}</p>
      </div>
    </div>
  )
}

export default UserFinderItem