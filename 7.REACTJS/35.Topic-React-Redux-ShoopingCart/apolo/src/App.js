import React from 'react';
import Home from './pages/Home';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Router, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Provider store={store}>
            <Home />
            <Cart />
          </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;

