import React from 'react'
import { useReducer } from 'react'
import Component_A from './Component_A'
import Component_B from './Component_B'
import Component_D from './Component_D'

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <div className='button'>{count}</div>
            <Component_A />
            <Component_B />
            <Component_D />
        </CountContext.Provider>
    )
}

export default Counter
