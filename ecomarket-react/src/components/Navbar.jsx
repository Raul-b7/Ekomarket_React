import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="header navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="logo navbar-brand fw-bold">
          EcoMarket
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNav"
          aria-controls="menuNav"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="btn btn-outline-success">
                Carrito <span className="cart-count">(0)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
