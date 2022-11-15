import React, {useContext} from 'react'

import PostContext from '../context/PostContext';
import Layout from '../components/Layout/Layout'
import UserHeaderProfile from '../components/User/UserHeaderProfile'

import { useSelector } from 'react-redux';


import AboutSection from '../components/User/ProfileViewSections/AboutSection';
import PhotosSection from '../components/User/ProfileViewSections/PhotosSection';
import VideosSection from '../components/User/ProfileViewSections/VideosSection';
import Posts from '../components/Post/Posts';


const UserProfile = () => {

  const showPosts = useSelector(state => state.navbar.showPostsSection);
  const showAbout = useSelector(state => state.navbar.showAboutSection);
  const showPhotos = useSelector(state => state.navbar.showPhotosSection);
  const showVideos = useSelector(state => state.navbar.showVideosSection);
  
  const {allPosts} = useContext(PostContext)

  return (
    <Layout>
        <div className='container'>
          <div className='col-md-12'>
              <UserHeaderProfile/>


              {showPosts && <Posts data = {allPosts}/>}
              {showAbout && <AboutSection/>}
              {showPhotos && <PhotosSection/>}
              {showVideos && <VideosSection/>}
          </div>
        </div>
    </Layout>
  )
}

export default UserProfile