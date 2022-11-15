import React from 'react'
import LoginPage from './pages/LoginPage';

import {  Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';
import  UserProfilePage from './pages/UserProfilePage'
import Home from './pages/Home'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='create-user' element = {<CreateUserPage/>} />
        <Route path='/me/' element = {<UserProfilePage/>}/>
        <Route path='/' element = {<Home/>} />
      </Routes>
    </div>
  )
}

export default App