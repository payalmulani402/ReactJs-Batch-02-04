import './App.css'
import Component_A from './Hook_Reducer/components/Component_A'
import Component_B from './Hook_Reducer/components/Component_B'
import Component_D from './Hook_Reducer/components/Component_D'

function App() {
  return (
    <>
      <div>
        <Component_A/>
        <Component_B/>
        <Component_D/>
      </div>
    </>
  )
}

export default App

/*  Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app */

/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */
