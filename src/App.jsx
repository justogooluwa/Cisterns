import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footeer'

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
