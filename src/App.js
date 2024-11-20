import React from 'react'
import Home from './Pages/Home/Home.js'
import Navbar from './Pages/Navbar_sect/Navbar.js'
import Footer from './Pages/Footer/Footer.js'
import { Route, Routes } from 'react-router-dom'
import Services from './Pages/Services/services.js'
import Contact from './Pages/Contact/Contact.js'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/' element={<Home/>} />

      </Routes>
<Footer/>
    </div>
  )
}

export default App