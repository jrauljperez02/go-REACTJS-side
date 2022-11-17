import React, {useContext} from 'react'
import UserContext from '../../../context/UserContext'
import '../../../styles/About-section.scss'

import default_profile_picture from '../../../images/default_profile_picture.jpg'
import { useNavigate } from 'react-router-dom'


const AboutSection = () => {

  const {allUsersAsArray} = useContext(UserContext)

  const navigate = useNavigate()
  
  return (
    <div className='container about'>
      <div className='left'>
        <div className='friends-section'>


          <div className='friends-container-text'>
            <h4>Friends</h4>
            <button className='btn btn-outline-dark'>See all friends</button>
          </div>

          <div className='friends-container-images'>
            {!allUsersAsArray ? null: (
              allUsersAsArray.map(friend => (
                <div onClick={() => {
                      navigate(`/user/${friend.username}/`);
                      window.location.reload(true);
                    }} key = {friend.id}t>
                  <img src= {friend.profile_picture === null ? default_profile_picture: friend.profile_picture} alt = '' />
                  <p>{friend.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      
      <div className='right'>
        <h4>About</h4>
      </div>
    </div>
  )
}

export default AboutSection