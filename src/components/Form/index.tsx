'use client'

import { Footer, Input, SubmitButton } from './components'
import { createContext, useState } from 'react'


type FormValues = Record<string, string>

interface FormContextType {
  formValues: FormValues
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>
}

interface FormProps {
  title: string
  description?: string
  onSubmit: (values: FormValues) => void
  children: React.ReactNode
}

export const FormContext = createContext<FormContextType | undefined>(undefined)

export function Form ({ title, children, onSubmit, description }: FormProps) {
  const [formValues, setFormValues] = useState<FormValues>({})

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(formValues)
  }

  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
 <form className="w-auto p-8 border border-gray-300 rounded-lg min-w-[450px]" onSubmit={handleSubmit}>
  <div className="text-left" >
         <h2 className="font-bold text-2xl">{title}</h2>
          {description && <p className="font-normal text-base">{description}</p>}
        </div>
        {children}
      </form>
    </FormContext.Provider>
  )
}

Form.Input = Input
Form.Footer = Footer
Form.SubmitButton = SubmitButton
