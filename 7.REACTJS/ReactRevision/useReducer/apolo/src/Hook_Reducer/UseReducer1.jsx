import { useReducer} from "react"

const initialState = 0;
const reducer = (state , action) =>{
     console.log(state , action);
     if(action.type === "INCREMENT"){
          return state + 1
     }
     if(action.type === "DECREMENT"){
          return state - 1
     }
     return state
}

const UseReducer1 = () => {

     // const [count , setCount] = useState(0)

     const [state , dispatch] = useReducer(reducer , initialState)

     const Increment = () =>{
          dispatch({type : "INCREMENT"})
     }

     const Decrement = () =>{
          dispatch({type : "DECREMENT"})
     }

  return (
    <div>
      <span className="button">{state}</span>
      <button className="button" onClick={Increment}>+</button>
      <button className="button" onClick={Decrement}>-</button>
    </div>
  )
}

export default UseReducer1
