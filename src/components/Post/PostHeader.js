import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const PostHeader = (props) => {

    const {allUsers} = useContext(UserContext);
    const {user} = props;
    
  return (
    <div className="timeline-header">
      {!allUsers ? null : (
        <Link to = {`/user/${allUsers[user].username}/`}>
          {(allUsers && user) ? <span className="userimage"><img src={allUsers[user].profile_picture} alt=""/></span>: null}
          {(allUsers && user) ? <span className="username post-username">{allUsers[user].name}</span>: null}
      </Link>    
      )}

      
        <span className="pull-right text-muted">18 Views</span>
    </div>
  )
}

export default PostHeader