import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.jsx';
import { CLAVE_CARRITO, CLAVE_SESION } from '../utils/tienda';

function renderEn(ruta) {
  return render(
    <MemoryRouter initialEntries={[ruta]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  afterEach(() => {
    localStorage.removeItem(CLAVE_CARRITO);
    localStorage.removeItem(CLAVE_SESION);
  });

  it('muestra la página de inicio en la ruta /', () => {
    renderEn('/');

    expect(screen.getByRole('heading', { name: 'Bienvenido a EcoMarket' })).toBeTruthy();
  });

  it('muestra las tres categorías y los dos artículos del blog', () => {
    renderEn('/');

    expect(screen.getAllByRole('link', { name: 'Ver Productos' }).length).toBe(3);
    expect(screen.getAllByRole('link', { name: 'Leer más' }).length).toBe(2);
  });

  it('el menú enlaza a las páginas del sitio', () => {
    renderEn('/');

    const productos = screen.getByRole('link', { name: 'Productos' });
    expect(productos.getAttribute('href')).toBe('/productos');
  });

  it('recupera el carrito y la sesión guardados en localStorage', () => {
    localStorage.setItem(
      CLAVE_CARRITO,
      JSON.stringify([
        { id: 'a', cantidad: 2 },
        { id: 'b', cantidad: 1 },
      ]),
    );
    localStorage.setItem(
      CLAVE_SESION,
      JSON.stringify({ email: 'admin@gmail.com', nombre: 'Administrador' }),
    );

    renderEn('/');

    expect(screen.getByRole('link', { name: 'Carrito (3)' })).toBeTruthy();
    expect(screen.getByText('Hola, Administrador')).toBeTruthy();
  });
});
