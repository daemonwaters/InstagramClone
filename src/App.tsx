import React from 'react'
import './App.scss'
import SignIn from './pages/SignIn/SignIn'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Inbox from './pages/Inbox/Inbox'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <React.Fragment>
      <div className="wrapper">
        <Routes>
          <Route element={<SignIn/>} path='/' />
          <Route element={<Home/>} path='/home' />
          <Route element={<Inbox/>} path='/inbox' />
          <Route element={<Profile/>} path='/profile' />
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default App
