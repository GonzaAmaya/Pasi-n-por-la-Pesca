import { useState } from 'react';
import logo from './assets/img/logo.webp'; 
import './App.css';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="nav">
      <a href="#hero" className="logo-link">
        <img src={logo} alt="Pasión por la Pesca" className="logo" />
      </a>

      <button
        className="boton-hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <ul className={`menu ${menuAbierto ? 'abierto' : ''}`}>
        <li><a href="#nosotros" className="nav-btn" onClick={() => setMenuAbierto(false)}>Nosotros</a></li>
        <li><a href="#viajes" className="nav-btn" onClick={() => setMenuAbierto(false)}>Viajes</a></li>
        <li><a href="#beneficios" className="nav-btn" onClick={() => setMenuAbierto(false)}>Beneficios</a></li>
        <li><a href="#contacto" className="nav-btn" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;