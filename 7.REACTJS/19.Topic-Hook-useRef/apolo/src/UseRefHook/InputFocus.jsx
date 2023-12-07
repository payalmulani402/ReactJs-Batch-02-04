import { useState } from "react";
import { useRef } from "react"

const InputFocus = () => {

     const inputRef = useRef("")
     console.log(inputRef);
      function reset(){
        setName("")
        inputRef.current.focus()
      }

      function handleClick(){
        inputRef.current.style.color = "pink"
        inputRef.current.style.textDecoration = "underline"
      }

     const [name , setName] = useState("vivek")

    

  return (
    <div>
      <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value) }/>
      <button onClick={reset}>Reset</button>
      <button onClick={handleClick}>handleInput</button>
    </div>
  )
}

export default InputFocus
