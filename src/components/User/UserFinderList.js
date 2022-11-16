import React from 'react'
import UserFinderItem from './UserFinderItem';
import '../../styles/UserFinder.scss'

const UserFinderList = (props) => {

  const {users} = props;

  return (
    <div className='user-finder-list'>
      {users.map(user => (
        <UserFinderItem key = {user.id} data = {user}/>
      ))}
    </div>
  )
}

export default UserFinderList