'use client'

import { useContext } from 'react'
import { FormContext } from '..'


interface InputProps {
  type?: 'text' | 'password'
  name: string
  label: string
  placeholder?: string
}

export function Input ({ label, name, placeholder, type }: InputProps) {
  const { formValues, setFormValues } = useContext(FormContext)!

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col gap-4">
      <label className="font-semibold text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formValues[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
        className="py-2 px-4 border border-gray-300 rounded-md text-sm transition-all duration-300 focus:outline-none focus:border-black"
      />
    </div>
  )
}
