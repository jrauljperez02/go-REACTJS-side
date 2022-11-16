import React, {useContext} from 'react'
import Posts from '../components/Post/Posts';
import '../styles/UserProfilePage.scss'
import { DOMAIN } from '../utils/domain';
import AuthContext from '../context/AuthContext';


import { useSelector } from 'react-redux';
import useApi from '../hooks/useApi';
import AboutSection from '../components/User/ProfileViewSections/AboutSection';
import PhotosSection from '../components/User/ProfileViewSections/PhotosSection';
import VideosSection from '../components/User/ProfileViewSections/VideosSection';

import Layout from '../components/Layout/Layout';
import OwnHeader from '../components/User/OwnHeader';

const OwnProfile = () => {

    const showPosts = useSelector(state => state.navbar.showPostsSection);
    const showAbout = useSelector(state => state.navbar.showAboutSection)
    const showPhotos = useSelector(state => state.navbar.showPhotosSection)
    const showVideos = useSelector(state => state.navbar.showVideosSection)


    const {authTokens } = useContext(AuthContext)


    const {data} = useApi({
        url : DOMAIN + '/api/post/posts/',
        access: authTokens.access,
        method: 'GET',
    })


    return (
    <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <OwnHeader/>
                    {showPosts && <Posts data = {data}/>}
                    {showAbout && <AboutSection/>}
                    {showPhotos && <PhotosSection/>}
                    {showVideos && <VideosSection/>}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default OwnProfile