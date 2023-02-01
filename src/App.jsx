import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { YourInfo } from './pages/yourInfo/yourInfo'
import { SelectPlan } from './pages/selectPlan/selectPlan'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import { validatorEmail } from './functions/step01/validatorEmail'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/asdsa' element={<YourInfo/>} />
        <Route path='/' element={<SelectPlan/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App

   