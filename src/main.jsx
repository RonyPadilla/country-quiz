import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Style/index.css'
import '../src/Components/Start.jsx'
import { Start } from '../src/Components/Start.jsx'
import { Footer } from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Start className='components'/>
    <Footer/>
  </React.StrictMode>,
)
