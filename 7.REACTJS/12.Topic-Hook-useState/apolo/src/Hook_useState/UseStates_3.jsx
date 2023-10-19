import { useState } from "react";


const Hook = () => {
    // let count = 0;

const [count , setCount] = useState(0);

    const next = () => {
        setCount(count+1)
      }
      const pre = () => {
        setCount(count-1)
      }
       return (
        <>
            <button className="button" onClick={next}>add</button>
            <button className="button" onClick={pre}>remove</button>
            <div className="button">{count}</div>
        </>
       )
}

export default Hook;