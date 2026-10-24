import { render,screen,cleanup,} from "@testing-library/react";

 

import Producto from "../components/Producto";

 

describe("Componente Producto", () => {

 afterEach(() => {

  cleanup();

 });

 

 it("muestra el nombre del producto", () => {

  render(

   <Producto

    nombre="Zapatillas"

    imagen="https://http2.mlstatic.com/D_NQ_NP_2X_694848-MLC106599473613_022026-F-zapatillas-unisex-adidas-casual-daily-40-negro.webp"

    precio={599990}

   />

  );

 

  const titulo = screen.getByRole("heading", {

   name: "Zapatillas",

  });

 

  expect(titulo.textContent).toBe("Zapatillas");

 });

 

 it("muestra el botón para agregar al carrito", () => {

  render(

   <Producto

    nombre="Zapatillas"

    imagen="https://http2.mlstatic.com/D_NQ_NP_2X_694848-MLC106599473613_022026-F-zapatillas-unisex-adidas-casual-daily-40-negro.webp"

    precio={599990}

   />

  );

 

  const boton = screen.getByRole("button", {

   name: "Agregar al carrito",

  });

 

  expect(boton.textContent.trim()).toBe(

   "Agregar al carrito"

  );

  expect(boton.disabled).toBeFalse();

 });

});

 