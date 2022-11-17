import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'

import default_profile_picture from '../../images/default_profile_picture.jpg'

const CommentBar = () => {

  const {me} = useContext(UserContext)

  return (
    <div className="timeline-comment-box">
      {me && <div className="user"><img src={me.profile_picture === null ? default_profile_picture: me.profile_picture} alt='img'/></div>}
      <div className="input">
        <form>
          <div style={{display: 'flex'}}>
            <input type="text" className="form-control rounded-corner" placeholder="Escribe un comentario..."/>
            <button className="btn btn-dark">Comenta</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CommentBar