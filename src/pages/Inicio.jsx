/** Página de inicio (antes index.html). */
import { Link } from 'react-router-dom';
import CategoriaDestacada from '../components/CategoriaDestacada';

// Los 3 bloques de categoría como datos: así se dibujan con un solo componente.
const categorias = [
  {
    nombre: 'Hogar Sustentable',
    descripcion:
      'Artículos de limpieza y utensilios domésticos pensados para reducir el impacto ambiental sin perder efectividad.',
    ancla: 'hogar-sustentable',
    imagenes: [
      {
        src: '/image/eco sustentable -1.png',
        alt: 'Productos para un hogar sustentable',
      },
      { src: '/image/eco sustentable -2.png', alt: 'Productos ecológicos para el hogar' },
    ],
  },
  {
    nombre: 'Cuidado Personal',
    descripcion:
      'Cosmética natural y accesorios de higiene elaborados con ingredientes libres de químicos agresivos.',
    ancla: 'cuidado-personal',
    imagenes: [
      {
        src: '/image/EcoCuidado Personal-1.png',
        alt: 'Productos ecológicos de cuidado personal',
      },
      {
        src: '/image/EcoCuidado Personal-2.png',
        alt: 'Productos sustentables de cuidado personal',
      },
    ],
    invertido: true,
  },
  {
    nombre: 'Alimentos Orgánicos',
    descripcion:
      'Productos cultivados de forma responsable, libres de pesticidas y con envases de bajo impacto ambiental.',
    ancla: 'alimentos-organicos',
    imagenes: [
      {
        src: '/image/EcoAlimentos Orgánicos-1.png',
        alt: 'Alimentos orgánicos de EcoMarket',
      },
      {
        src: '/image/EcoAlimentos Orgánicos-2.png',
        alt: 'Productos y alimentos orgánicos',
      },
    ],
  },
];

export default function Inicio() {
  return (
    <main>
      <div className="header-content container text-center py-5">
        <div className="header-banner ratio ratio-21x9 rounded shadow-sm mb-4">
          <img
            src="/image/banner-cero-plastico-1.png"
            className="object-fit-cover rounded"
            alt="Campaña Cero Plástico de EcoMarket"
          />
        </div>

        <div className="row justify-content-center">
          <div className="header-info col-md-8">
            <h1>Bienvenido a EcoMarket</h1>
            <p className="lead">Tu tienda de productos ecológicos y sostenibles.</p>
            <Link to="/productos" className="btn-1 btn btn-success btn-lg mt-2">
              Explorar Productos
            </Link>
          </div>
        </div>
      </div>

      {/* El spread {...categoria} pasa cada propiedad del objeto como una prop. */}
      {categorias.map((categoria) => (
        <CategoriaDestacada key={categoria.ancla} {...categoria} />
      ))}

      <section id="blog" className="eco blog container py-5">
        <h2 className="text-center mb-4">
          <span>Eco</span>Blog
        </h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h5">
                  5 formas de reducir el plástico en tu rutina diaria
                </h3>
                <p className="card-text">
                  Pequeños cambios como usar bolsas reutilizables, elegir envases a granel
                  y evitar botellas desechables ayudan a disminuir el plástico que
                  consumes cada día.
                </p>
                {/* Corregido: en el original este enlace llevaba al artículo de residuos. */}
                <Link
                  to="/blog#articulo-reducir-plastico"
                  className="btn btn-outline-success"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h5">
                  ¿Qué significa realmente el sello Cruelty-Free?
                </h3>
                <p className="card-text">
                  Un producto Cruelty-Free es aquel que no fue testeado en animales en
                  ninguna etapa de su elaboración, una forma sencilla de elegir de manera
                  más responsable.
                </p>
                {/* Corregido: en el original llevaba al artículo de productos ecológicos. */}
                <Link
                  to="/blog#articulo-cruelty-free"
                  className="btn btn-outline-success"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link to="/blog" className="btn btn-success">
            Ver todos los artículos
          </Link>
        </div>
      </section>
    </main>
  );
}
