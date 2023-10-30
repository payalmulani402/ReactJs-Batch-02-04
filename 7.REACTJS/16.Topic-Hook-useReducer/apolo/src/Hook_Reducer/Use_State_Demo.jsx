import { useState } from 'react'

const Use_State_Demo = () => {
  const [count , setCount]  = useState(0)

  function Increment(){
    setCount(count + 1)
  }

  function Decrement(){
    setCount (count - 1)
  }
  
  return (
    <div>
      <div className='button'>{count}</div>
      <button className='button' onClick={Increment}>Increment</button>
      <button className='button' onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Use_State_Demo
