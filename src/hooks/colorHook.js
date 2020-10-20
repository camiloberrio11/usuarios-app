import { useState } from "react"

export const useChangeColor= (initialState = 'red') => {
  const [color, setColor] = useState(initialState)

  const changeColor = colorNew => {
    setColor(colorNew)
  }

  return {
    changeColor,
    color
  }
}