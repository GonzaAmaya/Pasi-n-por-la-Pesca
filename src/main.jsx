import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar.jsx'
import Presentacion from './presentacion.jsx'
import Sponsors from './sponsors.jsx'
import Viajes from './viajes.jsx'
import Beneficios from './beneficios.jsx'
import Reseñas from './reseñas.jsx'
import Contacto from './contacto.jsx'
import Footer from './footer.jsx'
import Hero from './hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Presentacion />
    <Sponsors />
    <Viajes />
    <Beneficios />
    <Reseñas />
    <Contacto />
    <Footer />
  </StrictMode>,
)
