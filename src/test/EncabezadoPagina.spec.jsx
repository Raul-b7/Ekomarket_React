import { render, screen } from '@testing-library/react';
import EncabezadoPagina from '../components/EncabezadoPagina';

describe('Componente EncabezadoPagina', () => {
  it('muestra el título y la descripción', () => {
    render(
      <EncabezadoPagina
        titulo="Nuestros Productos"
        descripcion="Productos ecológicos organizados por categoría."
      />,
    );

    expect(
      screen.getByRole('heading', { level: 1, name: 'Nuestros Productos' }),
    ).toBeTruthy();
    expect(
      screen.getByText('Productos ecológicos organizados por categoría.'),
    ).toBeTruthy();
  });

  it('usa el id y muestra el contenido extra que recibe', () => {
    const { container } = render(
      <EncabezadoPagina titulo="Blog" descripcion="Artículos" id="top">
        <span>Etiqueta</span>
      </EncabezadoPagina>,
    );

    expect(container.querySelector('#top')).not.toBeNull();
    expect(screen.getByText('Etiqueta')).toBeTruthy();
  });
});
