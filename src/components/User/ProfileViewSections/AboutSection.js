import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext'
import useApi from '../../../hooks/useApi'
import '../../../styles/About-section.scss'
import {DOMAIN} from '../../../utils/domain'


const AboutSection = () => {

  const {authTokens} = useContext(AuthContext)

  const {data} = useApi( {
    url: DOMAIN + '/api/user/users/',
    access: authTokens.access,
  })
  
  return (
    <div className='container about'>
      <div className='left'>
        <div className='friends-section'>


          <div className='friends-container-text'>
            <h4>Friends</h4>
            <button className='btn btn-outline-dark'>See all friends</button>
          </div>

          <div className='friends-container-images'>
            {!data ? null: (
              data.map(friend => (
                <Link to = {`/user/${friend.username}/`}  key = {friend.id}t>
                  <img src= {friend.profile_picture} alt = '' />
                  <p>{friend.name}</p>
                </Link>
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