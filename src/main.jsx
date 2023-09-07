import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Style/index.css'
import '../src/Components/Start.jsx'
// import { Start } from '../src/Components/Start.jsx'
import { Footer } from './Components/Footer'
import { Create } from './Components/Create'
//import { Question } from '../src/Components/Question'
//import { Win } from '../src/Components/Win.jsx'
// import { App } from './Components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Create/>
    <Footer/>
  </React.StrictMode>,
)
