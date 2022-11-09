import React, {useContext, useEffect, useState} from 'react'
import Posts from '../components/User/ProfileViewSections/Posts';
import AuthContext from '../context/AuthContext'
import Navbar from '../components/User/Navbar';
import '../styles/UserProfilePage.css'
import { DOMAIN } from '../utils/domain'

import MainHeader from '../components/Layout/MainHeader';

import UserFinderList from '../components/User/UserFinderList'
import { DUMMY_USERS } from '../utils/dummyUsers';

import { useSelector } from 'react-redux';
import AboutSection from '../components/User/ProfileViewSections/AboutSection';
import PhotosSection from '../components/User/ProfileViewSections/PhotosSection';
import VideosSection from '../components/User/ProfileViewSections/VideosSection';

const UserProfilePage = () => {

    const { authTokens} = useContext(AuthContext);
    const [user, setUser] = useState(null)


    const showPosts = useSelector(state => state.navbar.showPostsSection);
    const showAbout = useSelector(state => state.navbar.showAboutSection)
    const showPhotos = useSelector(state => state.navbar.showPhotosSection)
    const showVideos = useSelector(state => state.navbar.showVideosSection)


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
    <div>
        <MainHeader/>
       {false && <UserFinderList users = {DUMMY_USERS} />}
        <div className="container">
        {user && 
            <div className="row">
                <div className="col-md-12">
                    <div id="content" className="content content-full-width">
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
                    </div>
                    {showPosts && <Posts/>}
                    {showAbout && <AboutSection/>}
                    {showPhotos && <PhotosSection/>}
                    {showVideos && <VideosSection/>}
                </div>
            </div>
        }
    </div>

    </div>
  )
}

export default UserProfilePage