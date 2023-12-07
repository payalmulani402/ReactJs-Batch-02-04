import React from 'react'
import useCounter from './useCounter';

const Counter2 = () => {


    const [count  , Increment , Decrement] = useCounter(10);
  return (
    <div>
      <span className="button">{count}</span>
        <button className="button" onClick={Increment}>
          Increment
        </button>
        <button className="button" onClick={Decrement}>
          Decrement
        </button>
    </div>
  )
}

export default Counter2
