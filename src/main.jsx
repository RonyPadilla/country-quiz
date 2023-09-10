import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Style/index.css'
import { App } from './Components/App.jsx'
import { Footer } from './Components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
)
