import './App.css'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */
