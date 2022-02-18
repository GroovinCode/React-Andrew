import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ProductDetails} from './routes/ProductDetailRoute';
import {Cart} from './routes/CartRoute';
import {Checkout} from './routes/CheckoutRoute';
import {ProductRoute} from './routes/ProductRoute';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<ProductRoute/>}/>
          <Route path="products" element={<ProductRoute/>}/>  
          <Route path="productdetails" element={<ProductDetails/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="*" element={<ProductRoute/>} />
        </Route>
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
