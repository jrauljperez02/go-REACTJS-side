import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import OptionsPostButton from './buttons/OptionsPostButton';

import default_profile_picture from '../../images/default_profile_picture.jpg'

const PostHeader = (props) => {

    const {allUsers, me} = useContext(UserContext);
    const {user, id} = props;

  return (
    <div className="timeline-header" style={
        {
          display:'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      }>
      {allUsers[user] === undefined ? null : (
        <Link to = {`/user/${allUsers[user].username}/`}>
          {(allUsers && user) ? <span className="userimage"><img src={allUsers[user].profile_picture === null ? default_profile_picture: allUsers[user].profile_picture} alt=""/></span>: null}
          <div style={{display: 'flex', alignItems: 'center'}}>
            {(allUsers && user) ? <span className="username post-username">{allUsers[user].name}</span>: null}
            {(allUsers && user) ? <span style={{marginLeft: -10 ,fontSize: 7}}>{allUsers[user].is_online && '🟢'}</span>: null}
          </div>
      </Link>    
      )}

      <OptionsPostButton postId = {id} userId = {user}/>
        
    </div>
  )
}

export default PostHeader