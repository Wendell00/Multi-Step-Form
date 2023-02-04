import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import { YourInfo } from './pages/yourInfo/yourInfo'
import { SelectPlan } from './pages/selectPlan/selectPlan'

import { FormContextProvider } from './contexts/FormContext'
import { LayoutDefault } from './layouts/LayoutDefault'

function App() {
  return (
    <div>
      <BrowserRouter>
        <FormContextProvider>
          <Routes>
            <Route path='/' element={<LayoutDefault />}>
              <Route path='/' element={<YourInfo />} />
              <Route path='/selectPlan' element={<SelectPlan />} />
            </Route>
          </Routes>
        </FormContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

   