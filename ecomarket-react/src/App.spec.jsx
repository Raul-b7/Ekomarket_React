import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

function renderEn(ruta) {
  return render(
    <MemoryRouter initialEntries={[ruta]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  it('muestra la página de inicio en la ruta /', () => {
    renderEn('/');

    expect(screen.getByRole('heading', { name: 'Bienvenido a EcoMarket' })).toBeTruthy();
  });

  it('muestra las tres categorías y los dos artículos del blog', () => {
    renderEn('/');

    expect(screen.getAllByRole('link', { name: 'Ver Productos' }).length).toBe(3);
    expect(screen.getAllByRole('link', { name: 'Leer más' }).length).toBe(2);
  });

  it('el navbar enlaza a las páginas del sitio', () => {
    renderEn('/');

    const productos = screen.getByRole('link', { name: 'Productos' });
    expect(productos.getAttribute('href')).toBe('/productos');
  });
});
