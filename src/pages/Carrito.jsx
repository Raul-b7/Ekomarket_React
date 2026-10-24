/**
 * Carrito de compras (antes carrito.html + js/carrito.js).
 *
 * Props:
 *   carrito            -> lista de productos guardados (estado de App)
 *   onCambiarCantidad  -> suma o resta unidades
 *   onEliminar         -> quita un producto
 *   onVaciar           -> vacía todo el carrito (al cerrar la compra simulada)
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EncabezadoPagina from '../components/EncabezadoPagina';
import ItemCarrito from '../components/ItemCarrito';
import { COSTO_ENVIO, CUPONES, formatearPrecio } from '../utils/tienda';

export default function Carrito({ carrito, onCambiarCantidad, onEliminar, onVaciar }) {
  // Estado local de esta página: el texto del cupón y el cupón aplicado.
  const [codigo, setCodigo] = useState('');
  const [cuponActivo, setCuponActivo] = useState(null);
  const [mensaje, setMensaje] = useState({ texto: '', esError: false });
  // true = se muestra la ventana "Esto es una simulación".
  const [simulacion, setSimulacion] = useState(false);

  const vacio = carrito.length === 0;

  // Un carrito vacío deja sin efecto el cupón (antes se hacía dentro de dibujar()).
  if (vacio && cuponActivo) {
    setCuponActivo(null);
    setMensaje({ texto: '', esError: false });
  }

  // Valores calculados en cada render a partir de las props: no necesitan estado.
  const subtotal = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0,
  );
  const envio = vacio ? 0 : COSTO_ENVIO;
  // El descuento se aplica sobre los productos, no sobre el envío.
  const rebaja = cuponActivo ? Math.round(subtotal * CUPONES[cuponActivo]) : 0;
  const total = subtotal - rebaja + envio;

  function aplicarCupon(evento) {
    evento.preventDefault();
    const texto = codigo.trim().toUpperCase();

    if (texto === '') {
      setMensaje({ texto: 'Ingresa un código de cupón.', esError: true });
      return;
    }
    if (vacio) {
      setMensaje({
        texto: 'Agrega productos al carrito antes de usar un cupón.',
        esError: true,
      });
      return;
    }
    if (CUPONES[texto] === undefined) {
      setCuponActivo(null);
      setMensaje({ texto: `El cupón "${texto}" no es válido.`, esError: true });
      return;
    }

    setCuponActivo(texto);
    setMensaje({
      texto: `¡Cupón ${texto} aplicado! ${CUPONES[texto] * 100}% de descuento.`,
      esError: false,
    });
  }

  return (
    <main>
      <EncabezadoPagina
        titulo="Carrito de compras"
        descripcion="Revisa tus productos ecológicos antes de finalizar tu compra."
      />

      <section className="eco carrito container py-5">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div id="lista-carrito">
              {carrito.map((item) => (
                <ItemCarrito
                  key={item.id}
                  item={item}
                  onCambiarCantidad={onCambiarCantidad}
                  onEliminar={onEliminar}
                />
              ))}
            </div>

            {vacio && (
              <p id="carrito-vacio" className="text-muted">
                Tu carrito está vacío.{' '}
                <Link to="/productos">Explora nuestros productos</Link> para empezar.
              </p>
            )}
          </div>

          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title h5 mb-3">Resumen de compra</h2>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between px-0">
                    <span>Subtotal</span>
                    <span id="monto-subtotal">{formatearPrecio(subtotal)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between px-0">
                    <span>Envío</span>
                    <span id="monto-envio">{formatearPrecio(envio)}</span>
                  </li>
                  {rebaja > 0 && (
                    <li className="list-group-item d-flex justify-content-between px-0 text-success">
                      <span>Descuento</span>
                      <span id="monto-descuento">-{formatearPrecio(rebaja)}</span>
                    </li>
                  )}
                  <li className="list-group-item d-flex justify-content-between px-0 fw-bold">
                    <span>Total</span>
                    <span id="monto-total">{formatearPrecio(total)}</span>
                  </li>
                </ul>

                <form id="form-cupon" className="mb-3" onSubmit={aplicarCupon}>
                  <label htmlFor="input-cupon" className="form-label small">
                    ¿Tienes un cupón de descuento?
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="input-cupon"
                      placeholder="Ej: ECO10"
                      autoComplete="off"
                      value={codigo}
                      onChange={(evento) => setCodigo(evento.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Aplicar
                    </button>
                  </div>
                  <p
                    className={`small mt-2 mb-0 ${mensaje.esError ? 'text-danger' : 'text-success'}`}
                    role="status"
                    aria-live="polite"
                  >
                    {mensaje.texto}
                  </p>
                </form>

                {/* "Proceder al pago" solo abre la ventana de simulación. */}
                <button
                  type="button"
                  className="btn btn-success w-100 mb-2"
                  disabled={vacio}
                  onClick={() => setSimulacion(true)}
                >
                  Proceder al pago
                </button>
                <Link to="/productos" className="btn btn-outline-success w-100">
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventana de simulación: se dibuja solo cuando "simulacion" es true. */}
      {simulacion && (
        <>
          <div
            className="modal d-block"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-simulacion"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content text-center">
                <div className="modal-body p-4">
                  <h2 id="titulo-simulacion" className="h4 text-success">
                    ¡Esto es una simulación!
                  </h2>
                  <p className="mb-3">¡Gracias por comprar con nosotros!</p>
                  {/* Única salida: vacía el carrito y vuelve a la tienda. */}
                  <Link to="/productos" className="btn btn-success" onClick={onVaciar}>
                    Volver a los productos
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Fondo oscuro detrás de la ventana. */}
          <div className="modal-backdrop show"></div>
        </>
      )}
    </main>
  );
}
