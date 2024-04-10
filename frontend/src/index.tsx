import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ProductPizzaContext } from "./context/Context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductPizzaContext>
        <App /> 
      </ProductPizzaContext>
    </BrowserRouter>
  </React.StrictMode>
);

