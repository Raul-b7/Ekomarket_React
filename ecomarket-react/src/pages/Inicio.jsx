import { Link } from 'react-router-dom';

// Cada categoría se muestra igual; "invertida" pone las imágenes a la izquierda.
const categorias = [
  {
    nombre: 'Hogar Sustentable',
    descripcion:
      'Artículos de limpieza y utensilios domésticos pensados para reducir el impacto ambiental sin perder efectividad.',
    enlace: '/productos#hogar-sustentable',
    imagenes: [
      {
        src: '/image/eco%20sustentable%20-1.png',
        alt: 'Productos para un hogar sustentable',
      },
      {
        src: '/image/eco%20sustentable%20-2.png',
        alt: 'Productos ecológicos para el hogar',
      },
    ],
  },
  {
    nombre: 'Cuidado Personal',
    descripcion:
      'Cosmética natural y accesorios de higiene elaborados con ingredientes libres de químicos agresivos.',
    enlace: '/productos#cuidado-personal',
    invertida: true,
    imagenes: [
      {
        src: '/image/EcoCuidado%20Personal-1.png',
        alt: 'Productos ecológicos de cuidado personal',
      },
      {
        src: '/image/EcoCuidado%20Personal-2.png',
        alt: 'Productos sustentables de cuidado personal',
      },
    ],
  },
  {
    nombre: 'Alimentos Orgánicos',
    descripcion:
      'Productos cultivados de forma responsable, libres de pesticidas y con envases de bajo impacto ambiental.',
    enlace: '/productos#alimentos-organicos',
    imagenes: [
      {
        src: '/image/EcoAlimentos%20Org%C3%A1nicos-1.png',
        alt: 'Alimentos orgánicos de EcoMarket',
      },
      {
        src: '/image/EcoAlimentos%20Org%C3%A1nicos-2.png',
        alt: 'Productos y alimentos orgánicos',
      },
    ],
  },
];

const articulos = [
  {
    titulo: '5 formas de reducir el plástico en tu rutina diaria',
    resumen:
      'Pequeños cambios como usar bolsas reutilizables, elegir envases a granel y evitar botellas desechables ayudan a disminuir el plástico que consumes cada día.',
    enlace: '/blog#articulo-reducir-residuos',
  },
  {
    titulo: '¿Qué significa realmente el sello Cruelty-Free?',
    resumen:
      'Un producto Cruelty-Free es aquel que no fue testeado en animales en ninguna etapa de su elaboración, una forma sencilla de elegir de manera más responsable.',
    enlace: '/blog#articulo-productos-ecologicos',
  },
];

export default function Inicio() {
  return (
    <>
      <header className="header-content container text-center py-5">
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
      </header>

      {categorias.map((categoria) => (
        <section key={categoria.nombre} className="eco productos container py-5">
          <div className="row align-items-center g-4">
            <div className={`eco-1 col-md-6 ${categoria.invertida ? 'order-md-2' : ''}`}>
              <h2>
                <span>Eco</span>
                {categoria.nombre}
              </h2>
              <p>{categoria.descripcion}</p>
              <Link to={categoria.enlace} className="btn-2 btn btn-outline-success">
                Ver Productos
              </Link>
            </div>

            <div
              className={`eco-2 col-md-6 d-flex flex-wrap gap-3 ${categoria.invertida ? 'order-md-1' : ''}`}
            >
              {categoria.imagenes.map((imagen, i) => (
                <img
                  key={imagen.src}
                  className={`img-${i + 1} img-fluid rounded shadow-sm`}
                  src={imagen.src}
                  alt={imagen.alt}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="blog" className="eco blog container py-5">
        <h2 className="text-center mb-4">
          <span>Eco</span>Blog
        </h2>

        <div className="row g-4">
          {articulos.map((articulo) => (
            <div key={articulo.titulo} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5">{articulo.titulo}</h3>
                  <p className="card-text">{articulo.resumen}</p>
                  <Link to={articulo.enlace} className="btn btn-outline-success">
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/blog" className="btn btn-success">
            Ver todos los artículos
          </Link>
        </div>
      </section>
    </>
  );
}
