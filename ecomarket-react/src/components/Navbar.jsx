import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  // Reemplaza al JS de Bootstrap: el botón hamburguesa abre y cierra el menú.
  const [abierto, setAbierto] = useState(false);
  // Al elegir un enlace el menú se cierra, como al entrar a una página nueva.
  const cerrar = () => setAbierto(false);

  return (
    <nav className="header navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="logo navbar-brand fw-bold" onClick={cerrar}>
          EcoMarket
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menuNav"
          aria-expanded={abierto}
          aria-label="Abrir menú"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${abierto ? 'show' : ''}`} id="menuNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={cerrar}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos" onClick={cerrar}>
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" onClick={cerrar}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto" onClick={cerrar}>
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="btn btn-outline-success" onClick={cerrar}>
                Carrito <span className="cart-count">(0)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
