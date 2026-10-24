/**
 * Funciones y constantes de la tienda (vienen de js/tienda.js y js/sesion.js).
 *
 * Aquí solo quedan funciones "puras": reciben datos y devuelven un resultado.
 * El carrito y la sesión ahora viven en el estado de App.jsx (useState),
 * y se guardan en localStorage con las MISMAS claves del proyecto original.
 */

export const CLAVE_CARRITO = 'ecomarket-carrito';
export const CLAVE_SESION = 'ecomarket-sesion';
export const CLAVE_TEMA = 'ecomarket-tema';

// Costo de envío del pedido, en pesos.
export const COSTO_ENVIO = 2990;

// Cupones ficticios disponibles y su porcentaje de descuento.
export const CUPONES = {
  ECO10: 0.1,
};

// Única cuenta habilitada del sitio.
// Aviso: sitio sin servidor. Sirve para la demo, pero no es seguridad real.
const CUENTAS = [
  {
    email: 'admin@gmail.com',
    password: 'Admin123',
    nombre: 'Administrador',
  },
];

// Convierte 20450 en "$20.450".
export function formatearPrecio(valor) {
  return '$' + valor.toLocaleString('es-CL');
}

// Busca la cuenta que coincida. Devuelve null si el correo o la clave fallan.
export function buscarCuenta(email, password) {
  const correo = email.trim().toLowerCase();
  return (
    CUENTAS.find((cuenta) => cuenta.email === correo && cuenta.password === password) ||
    null
  );
}

// Lee un dato guardado en localStorage. Si no existe o está corrupto, usa el valor por defecto.
export function leerGuardado(clave, porDefecto) {
  try {
    const guardado = JSON.parse(localStorage.getItem(clave));
    return guardado ?? porDefecto;
  } catch {
    return porDefecto;
  }
}

// Guarda un dato; si es null lo borra. En modo privado puede fallar y no pasa nada.
export function guardar(clave, valor) {
  try {
    if (valor === null) {
      localStorage.removeItem(clave);
    } else {
      localStorage.setItem(clave, JSON.stringify(valor));
    }
  } catch {
    // Almacenamiento no disponible: el dato solo durará mientras la página esté abierta.
  }
}
