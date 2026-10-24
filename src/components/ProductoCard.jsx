/**
 * Tarjeta de un producto del catálogo.
 *
 * Antes cada tarjeta estaba escrita a mano en productos.html; ahora es un
 * componente que recibe los datos por props y se repite con map().
 *
 * Props: nombre, descripcion, precio, imagen, alt y onAgregar (función).
 */
import { useEffect, useState } from 'react';
import { formatearPrecio } from '../utils/tienda';

export default function ProductoCard({
  nombre,
  descripcion,
  precio,
  imagen,
  alt,
  onAgregar,
}) {
  // Cada tarjeta recuerda si se acaba de agregar, para mostrar "Agregado ✓".
  const [agregado, setAgregado] = useState(false);

  // Después de 1,2 segundos el botón vuelve a su texto original (igual que antes).
  useEffect(() => {
    if (!agregado) return;
    const temporizador = setTimeout(() => setAgregado(false), 1200);
    // Limpieza: si la tarjeta desaparece antes, se cancela el temporizador.
    return () => clearTimeout(temporizador);
  }, [agregado]);

  function agregar() {
    onAgregar?.();
    setAgregado(true);
  }

  return (
    <div className="card h-100 shadow-sm">
      <img src={imagen} className="card-img-top img-fluid p-4" alt={alt || nombre} />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{nombre}</h3>
        <p className="card-text">{descripcion}</p>
        <p className="card-text fw-bold mt-auto">{formatearPrecio(precio)}</p>
        <button
          type="button"
          className="btn btn-success"
          disabled={agregado}
          onClick={agregar}
        >
          {agregado ? 'Agregado ✓' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}
