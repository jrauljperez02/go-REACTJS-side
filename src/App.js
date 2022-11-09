import React from 'react'
import LoginPage from './pages/LoginPage';

import {  Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';
import  UserProfilePage from './pages/UserProfilePage'

const App = () => {

  return (
      <Routes>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='create-user' element = {<CreateUserPage/>} />
        <Route path='/profile/:username/' element = {<UserProfilePage/>}/>
      </Routes>
  )
}

export default App