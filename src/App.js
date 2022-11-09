import React from 'react'
import LoginPage from './pages/LoginPage';

import {  Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';
import  UserProfilePage from './pages/UserProfilePage'
import Footer from './components/Layout/Footer/Footer';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='create-user' element = {<CreateUserPage/>} />
        <Route path='/profile/:username/' element = {<UserProfilePage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App