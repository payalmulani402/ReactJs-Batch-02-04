import './App.css'
import CakeContainer from './Components/CakeContainer'
import { Provider } from 'react-redux'
import store from './Components/Redux/Store'


function App() {
  return (
    <>
    <div>
      <Provider store={store}>
      <CakeContainer/>
      </Provider>
    </div>
    </>
  )
}

export default App

/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */
