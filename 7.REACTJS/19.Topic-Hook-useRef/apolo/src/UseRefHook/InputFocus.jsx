import { useState } from "react";
import { useRef } from "react"

const InputFocus = () => {

     const inputRef = useRef("vivek")
     console.log(inputRef);

      function reset(){
        setName("")
        inputRef.current.focus()
        inputRef.current.style.color = "black"
        inputRef.current.style.textDecoration = "none"
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
