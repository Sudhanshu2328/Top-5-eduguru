import React from 'react'
import './App.css'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/Login' element={<Login />} />
      <Route path='/Navbar' element={<Navbar />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
