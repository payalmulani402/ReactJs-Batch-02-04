import { useState } from "react"


const UseReducer = () => {

     const [count , setCount] = useState(0)

     const Increment = () =>{
          setCount(count + 1)
     }

     const Decrement = () =>{
          setCount(count - 1)
     }

  return (
    <div>
      <span className="button">{count}</span>
      <button className="button" onClick={Increment}>+</button>
      <button className="button" onClick={Decrement}>-</button>
    </div>
  )
}

export default UseReducer
