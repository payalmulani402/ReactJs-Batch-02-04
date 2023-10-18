import { useState } from "react";

const UseState = () => {
  const [count , setCount] = useState(0);

    const next = () => {
        setCount(count+1)
      }
      const pre = () => {
        setCount(count-1)
      }
       return (
        <>
        <div className="flex">
            <button className="button" onClick={next}>add</button>
            <button className="button" onClick={pre}>remove</button>
            <div className="button">{count}</div>
        </div>
        </>
       )
}

export default UseState
