import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'

const CommentBar = () => {

  const {me} = useContext(UserContext)

  return (
    <div className="timeline-comment-box">
      {me && <div className="user"><img src={me.profile_picture} alt='img'/></div>}
      <div className="input">
        <form>
          <div style={{display: 'flex'}}>
            <input type="text" className="form-control rounded-corner" placeholder="Write a comment..."/>
            <button className="btn btn-dark">Comment</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CommentBar