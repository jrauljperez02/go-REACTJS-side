import React from 'react'
import LoginPage from './pages/LoginPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='create-user' element = {<CreateUserPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App