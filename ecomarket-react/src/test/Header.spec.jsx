import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

function renderHeader(props) {
  return render(
    <MemoryRouter>
      <Header unidades={0} sesion={null} onCerrarSesion={() => {}} {...props} />
    </MemoryRouter>,
  );
}

describe('Componente Header', () => {
  it('muestra la cantidad de unidades en el botón del carrito', () => {
    renderHeader({ unidades: 3 });

    expect(screen.getByRole('link', { name: 'Carrito (3)' })).toBeTruthy();
  });

  it('sin sesión muestra el enlace para iniciar sesión', () => {
    renderHeader();

    const login = screen.getByRole('link', { name: 'Iniciar sesión' });
    expect(login.getAttribute('href')).toBe('/login');
    expect(screen.queryByRole('button', { name: 'Cerrar sesión' })).toBeNull();
  });

  it('con sesión saluda y permite cerrarla', () => {
    const onCerrarSesion = jasmine.createSpy('onCerrarSesion');
    renderHeader({
      sesion: { email: 'admin@gmail.com', nombre: 'Administrador' },
      onCerrarSesion,
    });

    expect(screen.getByText('Hola, Administrador')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar sesión' }));
    expect(onCerrarSesion).toHaveBeenCalledTimes(1);
  });

  it('el botón hamburguesa abre el menú y un enlace lo cierra', () => {
    const { container } = renderHeader();
    const boton = screen.getByRole('button', { name: 'Abrir menú' });
    const menu = container.querySelector('#menuNav');

    expect(menu.classList.contains('show')).toBeFalse();

    fireEvent.click(boton);
    expect(menu.classList.contains('show')).toBeTrue();
    expect(boton.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(screen.getByRole('link', { name: 'Blog' }));
    expect(menu.classList.contains('show')).toBeFalse();
  });

  it('los enlaces de login y carrito también cierran el menú', () => {
    const { container } = renderHeader();
    const boton = screen.getByRole('button', { name: 'Abrir menú' });
    const menu = container.querySelector('#menuNav');

    fireEvent.click(boton);
    fireEvent.click(screen.getByRole('link', { name: 'Iniciar sesión' }));
    expect(menu.classList.contains('show')).toBeFalse();

    fireEvent.click(boton);
    fireEvent.click(screen.getByRole('link', { name: 'Carrito (0)' }));
    expect(menu.classList.contains('show')).toBeFalse();
  });
});
