'use client'

import { createContext, useContext, useState } from 'react'

export const AppContext = createContext()

export function ContextProvider({ children }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  return (
    <AppContext.Provider  value={{
      firstName,
      setFirstName,
      lastName,
      setLastName,
      image,
      setImage,
      imagePreview,
      setImagePreview,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useForm() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useForm must be used within a FormProvider')
  }
  return context
}
