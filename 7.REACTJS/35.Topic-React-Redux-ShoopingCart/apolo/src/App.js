import React from 'react';
import Home from './pages/Home';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/shop" element={<Shop />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;

