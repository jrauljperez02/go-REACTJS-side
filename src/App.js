import React from 'react'
import LoginPage from './pages/LoginPage';

import {  Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';
import OwnProfile from './pages/OwnProfile';
import Home from './pages/Home'
import UserProfile from './pages/UserProfile';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='create-user' element = {<CreateUserPage/>} />
        <Route path='/me/' element = {<OwnProfile/>}/>
        <Route path='/' element = {<Home/>} />
        <Route path='/user/:username/' element = {<UserProfile/>} />
      </Routes>
    </div>
  )
}

export default App