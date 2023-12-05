import { useEffect , useRef } from "react"

const InputFocus = () => {

     const inputRef = useRef(null)

     useEffect(() => {
          //input focus
          inputRef.current.focus()
     } , [])

  return (
    <div>
      <input ref={inputRef} type="text"/>
    </div>
  )
}

export default InputFocus
