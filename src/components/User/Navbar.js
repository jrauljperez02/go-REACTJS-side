import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {navbarActions} from '../../store/navbar-slice'


const Navbar = () => {


  const dispatch = useDispatch()

  const showPostsHandler = () => {
    dispatch(navbarActions.openPostsSection())
  }
  const showAboutHandler = () => {
    dispatch(navbarActions.openAboutSection())
  }
  const showPhotosHandler = () => {
    dispatch(navbarActions.openPhotosSection())
  }

  const showVideosSection = () => {
    dispatch(navbarActions.openVideoSection())
  }


  const showPosts = useSelector(state => state.navbar.showPostsSection);
  const showAbout = useSelector(state => state.navbar.showAboutSection)
  const showPhotos = useSelector(state => state.navbar.showPhotosSection)
  const showVideos = useSelector(state => state.navbar.showVideosSection)


  return (
    <ul className="profile-header-tab nav nav-tabs">

      <li className='nav-item'>
        <button className = {showPosts ? 'nav-link active': 'nav-link'} onClick={showPostsHandler}>POSTS</button>
      </li>
      <li className='nav-item'>
        <button className = {showAbout ? 'nav-link active': 'nav-link'} onClick={showAboutHandler}>ABOUT</button>
      </li>
      <li className='nav-item'>
        <button className = {showPhotos ? 'nav-link active': 'nav-link'} onClick={showPhotosHandler}>PHOTOS</button>
      </li>
      <li className='nav-item'>
        <button className = {showVideos ? 'nav-link active': 'nav-link'} onClick={showVideosSection}>VIDEOS</button>
      </li>
    </ul>
  )
}

export default Navbar