import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Exhibits from './components/Exhibits'
import Schedule from './components/Schedule'
import GuidedTours from './components/GuidedTours'
import Contact from './components/Contact'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/exhibit" element={<Exhibits/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
      <Route path="/guide" element={<GuidedTours/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
 
    
    </>
  )
}

export default App