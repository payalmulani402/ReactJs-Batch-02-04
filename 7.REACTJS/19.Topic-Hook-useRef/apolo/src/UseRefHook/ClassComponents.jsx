
import { useEffect , useState , useRef } from "react"

const ClassComponents = () => {

     const [name , setName] = useState('')
     const renderCount = useRef(0)

     useEffect(() => {
          renderCount.current = renderCount.current + 1
     })


  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My Name Is {name}</div>
      <div>I renderd {renderCount.current}</div>
    </div>
  )
}

export default ClassComponents
