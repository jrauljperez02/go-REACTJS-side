import React from 'react'
import { Link } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop'

import default_profile_picture from '../../images/default_profile_picture.jpg'

const FollowingUser = (props) => {

    const {data} = props;

  return (
    <Link 
      to = {`/user/${data.username}/`} 
      className='following-user' style={{marginBottom: 10}}
      onClick = {scrollToTop}
      >
      <img src = {data.profile_picture === null ? default_profile_picture : data.profile_picture} alt=''/>

      <div className='following-user-text'>
        <p>{data.name}</p>
        <p>{data.username}</p>
      </div>
    </Link>
  )
}

export default FollowingUser