import React from 'react'
import ReactDOM from 'react-dom/client'//Client
import './styles.css'
import App from "./App"
import CartProvider from './context/cartContext'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
