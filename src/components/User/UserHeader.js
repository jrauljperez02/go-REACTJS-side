import React, {useContext} from 'react'
import Navbar from './Navbar'

import { frontendDomain, DOMAIN } from '../../utils/domain'

import useApi from '../../hooks/useApi'
import AuthContext from '../../context/AuthContext'

import default_profile_picture from '../../images/default_profile_picture.jpg'

const UserHeader = () => {

    const {authTokens} = useContext(AuthContext)

    const {data} = useApi({
        url: DOMAIN + `/api/user/users/?username=${window.location.href.split(`${frontendDomain}/user/`)[1].slice(0, -1)}`,
        access: authTokens.access
    })

    return (
        <div id="content" className="content content-full-width">
            {data[0] === undefined ? null:  (
                <div className="profile">
                    <div className="profile-header">
                        <div className="profile-header-cover"></div>
                            <div className="profile-header-content">
                                <div className="profile-header-img">
                                    <img src={data[0].profile_picture === null ? default_profile_picture: data[0].profile_picture} alt=""/>
                                </div>
                                <div className="profile-header-info">
                                    <div style={{display: 'flex',alignItems: 'center'}}>
                                        <h4 className="m-t-10 m-b-5">{data[0].name}</h4>
                                        <h4 style={{marginLeft: 20, fontSize: 12}}> 🟢</h4>
                                    </div>
        
                                    <p className="m-b-10">{data[0].username} </p>
                                    <button className='btn btn-success'>Seguir</button>
                                    
                                </div>
                            </div>
                        <Navbar/>
                    </div>
                </div>
            )}
        </div>
    )
  
}

export default UserHeader