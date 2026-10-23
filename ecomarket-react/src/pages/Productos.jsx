/**
 * Catálogo (antes productos.html).
 * Los productos vienen de src/data/productos.json y se agrupan por categoría.
 *
 * Props: onAgregar -> función de App que agrega un producto al carrito.
 */
import productos from '../data/productos.json';
import EncabezadoPagina from '../components/EncabezadoPagina';
import ProductoCard from '../components/ProductoCard';

// El id de cada categoría es el ancla que usan los enlaces "Ver Productos" del inicio.
const categorias = [
  { id: 'hogar-sustentable', nombre: 'Hogar Sustentable' },
  { id: 'cuidado-personal', nombre: 'Cuidado Personal' },
  { id: 'alimentos-organicos', nombre: 'Alimentos Orgánicos' },
];

export default function Productos({ onAgregar }) {
  return (
    <main>
      <EncabezadoPagina
        titulo="Nuestros Productos"
        descripcion="Descubre nuestra selección de productos ecológicos y sostenibles, organizados por categoría."
      />

      {categorias.map((categoria) => (
        <section
          key={categoria.id}
          id={categoria.id}
          className="eco productos container py-5"
        >
          <h2 className="text-center mb-4">
            <span>Eco</span>
            {categoria.nombre}
          </h2>

          <div className="row g-4">
            {/* filter deja solo los productos de esta categoría; map dibuja una tarjeta por cada uno. */}
            {productos
              .filter((producto) => producto.categoria === categoria.id)
              .map((producto) => (
                <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
                  <ProductoCard {...producto} onAgregar={() => onAgregar(producto)} />
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
