import { createContext, useState } from 'react'

export const FormContext = createContext()

const inputsObject = {
  periodPlan: false,
  selectedPlan: {
    name: 'Arcade',
    price: 9
  },
  onlineService: {
    active: false,
    price: 1 
  },
  largerStorage: {
    active: false,
    price: 2
  },
  customizableProfile: {
    active: false,
    price: 2
  }
}

export function FormContextProvider({ children }) {
  const [inputsInf, setInputsInf] = useState(inputsObject)
  const [submitInf, setSubmitInf] = useState(false)

  return (
    <FormContext.Provider value={{ 
      inputsInf, setInputsInf, submitInf, setSubmitInf}}>
      {children}
    </FormContext.Provider>
  )
}