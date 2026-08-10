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
          <li><a className="nav-btn" href="#beneficio">Beneficio</a></li>
          <li><a className="nav-btn" href="#contacto">Viajes</a></li>
          <li><a className="nav-btn" href="#viajes">Redes</a></li>
          <li><a className="nav-btn" href="#redes">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default NavBar