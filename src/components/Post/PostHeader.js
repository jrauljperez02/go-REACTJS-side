import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import OptionsPostButton from './buttons/OptionsPostButton';

const PostHeader = (props) => {

    const {allUsers} = useContext(UserContext);
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
          {(allUsers && user) ? <span className="userimage"><img src={allUsers[user].profile_picture} alt=""/></span>: null}
          {(allUsers && user) ? <span className="username post-username">{allUsers[user].name}</span>: null}
      </Link>    
      )}

      <OptionsPostButton postId = {id}/>
        
    </div>
  )
}

export default PostHeader