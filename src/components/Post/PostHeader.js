import React,{useContext} from 'react'
import UserContext from '../../context/UserContext';

const PostHeader = (props) => {

    const {me, allUsers} = useContext(UserContext);
    const {user} = props;

  return (
    <div className="timeline-header">
        {me && 
            <React.Fragment>
                <span className="userimage"><img src={allUsers[user].profile_picture} alt=""/></span>
                <span className="username post-username">{allUsers[user].name}</span>
            </React.Fragment>    
        }

        <span className="pull-right text-muted">18 Views</span>
    </div>
  )
}

export default PostHeader