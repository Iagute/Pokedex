import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PokeApp } from './PokeApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokeApp />
    </BrowserRouter>
  </React.StrictMode>,
)
