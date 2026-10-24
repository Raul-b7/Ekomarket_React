/**
 * App: el "cerebro" del sitio.
 *
 * 1. Define las rutas: cada antiguo archivo .html ahora es una página en src/pages.
 * 2. Guarda el carrito y la sesión con useState, porque los usan varias páginas
 *    (el menú muestra el contador y el saludo; Productos agrega; Carrito modifica).
 * 3. Pasa esos datos y funciones a las páginas mediante props.
 */
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Carrito from './pages/Carrito';
import { CLAVE_CARRITO, CLAVE_SESION, guardar, leerGuardado } from './utils/tienda';

export default function App() {
  // El valor inicial se lee de localStorage, así el carrito sobrevive a una recarga.
  const [carrito, setCarrito] = useState(() => {
    const guardado = leerGuardado(CLAVE_CARRITO, []);
    return Array.isArray(guardado) ? guardado : [];
  });
  const [sesion, setSesion] = useState(() => {
    const guardado = leerGuardado(CLAVE_SESION, null);
    return guardado && guardado.email ? guardado : null;
  });

  // useEffect: cada vez que cambia el carrito o la sesión, se guarda en localStorage.
  useEffect(() => guardar(CLAVE_CARRITO, carrito), [carrito]);
  useEffect(() => guardar(CLAVE_SESION, sesion), [sesion]);

  // Al cambiar de página: si la dirección trae #ancla, baja hasta esa sección;
  // si no, vuelve arriba (como pasaba al abrir un .html nuevo).
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const irAlAncla = () =>
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    irAlAncla();

    // Las fotos pesan bastante: mientras cargan, empujan el contenido hacia abajo.
    // Por eso se vuelve a bajar a la sección cada vez que termina de cargar una.
    const pendientes = [...document.images].filter((imagen) => !imagen.complete);
    pendientes.forEach((imagen) => imagen.addEventListener('load', irAlAncla));
    // Limpieza: al cambiar de página se quitan esos "escuchadores".
    return () =>
      pendientes.forEach((imagen) => imagen.removeEventListener('load', irAlAncla));
  }, [pathname, hash]);

  // ---- Funciones del carrito (antes: objeto Carrito de js/tienda.js) ----

  // Agrega un producto o suma 1 a su cantidad si ya estaba.
  function agregarAlCarrito(producto) {
    setCarrito((anterior) => {
      const existe = anterior.some((item) => item.id === producto.id);
      if (existe) {
        return anterior.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item,
        );
      }
      const { id, nombre, precio, imagen } = producto;
      return [...anterior, { id, nombre, precio, imagen, cantidad: 1 }];
    });
  }

  // Suma o resta cantidad. Al llegar a 0 el producto sale del carrito.
  function cambiarCantidad(id, paso) {
    setCarrito((anterior) =>
      anterior
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + paso } : item,
        )
        .filter((item) => item.cantidad > 0),
    );
  }

  function eliminarDelCarrito(id) {
    setCarrito((anterior) => anterior.filter((item) => item.id !== id));
  }

  // Cantidad total de unidades: es lo que muestra el botón "Carrito (n)".
  const unidades = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <>
      <Header
        unidades={unidades}
        sesion={sesion}
        onCerrarSesion={() => setSesion(null)}
      />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos onAgregar={agregarAlCarrito} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/login"
          element={<Login sesion={sesion} onIniciarSesion={setSesion} />}
        />
        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              onCambiarCantidad={cambiarCantidad}
              onEliminar={eliminarDelCarrito}
            />
          }
        />
        {/* Cualquier dirección desconocida muestra el inicio. */}
        <Route path="*" element={<Inicio />} />
      </Routes>
      <Footer />
    </>
  );
}
