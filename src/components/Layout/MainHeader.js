import React, {useContext} from 'react'
import '../../styles/MainHeader.scss'

import { Link } from 'react-router-dom'

import {AiOutlineSearch} from 'react-icons/ai'
import UserInput from '../UserInput'
import AuthContext from '../../context/AuthContext'
import UserContext from '../../context/UserContext'


const MainHeader = () => {

  const {logoutUser} = useContext(AuthContext)
  const {me} = useContext(UserContext)

  return (
    <div className='header'>
      <div className='header-left'>
        <Link to = '/'>Go</Link>

        <div className='header-left-finder'>
          <UserInput/>
        </div>
      </div>
   
      <nav>
        <ul>
          <li><AiOutlineSearch/></li>
          <Link to={'/'}>Feed</Link>
          <Link to={`/profile/${me.username}/`}>Profile</Link>
          <button onClick={logoutUser} className = 'btn btn-outline-light'>Logout</button>
        </ul>
      </nav>
  </div>
  )
}

export default MainHeader