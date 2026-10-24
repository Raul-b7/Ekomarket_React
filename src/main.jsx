import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Bootstrap ahora se instala con npm (antes venía por CDN en cada .html).
import 'bootstrap/dist/css/bootstrap.min.css';
// El CSS propio se carga después de Bootstrap para poder personalizarlo.
import './index.css';
import App from './App';

// BrowserRouter permite que App cambie de "página" sin recargar el navegador.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
