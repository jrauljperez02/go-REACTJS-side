import React from 'react'
import Posts from '../components/User/ProfileViewSections/Posts';
import '../styles/UserProfilePage.css'


import MainHeader from '../components/Layout/MainHeader';

import UserFinderList from '../components/User/UserFinderList'
import { DUMMY_USERS } from '../utils/dummyUsers';

import { useSelector } from 'react-redux';
import AboutSection from '../components/User/ProfileViewSections/AboutSection';
import PhotosSection from '../components/User/ProfileViewSections/PhotosSection';
import VideosSection from '../components/User/ProfileViewSections/VideosSection';
import UserHeaderProfile from '../components/User/UserHeaderProfile';

const UserProfilePage = () => {

    const showPosts = useSelector(state => state.navbar.showPostsSection);
    const showAbout = useSelector(state => state.navbar.showAboutSection)
    const showPhotos = useSelector(state => state.navbar.showPhotosSection)
    const showVideos = useSelector(state => state.navbar.showVideosSection)

  return (
    <div>
        <MainHeader/>
       {false && <UserFinderList users = {DUMMY_USERS} />}
        <div className="container">
        
            <div className="row">
                <div className="col-md-12">
                    <UserHeaderProfile/>
                    
                    {showPosts && <Posts/>}
                    {showAbout && <AboutSection/>}
                    {showPhotos && <PhotosSection/>}
                    {showVideos && <VideosSection/>}
                </div>
            </div>
        
    </div>

    </div>
  )
}

export default UserProfilePage