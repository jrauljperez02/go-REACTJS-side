import React, {useState, useContext} from 'react'
import UserContext from '../../context/UserContext'
import '../../styles/Create-post-section.scss'
import AddPostModal from '../modals/AddPost'

const CreatePost = () => {

  const [addModalShow, setAddModalShow] = useState(false)
  let addModalClose=()=>setAddModalShow(false);

  const {me} = useContext(UserContext)

  return (
    <div className='create-post'>

        <div onClick={()=>setAddModalShow(true)} className='create-post-section'>

          <div className='create-post-input'>
            {me && <img alt='' src = {me.profile_picture} />}
            
            <input placeholder="Cuentanos algo!"/>
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