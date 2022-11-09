import React, {useContext} from 'react'
import '../../styles/MainHeader.scss'

import {AiOutlineSearch} from 'react-icons/ai'
import UserInput from '../UserInput'
import AuthContext from '../../context/AuthContext'


const MainHeader = () => {

  const {logoutUser} = useContext(AuthContext)

  return (
    <div className='header'>
      <div className='header-left'>
        <h1>Go</h1>

        <div className='header-left-finder'>
          <UserInput/>
        </div>
      </div>
   
      <nav>
        <ul>
          <li><AiOutlineSearch/></li>
          <li>Feed</li>
          <li>Profile</li>
          <button onClick={logoutUser}>Logout</button>
        </ul>
      </nav>
  </div>
  )
}

export default MainHeader