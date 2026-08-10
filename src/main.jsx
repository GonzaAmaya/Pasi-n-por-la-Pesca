import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Presentacion from './presentacion.jsx'
import Sponsors from './sponsors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Presentacion />
    <Sponsors />
  </StrictMode>,
)
