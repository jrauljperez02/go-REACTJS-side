import React, {useContext} from 'react'
import CreatePost from '../../CreatePost'
import AuthContext from '../../../context/AuthContext'
import Post from '../../Post/Post'
import useApi from '../../../hooks/useApi'
import { DOMAIN } from '../../../utils/domain'

const Posts = () => {

   const {authTokens} = useContext(AuthContext)

   const {data} = useApi({
      url : DOMAIN + '/api/post/posts/',
      access: authTokens.access,
      method: 'GET',
   })


  return (
    <div className="profile-content">
       <div className="tab-content p-0">
          <div className="tab-pane fade active show" id="profile-post">
          <CreatePost/>
             <ul className="timeline">
               {data === null ? null: 
                  data.map(post => <Post post = {post} key = {post.id}/>)
               }
             </ul>
          </div>
       </div>
    </div>
  )
}

export default Posts