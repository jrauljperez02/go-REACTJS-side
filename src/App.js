import React from 'react'
import LoginPage from './pages/LoginPage';

import {  Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';

const App = () => {

  return (
      <Routes>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='create-user' element = {<CreateUserPage/>} />
      </Routes>

  )
}

export default App