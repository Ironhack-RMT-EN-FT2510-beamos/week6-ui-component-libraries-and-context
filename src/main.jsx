import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeWrapper } from './context/theme.context.jsx';
import { CartWrapper } from './context/cart.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeWrapper>
      <CartWrapper>
        <App />
      </CartWrapper>
    </ThemeWrapper>
  </BrowserRouter>
)
