/**
 * Título grande de cada página (el bloque "header-content" de los .html).
 *
 * Props:
 *   titulo       -> texto del <h1>
 *   descripcion  -> texto destacado bajo el título
 *   id           -> identificador opcional (el blog usa "top")
 *   children     -> contenido extra (por ejemplo, las etiquetas del blog)
 */
export default function EncabezadoPagina({ titulo, descripcion, id, children }) {
  return (
    <div id={id} className="header-content container text-center py-5">
      <h1>{titulo}</h1>
      <p className="lead">{descripcion}</p>
      {children}
    </div>
  );
}
