/**
 * Menú de navegación (antes se repetía copiado en los 6 archivos .html).
 *
 * Props:
 *   unidades        -> número que muestra el botón "Carrito (n)"
 *   sesion          -> { email, nombre } de quien inició sesión, o null
 *   onCerrarSesion  -> función de App que borra la sesión
 *   oscuro          -> true si el modo oscuro está activo
 *   onAlternarTema  -> función de App que cambia entre modo claro y oscuro
 */
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Header({
  unidades,
  sesion,
  onCerrarSesion,
  oscuro = false,
  onAlternarTema,
}) {
  // Igual que en EjemploSitioFull: el menú móvil se abre/cierra con estado de React,
  // en vez de usar el JavaScript de Bootstrap (data-bs-toggle).
  const [abierto, setAbierto] = useState(false);
  const navigate = useNavigate();

  const enlaces = [
    ['/', 'Inicio'],
    ['/productos', 'Productos'],
    ['/blog', 'Blog'],
    ['/contacto', 'Contacto'],
  ];

  function cerrarSesion() {
    onCerrarSesion();
    navigate('/');
  }

  return (
    <header>
      <nav className="header navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="logo navbar-brand fw-bold">
            EcoMarket
          </Link>

          {/* Fuera del menú, al lado: en móvil queda junto a la hamburguesa y en
              escritorio (order-lg-last) al final de la barra. */}
          <button
            type="button"
            className="btn btn-outline-success ms-auto me-2 ms-lg-3 me-lg-0 order-lg-last"
            aria-label={oscuro ? 'Activar modo claro' : 'Activar modo oscuro'}
            aria-pressed={oscuro}
            onClick={onAlternarTema}
          >
            {oscuro ? '☀️' : '🌙'}
          </button>

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

          <div
            className={`collapse navbar-collapse ${abierto ? 'show' : ''}`}
            id="menuNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {/* NavLink agrega la clase "active" a la página actual automáticamente. */}
              {enlaces.map(([ruta, texto]) => (
                <li className="nav-item" key={ruta}>
                  <NavLink
                    className="nav-link"
                    to={ruta}
                    end
                    onClick={() => setAbierto(false)}
                  >
                    {texto}
                  </NavLink>
                </li>
              ))}

              {/* Renderizado condicional: sin sesión, enlace al login; con sesión, saludo. */}
              {sesion ? (
                <li className="nav-item d-flex align-items-center">
                  <span className="nav-link disabled text-success fw-semibold">
                    Hola, {sesion.nombre}
                  </span>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary ms-lg-2"
                    onClick={cerrarSesion}
                  >
                    Cerrar sesión
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                    onClick={() => setAbierto(false)}
                  >
                    Iniciar sesión
                  </NavLink>
                </li>
              )}

              <li className="nav-item">
                <Link
                  to="/carrito"
                  className="btn btn-outline-success"
                  onClick={() => setAbierto(false)}
                >
                  Carrito <span className="cart-count">({unidades})</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
