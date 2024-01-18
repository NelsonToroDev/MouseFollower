import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode is enable for development mode then the effect will be executed and cleanedUp and executed again
  // StrictMode is disable for Production mode and the effect will be executed only once
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
