import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route } from 'react-router-dom'


function App() {

  return (
    <>
        <Router>
          <Route path="/" element={<Home/>}></Route>
        </Router>
    </>
  )
}

export default App
