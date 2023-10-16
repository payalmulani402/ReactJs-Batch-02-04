import { useState } from "react"


const UseStates = () => {

     const [count , setCount] = useState(0);

     function handleIncrement(){
          setCount(count+1);
     }

     function handleDecrement(){
          setCount(count-1)
     }

  return (
    <div className="flex p-2 bg-slate-500 rounded-2xl">
      <button className="button" onClick={handleIncrement}>Increments</button>
      <button className="button" onClick={handleDecrement}>Decerement</button>
      <button className="button" onClick={() => setCount(count+1)}>Increments</button>
      <button className="button" onClick={() => setCount(count-1)}>Decerement</button>
      <div className="button">
          {count}
      </div>
    </div>
  )
}

export default UseStates
