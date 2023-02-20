import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import { YourInfo } from './pages/yourInfo/yourInfo'
import { SelectPlan } from './pages/selectPlan/selectPlan'
import { AddOns } from './pages/addOns/addOns'
import { FormContextProvider } from './contexts/FormContext'
import { LayoutDefault } from './layouts/LayoutDefault'
import { Summary } from './pages/summary/summary'

function App() {
  return (
    <div>
      <BrowserRouter>
        <FormContextProvider>
          <Routes>
            <Route path='/' element={<LayoutDefault />}>
              <Route path='/' element={<YourInfo />} />
              <Route path='/selectPlan' element={<SelectPlan />} />
              <Route path='/add-ons' element={<AddOns />} />
              <Route path='/summary' element={<Summary />} />
            </Route>
          </Routes>
        </FormContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

   