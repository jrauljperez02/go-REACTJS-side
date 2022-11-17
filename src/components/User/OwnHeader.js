import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
import Navbar from './Navbar'

import default_profile_picture from '../../images/default_profile_picture.jpg'

const OwnHeader = () => {

    const {me} = useContext(UserContext)

  return (
    <div id="content" className="content content-full-width">
            {!me ? null:  (
                <div className="profile">
                    <div className="profile-header">
                        <div className="profile-header-cover"></div>
                            <div className="profile-header-content">
                                <div className="profile-header-img">
                                    <img src={me.profile_picture === null ? default_profile_picture: me.profile_picture} alt=""/>
                                </div>
                                <div className="profile-header-info">
                                    <div style={{display: 'flex',alignItems: 'center'}}>
                                        <h4 className="m-t-10 m-b-5">{me.name}</h4>
                                        {me.is_online && <h4 style={{marginLeft: 20, fontSize: 12}}> 🟢</h4>}
                                    </div>
        
                                    <p className="m-b-10">{me.username} </p>
                                    <button className='btn btn-outline-light'>Editar perfil</button>
                                    
                                </div>
                            </div>
                        <Navbar/>
                    </div>
                </div>
            )}
        </div>
  )
}

export default OwnHeader