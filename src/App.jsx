import { useState } from "react";
import "./App.css";

function NavBar() {
  const [menuAbierto, setMenuAbierto] = useState(false);


return(
    <nav className="nav">
        <div>
          <a href="#hero" className="logo-link">
            <img className="logo" src="/logo.webp" alt="PasionxlaPesca logo" />
          </a>
        </div>

        <ul className="menu">
          <li><a className="nav-btn" href="#nosotros">Nosotros</a></li>
          <li><a className="nav-btn" href="#viajes">Viajes</a></li>
          <li><a className="nav-btn" href="#beneficios">Beneficios</a></li>
          <li><a className="nav-btn" href="#contacto">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default NavBar