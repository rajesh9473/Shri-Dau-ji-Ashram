import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutsUs from './pages/AboutsUs'
import { Event } from './pages/Event'
import { Services } from './pages/Services'
import { Shankalp } from './pages/Shankalp'
import Profile from './pages/Profile'
import PublicPages from './pages/PublicPages'
import PrivatePages from './pages/PrivatePages'
import Menu from './pages/Menu'
import LoginX from './pages/LoginX'
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<PublicPages />} >
              <Route exact path='' element={<Home />} />
              <Route exact path='About-Us' element={<AboutsUs />} />
              <Route exact path='Event' element={<Event />} />
              <Route exact path='Shankalp' element={<Shankalp />} />
              <Route exact path='Services' element={<Services />} />

              <Route exact path='Loginx' element={<LoginX/>} />
            </Route>

            <Route exact path='/login' element={<PrivatePages />} >
              <Route path='' element={<Profile />} />
              <Route path='menu' element={<Menu />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App