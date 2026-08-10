import { useState } from "react";
import "./App.css";

function NavBar() {
  const [menuAbierto, setMenuAbierto] = useState(false);


return(
    <nav className="nav">
        <div>
          <img className="logo" src="/logo.webp" alt="PasionxlaPesca logo" />
        </div>

        <ul className="menu">
          <li><a className="nav-btn" href="#viajes">Viajes</a></li>
          <li><a className="nav-btn" href="#beneficios">Beneficios</a></li>
          <li><a className="nav-btn" href="#reseñas">Reseñas</a></li>
          <li><a className="nav-btn" href="#contacto">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default NavBar