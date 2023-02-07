import { createContext, useState } from 'react'

export const FormContext = createContext()

const inputsObject = {
  periodPlan: false,
  selectedPlan: {
    name: 'null',
    price: 0
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

  return (
    <FormContext.Provider value={{ 
      inputsInf, setInputsInf}}>
      {children}
    </FormContext.Provider>
  )
}