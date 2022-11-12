import React, {useState, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/create-post.scss'
import AddPostModal from './User/Modal/AddPost'

const CreatePost = () => {

  const [addModalShow, setAddModalShow] = useState(false)
  let addModalClose=()=>setAddModalShow(false);

  const {me} = useContext(AuthContext)

  return (
    <div className='create-post'>

        <div onClick={()=>setAddModalShow(true)} className='create-post-section'>

          <div className='create-post-input'>
            {me && <img alt='' src = {me.profile_picture} />}
            
            <input placeholder="What's on your mind?"/>
          </div>

          <div className='cretea-post-buttons'>
            <button className="btn btn-dark">Create a post</button>
          </div>
        </div>

        <AddPostModal
          show = {addModalShow}
          onHide = {addModalClose}
        />

    </div>
  )
}

export default CreatePost