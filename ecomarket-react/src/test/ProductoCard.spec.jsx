import { act, render, screen, cleanup, fireEvent } from '@testing-library/react';
import ProductoCard from '../components/ProductoCard';

// Pruebas al estilo de EjemploSitioFull (Karma + Jasmine + Testing Library).
describe('Componente ProductoCard', () => {
  afterEach(() => {
    cleanup();
  });

  /* Caso de Prueba 1: muestra el nombre y el precio con formato chileno */
  it('muestra el nombre y el precio del producto', () => {
    render(
      <ProductoCard
        nombre="Miel orgánica 500g"
        descripcion="Miel pura de apicultura orgánica."
        precio={7990}
        imagen="/image/Miel orgánica 500g-1.png"
      />,
    );

    const titulo = screen.getByRole('heading', { name: 'Miel orgánica 500g' });
    expect(titulo.textContent).toBe('Miel orgánica 500g');
    expect(screen.getByText('$7.990')).toBeTruthy();
  });

  /* Caso de Prueba 2: botón "Agregar al carrito" habilitado */
  it('muestra el botón para agregar al carrito', () => {
    render(
      <ProductoCard
        nombre="Quinoa orgánica 500g"
        precio={4990}
        imagen="/image/Quinoa orgánica 500g-1.png"
      />,
    );

    const boton = screen.getByRole('button', { name: 'Agregar al carrito' });
    expect(boton.disabled).toBeFalse();
  });

  /* Caso de Prueba 3: al hacer clic avisa al padre y muestra "Agregado ✓" */
  it('llama a onAgregar y muestra la confirmación', () => {
    const onAgregar = jasmine.createSpy('onAgregar');
    render(
      <ProductoCard
        nombre="Shampoo sólido natural"
        precio={6990}
        imagen="/image/Shampoo sólido natural-1.png"
        onAgregar={onAgregar}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Agregar al carrito' }));

    expect(onAgregar).toHaveBeenCalledTimes(1);
    const boton = screen.getByRole('button', { name: 'Agregado ✓' });
    expect(boton.disabled).toBeTrue();
  });

  /* Caso de Prueba 4: después de 1,2 segundos el botón vuelve a su texto original */
  it('vuelve a mostrar "Agregar al carrito" después de 1,2 segundos', () => {
    jasmine.clock().install();
    try {
      render(
        <ProductoCard
          nombre="Jabón artesanal de avena"
          precio={3490}
          imagen="/image/Jabón artesanal de avena-1.png"
        />,
      );

      fireEvent.click(screen.getByRole('button', { name: 'Agregar al carrito' }));
      expect(screen.getByRole('button', { name: 'Agregado ✓' })).toBeTruthy();

      // act() avisa a React que el temporizador cambió el estado.
      act(() => jasmine.clock().tick(1200));

      const boton = screen.getByRole('button', { name: 'Agregar al carrito' });
      expect(boton.disabled).toBeFalse();
    } finally {
      jasmine.clock().uninstall();
    }
  });
});
