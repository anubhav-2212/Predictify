import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {LandingPage} from './Pages/LandingPage.jsx'

import {Login} from './Pages/Login'
import {HomePage} from './Pages/HomePage.jsx'
import Navbar from './components/Navbar.jsx'
import { Register } from './Pages/Register.jsx'






const App = () => {
  return (
   <BrowserRouter>
     <Navbar/>
   <Routes>
  

    <Route path="/" element={<LandingPage />} />
    <Route path="/register" element={<Register/>} />
    
    <Route path="/login" element={<Login/>} />
    <Route path="/HomePage" element={<HomePage/>} />
   </Routes>
   
   </BrowserRouter>

   
  )
}

export default App
