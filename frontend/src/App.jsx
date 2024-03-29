import React from 'react'
import './App.css'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import HomePage from './components/Homepage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/> } />
      <Route path='/Login' element={<Login />} />
     
     
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
