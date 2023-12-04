import { useContext } from "react"
import { CountContext } from "./Counter"

const Component_F = () => {

  const countContext = useContext(CountContext)

  return (
    <div>
      <div className="flex items-center">
        <div>
          <button className="button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
          <button className='button' onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
          <button className='button' onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
        <div>
          <h1 className="text-4xl">Component F</h1>
        </div>
      </div>
    </div>
  )
}

export default Component_F
