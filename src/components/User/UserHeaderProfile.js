import React, {useContext} from 'react'
import Navbar from './Navbar'
import UserContext from '../../context/UserContext'

const UserHeaderProfile = () => {

    const {me} = useContext(UserContext);

    

  return (
    <div id="content" className="content content-full-width">
        {me && (
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-header-cover"></div>
                        <div className="profile-header-content">
                            <div className="profile-header-img">
                                <img src={me.profile_picture} alt=""/>
                            </div>
                            <div className="profile-header-info">
                                <h4 className="m-t-10 m-b-5">{me.name}</h4>
                                <p className="m-b-10">{me.username}</p>
                                <button className='btn btn-outline-light'>Edit profile</button>
                            </div>
                        </div>
                    <Navbar/>
                </div>
            </div>
        )}
        
    </div>
  )
}

export default UserHeaderProfile