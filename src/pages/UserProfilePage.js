import React, {useContext, useEffect, useState} from 'react'
import Posts from '../components/Post/Posts';
import '../styles/UserProfilePage.css'
import { DOMAIN } from '../utils/domain';
import AuthContext from '../context/AuthContext';
import InputContext from '../context/InputContext';

import UserFinderList from '../components/User/UserFinderList'

import { useSelector } from 'react-redux';
import useApi from '../hooks/useApi';
import AboutSection from '../components/User/ProfileViewSections/AboutSection';
import PhotosSection from '../components/User/ProfileViewSections/PhotosSection';
import VideosSection from '../components/User/ProfileViewSections/VideosSection';
import UserHeaderProfile from '../components/User/UserHeaderProfile';

import Layout from '../components/Layout/Layout';

const UserProfilePage = () => {

    const showPosts = useSelector(state => state.navbar.showPostsSection);
    const showAbout = useSelector(state => state.navbar.showAboutSection)
    const showPhotos = useSelector(state => state.navbar.showPhotosSection)
    const showVideos = useSelector(state => state.navbar.showVideosSection)
    const [users, setUsers] = useState([])

    const {authTokens } = useContext(AuthContext)
    const {inputNav} = useContext(InputContext)

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
                setUsers(JSONresponse)
            }catch(error){
                console.log(error)
            }
        }


        fetchUsers();
    },[inputNav, authTokens.access])


    const {data} = useApi({
        url : DOMAIN + '/api/post/posts/',
        access: authTokens.access,
        method: 'GET',
    })


    return (
    <Layout>
       {(data && inputNav.length > 3)  ?  <UserFinderList users = {users} />: null}
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <UserHeaderProfile/>
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

export default UserProfilePage