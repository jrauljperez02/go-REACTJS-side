import React, {useContext} from 'react'
import AuthContext from '../../context/AuthContext'

const CommentBar = () => {

  const {me} = useContext(AuthContext)

  return (
    <div className="timeline-comment-box">
      {me && <div className="user"><img src={me.profile_picture} alt='img'/></div>}
      <div className="input">
        <form>
          <div className="input-group">
            <input type="text" className="form-control rounded-corner" placeholder="Write a comment..."/>
            <span className="input-group-btn p-l-10">
              <button className="btn btn-dark" type="button">Comment</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CommentBar