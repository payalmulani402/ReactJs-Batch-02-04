import './App.css'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Filter from './Pages/Filter'
import Contact from './Pages/Contact'
import Company from './Pages/Company'
import Channel from './Pages/Channel'
import Other from './Pages/Other'

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/filter" element={<Filter/>}></Route>
            <Route path="/contact/" element={<Contact/>}>
              <Route path='company' element={<Company/>}/> 
              <Route path='channel' element={<Channel/>}/>
              <Route path='other' element={<Other/>}/>
            </Route>  
          </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */
