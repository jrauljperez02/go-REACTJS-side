import React from 'react'
import UserFinderItem from './UserFinderItem';

const UserFinderList = (props) => {

  const {users} = props;

  return (
    <div className='finder'>
      {users.map(user => (
        <UserFinderItem key = {user.id} data = {user}/>
      ))}
    </div>
  )
}

export default UserFinderList