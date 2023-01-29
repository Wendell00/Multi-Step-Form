import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { YourInfo } from './pages/yourInfo/yourInfo'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<YourInfo/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
