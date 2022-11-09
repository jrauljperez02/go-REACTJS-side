import React, {useState, useContext, useEffect} from 'react'
import Navbar from './Navbar'
import {DOMAIN} from '../../utils/domain'
import AuthContext from '../../context/AuthContext'

const UserHeaderProfile = () => {

    const [user, setUser] = useState(null)
    const { authTokens} = useContext(AuthContext);

    const fetchData = async() => {
        try {
            const response = await fetch(`${DOMAIN}/api/profile/me/`, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Authorization' : `Bearer ${authTokens.access}`,
              },
            });
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            setUser(result);
          } catch (err) {
            console.log(err.message);
          }
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div id="content" className="content content-full-width">
        {user && (
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-header-cover"></div>
                        <div className="profile-header-content">
                            <div className="profile-header-img">
                                <img src="https://scontent.fpbc3-1.fna.fbcdn.net/v/t39.30808-6/314120072_3441539586170064_6764646014730100301_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEN1u5glTYd0h6_aRH9Xgq5CVi-vIHy838JWL68gfLzfxtd_h3TcBCRX2Kp1yQi11F0yqSJT49TyjQ_h0gHKyVB&_nc_ohc=mEiTmWyYD54AX9ZJ0j1&_nc_ht=scontent.fpbc3-1.fna&oh=00_AfA0pMkm_hgIvOVlX1oygrCAvtOB-V2O64nsr4_6YejfBQ&oe=6370D483" alt=""/>
                            </div>
                            <div className="profile-header-info">
                                <h4 className="m-t-10 m-b-5">{user.first_name} {user.last_name}</h4>
                                <p className="m-b-10">{user.email}</p>
                                <p className="b2">Edit Profile</p>
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