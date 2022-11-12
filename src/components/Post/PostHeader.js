import React,{useContext} from 'react'
import AuthContext from '../../context/AuthContext'

const PostHeader = () => {

    const {me} = useContext(AuthContext)

  return (
    <div className="timeline-header">
        {me && 
            <React.Fragment>
                <span className="userimage"><img src={me.profile_picture} alt=""/></span>
                <span className="username post-username">{me.name}</span>
            </React.Fragment>    
        }

        <span className="pull-right text-muted">18 Views</span>
    </div>
  )
}

export default PostHeader