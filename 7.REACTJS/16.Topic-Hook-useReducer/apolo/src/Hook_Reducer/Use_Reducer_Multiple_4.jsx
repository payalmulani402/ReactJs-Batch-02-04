import { useReducer } from 'react';

/* Multiple Reducer */

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
  const [countTWO, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
      <div className='button'>{count.firstCounter}</div>
      <button className="button" onClick={() => dispatch({type : 'increment'})}>Increment</button>
      <button className='button' onClick={() => dispatch({type : 'decrement'})}>Decrement</button>
      <button className='button' onClick={() => dispatch({type : 'reset'})}>Reset</button>
      <div>
      <div className='button'>{countTWO.firstCounter}</div>
      <button className="button" onClick={() => dispatchTwo({type : 'increment'})}>Increment</button>
      <button className='button' onClick={() => dispatchTwo({type : 'decrement'})}>Decrement</button>
      <button className='button' onClick={() => dispatchTwo({type : 'reset'})}>Reset</button>
      </div>
    </div>
  )
}

export default Use_Reducer_Multiple
