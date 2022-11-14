import React, {useContext, useEffect, useState} from 'react'
import Posts from '../components/User/ProfileViewSections/Posts';
import '../styles/UserProfilePage.css'
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
    const [data, setData] = useState([])

    const {authTokens,inputNav } = useContext(AuthContext)

    useEffect(() => {
        const fetchUsers = async(e) => {
            try{
                const response = await fetch(DOMAIN + `/api/user/users/?name__icontains=${inputNav}`,{
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Authorization' : `Bearer ${authTokens.access}`,
                    },
                })
                if(!response.ok){
                    console.log(response);
                }
                const JSONresponse = await response.json()
                setData(JSONresponse)
            }catch(error){
                console.log(error)
            }
        }


        fetchUsers();
    },[inputNav])



    return (
    <div>
        <MainHeader/>
       {(data && inputNav.length > 2)  ?  <UserFinderList users = {data} />: null}
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