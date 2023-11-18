import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutsUs from './pages/AboutsUs'
import { Event } from './pages/Event'
import { Services } from './pages/Services'

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About-Us' element={<AboutsUs />} />
            <Route exact path='/Event' element={<Event />} />
            <Route exact path='/Services'element={<Services/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App