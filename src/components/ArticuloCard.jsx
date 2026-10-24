/**
 * Tarjeta de un artículo en el listado del blog.
 * Props: id (ancla del artículo), titulo, resumen, imagen, alt y esProducto
 * (las fotos de productos llevaban un margen interno p-3 en el original).
 */
export default function ArticuloCard({ id, titulo, resumen, imagen, alt, esProducto }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imagen}
        className={`card-img-top img-fluid ${esProducto ? 'p-3' : ''}`}
        alt={alt}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{titulo}</h3>
        <p className="card-text">{resumen}</p>
        <a href={`#${id}`} className="btn btn-success mt-auto">
          Leer más
        </a>
      </div>
    </div>
  );
}
