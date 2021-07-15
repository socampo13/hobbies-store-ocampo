import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router';
import { CartComponentContext } from './Context/CartContext';
import Footer from './Screens/Footer/Footer';


function App() {
  return(
  <div className="App">
    <CartComponentContext>
      <BrowserRouter>
        <Router />
        <Footer/> 
      </BrowserRouter>
    </CartComponentContext>
  </div>
  );
}

export default App;
