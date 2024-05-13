import React, { useEffect } from 'react'
import { ACTIONS } from './App'

export default function DigitButton({dispatch, digit}) {

    const handleButtonClick = () => {
        dispatch({type: ACTIONS.ADD_DIGIT, payload: { digit }})
    }

  return (
   <button onClick={handleButtonClick}> {digit}</button>
  )
}