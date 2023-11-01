import { useReducer } from 'react';

/* convert state to object */

const initialState = {
  firstCounter : 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {firstCounter: state.firstCounter + 1 }
    case 'decrement':
      return {firstCounter: state.firstCounter - 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}
 
const Use_Reducer_Multiple = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div className='button'>{count.firstCounter}</div>
      <button className="button" onClick={() => dispatch({type : 'increment'})}>Increment</button>
      <button className='button' onClick={() => dispatch({type : 'decrement'})}>Decrement</button>
      <button className='button' onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default Use_Reducer_Multiple
