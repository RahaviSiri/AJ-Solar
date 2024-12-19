import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Solution from './Pages/Solution'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Residential from './Pages/Residential'
import Commercial from './Pages/Commercial'
import Installation from './Pages/Installation'
import Consultation from './Pages/Consultation'

const App = () => {
  return (
    // className = "px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]"
    <div>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/solution' element = {<Solution/>} />
        <Route path = '/residential' element = {<Residential/>} />
        <Route path = '/commercial' element = {<Commercial/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/installation' element = {<Installation/>} />
        <Route path = '/consultation' element = {<Consultation/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App