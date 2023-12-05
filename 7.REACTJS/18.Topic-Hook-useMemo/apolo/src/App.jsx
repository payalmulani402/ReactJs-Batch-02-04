import './App.css'
import { useState } from 'react'

function App() {

    const [countOne , setCountOne] = useState (0)
    const [countTwo , setCountTwo] = useState (0)

    const incrementOne = () => {
      setCountOne(countOne + 1)
    }
    
    const incrementTwo = () => {
      setCountTwo(countTwo + 1)
    }

    const isEven = () => {
      return countOne % 20;
    }

  return (
    <>
      <div>
        <button className="button" onClick={incrementOne}>ButtonOne - {countOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        <button className='button' onClick={incrementTwo}>ButtonTwo - {countTwo}</button>
      </div>
    </>
  )
}

export default App

/*  Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app */

/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */
