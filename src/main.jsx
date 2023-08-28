import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Style/index.css'
import '../src/Components/Start.jsx'
// import { Start } from '../src/Components/Start.jsx'
import { Footer } from './Components/Footer'
import { Question } from '../src/Components/Question'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Question className='components'/>
    <Footer/>
  </React.StrictMode>,
)
