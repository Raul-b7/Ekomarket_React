import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
// Con React Router todas las páginas salen de un solo index.html,
// así que no hace falta declarar varias entradas como en EjemploSitioFull (admin.html).
export default defineConfig({
  plugins: [react()],
});
