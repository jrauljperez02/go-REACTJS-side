import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
import FollowingUser from './FollowingUser'
import '../../styles/Following.scss'

const Following = () => {

  const {allUsersAsArray} = useContext(UserContext)

  return (
    <div className='following'>
        <h1 style={{marginBottom: 20}}>Following</h1>
        
        {allUsersAsArray.map(user => <FollowingUser 
          data = {user}
          key = {user.id}/>)}
    </div>
  )
}

export default Following