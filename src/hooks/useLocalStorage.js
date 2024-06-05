'use client'
import { useEffect, useState } from "react"

const decode = (value) => {
  return JSON.stringify(value)
}

const encode = (value) => {
  return JSON.parse(value)
}

const useLocalStorage = (key, defaultState) => {

  const data = () => {
    if (typeof window !== 'undefined') {
    
      return  encode(localStorage.getItem(key) || null) || defaultState
     }
  }

 
  const [value, setValue] = useState(
   
    data
  )

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  }, [key, value])

  return [value, setValue]


  // const [value, setValue] = useState(
  //   encode(localStorage.getItem(key)||null) || defaultState
  // )

  // useEffect(() => {
  //   localStorage.setItem(key, decode(value))
  // },  [key, value])

  // return [value, setValue]
}

export {
  useLocalStorage
}
