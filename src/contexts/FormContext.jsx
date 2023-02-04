import { createContext, useState } from 'react'

export const FormContext = createContext()

export function FormContextProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState('arcade')

  return (
    <FormContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </FormContext.Provider>
  )
}