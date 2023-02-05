import { createContext, useState } from 'react'

export const FormContext = createContext()

export function FormContextProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState('null')
  const [periodPlan, setPeriodPlan] = useState(false)

  return (
    <FormContext.Provider value={{ selectedPlan, setSelectedPlan, periodPlan, setPeriodPlan}}>
      {children}
    </FormContext.Provider>
  )
}