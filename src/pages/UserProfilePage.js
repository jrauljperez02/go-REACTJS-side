import React, {useContext} from 'react'
import Posts from '../components/User/ProfileViewSections/Posts';
import '../styles/UserProfilePage.css'
import useApi from '../hooks/useApi';
import { DOMAIN } from '../utils/domain';
import AuthContext from '../context/AuthContext';


import MainHeader from '../components/Layout/MainHeader';

import UserFinderList from '../components/User/UserFinderList'

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


    const {authTokens} = useContext(AuthContext)

    const {data} = useApi({
        url: DOMAIN + `/api/user/users/?name__icontains=${''}`,
        access: authTokens.access
    })
    

    return (
    <div>
        <MainHeader/>
       {data ?  <UserFinderList users = {data} />: null}
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