# EcoMarket React

Tienda de productos ecológicos y sostenibles. Es la migración a **React** del sitio estático EcoMarket 2.0 (HTML + Bootstrap).

## Tecnologías

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/)
- [Vite 8](https://vite.dev/) (servidor de desarrollo y build)
- [Bootstrap 5.3](https://getbootstrap.com/) instalado por npm
- Pruebas con **Karma + Jasmine** y [Testing Library](https://testing-library.com/)
- **oxlint** (lint) y **Prettier** (formato)

## Requisitos

- Node.js 20 o superior
- Google Chrome (Karma lo usa para correr las pruebas)

## Instalación

```bash
git clone https://github.com/Raul-b7/Ekomarket_React.git
cd Ekomarket_React
npm install
```

## Scripts

| Comando                | Qué hace                                                        |
| ---------------------- | --------------------------------------------------------------- |
| `npm run dev`          | Levanta el sitio en `http://localhost:5173` con recarga en vivo |
| `npm run build`        | Genera la versión de producción en `dist/`                      |
| `npm run preview`      | Sirve localmente lo generado en `dist/`                         |
| `npm test`             | Corre las pruebas en Chrome sin ventana y mide cobertura        |
| `npm run lint`         | Revisa el código con oxlint                                     |
| `npm run format`       | Formatea todo el código con Prettier                            |
| `npm run format:check` | Verifica el formato sin modificar archivos                      |

El reporte de cobertura queda en `coverage/html/index.html`.

## Estructura

```
Ekomarket_React/
├── index.html            # Entrada única: React dibuja todo dentro de <div id="root">
├── public/
│   ├── image/            # Fotos de productos y banners
│   └── img/              # Ilustraciones SVG
└── src/
    ├── main.jsx          # Carga Bootstrap y monta <App /> con el router
    ├── index.css         # Estilos propios (se cargan después de Bootstrap)
    ├── App.jsx           # Estado del carrito y la sesión + Header + rutas + Footer
    ├── components/       # Piezas reutilizables (Header, Footer, EncabezadoPagina)
    ├── pages/            # Una página por ruta (Inicio)
    ├── utils/            # Funciones de la tienda (precios, cupones, localStorage)
    └── test/             # Pruebas *.spec.jsx
```

## Rutas

| Ruta         | Página    | Estado    |
| ------------ | --------- | --------- |
| `/`          | Inicio    | Lista     |
| `/productos` | Productos | Pendiente |
| `/blog`      | Blog      | Pendiente |
| `/contacto`  | Contacto  | Pendiente |
| `/carrito`   | Carrito   | Pendiente |

## Convenciones

- Las imágenes de `public/` se referencian desde la raíz: `src="/image/banner-ecomarket-1.png"`.
- Las pruebas van en `src/test/` y terminan en `.spec.jsx`.
- Antes de subir cambios: `npm run lint`, `npm run format:check` y `npm test`.
