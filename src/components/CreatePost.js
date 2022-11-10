import React, {useState} from 'react'
import '../styles/create-post.scss'
import AddPostModal from './User/Modal/AddPost'

const CreatePost = () => {

  const [addModalShow, setAddModalShow] = useState(false)
  let addModalClose=()=>setAddModalShow(false);

  return (
    <div className='create-post'>

        <div onClick={()=>setAddModalShow(true)} className='create-post-section'>

          <div className='create-post-input'>
            <img alt='' src='https://scontent.fpbc3-1.fna.fbcdn.net/v/t39.30808-6/314120072_3441539586170064_6764646014730100301_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEN1u5glTYd0h6_aRH9Xgq5CVi-vIHy838JWL68gfLzfxtd_h3TcBCRX2Kp1yQi11F0yqSJT49TyjQ_h0gHKyVB&_nc_ohc=mEiTmWyYD54AX9ZJ0j1&_nc_ht=scontent.fpbc3-1.fna&oh=00_AfA0pMkm_hgIvOVlX1oygrCAvtOB-V2O64nsr4_6YejfBQ&oe=6370D483' />
            <input placeholder="What's on your mind?"/>
          </div>

          <div className='cretea-post-buttons'>
            <button class="btn btn-primary">Create a post</button>
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