/**
 * Una fila del carrito con sus controles de cantidad.
 * Antes se armaba con innerHTML en js/carrito.js (función crearTarjeta).
 *
 * Props: item ({ id, nombre, precio, imagen, cantidad }), onCambiarCantidad, onEliminar.
 */
import { formatearPrecio } from '../utils/tienda';

export default function ItemCarrito({ item, onCambiarCantidad, onEliminar }) {
  const { id, nombre, precio, imagen, cantidad } = item;

  return (
    <div className="card shadow-sm mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-4 col-md-3">
          <img className="img-fluid rounded-start p-3" src={imagen} alt={nombre} />
        </div>
        <div className="col-8 col-md-9">
          <div className="card-body">
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-3">
              <div>
                <h2 className="card-title h5">{nombre}</h2>
                <p className="card-text text-muted small mb-1">
                  {formatearPrecio(precio)} por unidad
                </p>
                <p className="card-text fw-bold mb-0">
                  {formatearPrecio(precio * cantidad)}
                </p>
              </div>
              <div className="text-md-end">
                <div
                  className="btn-group mb-2"
                  role="group"
                  aria-label={`Cantidad de ${nombre}`}
                >
                  <button
                    className="btn btn-outline-success btn-sm"
                    type="button"
                    aria-label={`Quitar una unidad de ${nombre}`}
                    onClick={() => onCambiarCantidad(id, -1)}
                  >
                    −
                  </button>
                  <button
                    className="btn btn-outline-success btn-sm disabled"
                    type="button"
                    tabIndex={-1}
                  >
                    {cantidad}
                  </button>
                  <button
                    className="btn btn-outline-success btn-sm"
                    type="button"
                    aria-label={`Agregar una unidad de ${nombre}`}
                    onClick={() => onCambiarCantidad(id, 1)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    type="button"
                    aria-label={`Eliminar ${nombre} del carrito`}
                    onClick={() => onEliminar(id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
