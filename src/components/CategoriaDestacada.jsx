/**
 * Bloque de categoría de la página de inicio (EcoHogar, EcoCuidado, EcoAlimentos).
 * En index.html eran 3 secciones casi iguales; ahora es un solo componente.
 *
 * Props:
 *   nombre       -> parte después de "Eco" (ej: "Hogar Sustentable")
 *   descripcion  -> texto del bloque
 *   ancla        -> id de la sección en Productos (ej: "hogar-sustentable")
 *   imagenes     -> lista de { src, alt } (dos fotos)
 *   invertido    -> true para poner las fotos a la izquierda en pantallas medianas
 */
import { Link } from 'react-router-dom';

export default function CategoriaDestacada({
  nombre,
  descripcion,
  ancla,
  imagenes,
  invertido,
}) {
  return (
    <section className="eco productos container py-5">
      <div className="row align-items-center g-4">
        <div className={`eco-1 col-md-6 ${invertido ? 'order-md-2' : ''}`}>
          <h2>
            <span>Eco</span>
            {nombre}
          </h2>
          <p>{descripcion}</p>
          <Link to={`/productos#${ancla}`} className="btn-2 btn btn-outline-success">
            Ver Productos
          </Link>
        </div>

        <div
          className={`eco-2 col-md-6 d-flex flex-wrap gap-3 ${invertido ? 'order-md-1' : ''}`}
        >
          {imagenes.map((imagen, indice) => (
            <img
              key={imagen.src}
              className={`img-${indice + 1} img-fluid rounded shadow-sm`}
              src={imagen.src}
              alt={imagen.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
