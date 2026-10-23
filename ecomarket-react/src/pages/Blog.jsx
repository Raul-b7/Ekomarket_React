/**
 * Blog (antes blog.html).
 * El listado de tarjetas sale de src/data/articulos.json; el texto completo de
 * cada artículo está en el componente ArticulosBlog.
 */
import { Link } from 'react-router-dom';
import articulos from '../data/articulos.json';
import EncabezadoPagina from '../components/EncabezadoPagina';
import ArticuloCard from '../components/ArticuloCard';
import ArticulosBlog from '../components/ArticulosBlog';

const temas = [
  'Consumo responsable',
  'Reducción de residuos',
  'Productos reutilizables',
  'Cuidado y mantenimiento',
  'Hábitos sostenibles',
];

export default function Blog() {
  return (
    <main>
      <EncabezadoPagina
        id="top"
        titulo="Blog EcoMarket"
        descripcion="Guías, consejos y buenas prácticas para elegir productos ecológicos, reducir residuos y llevar una vida más sostenible."
      >
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
          {temas.map((tema) => (
            <span key={tema} className="badge text-bg-success rounded-pill px-3 py-2">
              {tema}
            </span>
          ))}
        </div>
      </EncabezadoPagina>

      <section id="articulos" className="eco blog-listado container py-5">
        <h2 className="text-center mb-4">Artículos del Blog</h2>

        <div className="row g-4">
          {articulos.map((articulo) => (
            <div className="col-12 col-md-6 col-lg-4" key={articulo.id}>
              <ArticuloCard {...articulo} />
            </div>
          ))}
        </div>
      </section>

      <section className="text-center container py-4">
        <h2 className="h4">¿Listo para dar el siguiente paso?</h2>
        <p>
          Explora nuestros productos ecológicos y encuentra alternativas sostenibles para
          tu día a día.
        </p>
        <Link to="/productos" className="btn btn-success mt-2">
          Explorar productos
        </Link>
      </section>

      <ArticulosBlog />

      <section className="text-center bg-success bg-opacity-10 py-5">
        <div className="container">
          <h2 className="h3">
            ¿Listo para dar el siguiente paso hacia un consumo más sostenible?
          </h2>
          <p className="lead">
            Explora nuestros productos ecológicos y encuentra alternativas para reducir
            residuos en tu día a día.
          </p>
          <Link to="/productos" className="btn btn-success btn-lg mt-2">
            Explorar productos ecológicos
          </Link>
        </div>
      </section>
    </main>
  );
}
