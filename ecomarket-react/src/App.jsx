/**
 * App: el "cerebro" del sitio.
 *
 * 1. Define las rutas: cada antiguo archivo .html ahora es una página en src/pages.
 * 2. Guarda el carrito y la sesión con useState, porque los usan varias páginas
 *    (el menú muestra el contador y el saludo).
 * 3. Pasa esos datos y funciones a las páginas mediante props.
 */
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import { CLAVE_CARRITO, CLAVE_SESION, guardar, leerGuardado } from './utils/tienda';

export default function App() {
  // El valor inicial se lee de localStorage, así el carrito sobrevive a una recarga.
  const [carrito] = useState(() => {
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
      </Routes>
      <Footer />
    </>
  );
}
