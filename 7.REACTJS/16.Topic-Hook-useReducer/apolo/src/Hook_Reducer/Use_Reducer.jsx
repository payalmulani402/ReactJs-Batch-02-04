import React from 'react'
import { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

const Use_Reducer = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div className='button'>{count}</div>
      <button className="button" onClick={() => dispatch('increment')}>Increment</button>
      <button className='button' onClick={() => dispatch('decrement')}>Decrement</button>
      <button className='button' onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Use_Reducer
