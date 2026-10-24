// Reglas de validación de EcoMarket (copiadas de js/validaciones.js original).
//
// Este archivo casi no cambió en la migración: las reglas ya eran funciones
// puras (no tocan el DOM), así que React las puede usar tal cual.
// Lo único nuevo es el "export" del final, para importarlas desde otros archivos.
//
// Cada regla es una función pura: recibe el valor escrito por la persona y
// devuelve un objeto { valido, mensaje, sugerencia }. No tocan el DOM, así que
// se pueden reutilizar en cualquier formulario y probar por separado.
//
//   valido     -> true si el valor pasa la regla
//   mensaje    -> texto de error a mostrar cuando no pasa
//   sugerencia -> (opcional) valor corregido que se le ofrece a la persona

// Dominios de correo más usados, para detectar errores de tipeo.
const DOMINIOS_CONOCIDOS = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'icloud.com',
  'live.cl',
  'duocuc.cl',
];

// Distancia de Levenshtein: cuántas letras hay que cambiar para pasar de a a b.
// Se usa para saber si "gmail.con" se parece lo suficiente a "gmail.com".
function distancia(a, b) {
  const filas = [];

  for (let i = 0; i <= a.length; i++) {
    filas[i] = [i];
  }

  for (let j = 0; j <= b.length; j++) {
    filas[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1;
      filas[i][j] = Math.min(
        filas[i - 1][j] + 1, // borrar
        filas[i][j - 1] + 1, // insertar
        filas[i - 1][j - 1] + costo, // sustituir
      );
    }
  }

  return filas[a.length][b.length];
}

// Busca un dominio conocido parecido al que se escribió. Devuelve null si no hay.
function dominioParecido(dominio) {
  for (const conocido of DOMINIOS_CONOCIDOS) {
    if (dominio === conocido) {
      return null;
    }
    if (distancia(dominio, conocido) <= 2) {
      return conocido;
    }
  }
  return null;
}

// Limpia un RUT dejando solo números y el dígito verificador: "12.345.678-K".
function limpiarRut(valor) {
  return valor.replace(/[^0-9kK]/g, '').toUpperCase();
}

// Calcula el dígito verificador de un RUT con el algoritmo módulo 11.
function digitoVerificador(cuerpo) {
  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = 11 - (suma % 11);

  if (resto === 11) {
    return '0';
  }
  if (resto === 10) {
    return 'K';
  }
  return String(resto);
}

const REGLAS = {
  requerido: function (valor, parametro, etiqueta) {
    if (valor.trim() === '') {
      return { valido: false, mensaje: etiqueta + ' es un campo obligatorio.' };
    }
    return { valido: true };
  },

  email: function (valor, parametro, etiqueta) {
    const texto = valor.trim();

    if (!texto.includes('@')) {
      return {
        valido: false,
        mensaje: 'El correo debe incluir una arroba (@). Ejemplo: nombre@gmail.com',
      };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(texto)) {
      return {
        valido: false,
        mensaje: etiqueta + ' no tiene un formato válido. Ejemplo: nombre@gmail.com',
      };
    }

    // El formato es correcto, pero el dominio puede tener un error de tipeo.
    const partes = texto.split('@');
    const correccion = dominioParecido(partes[1].toLowerCase());

    if (correccion) {
      return {
        valido: true,
        sugerencia: partes[0] + '@' + correccion,
      };
    }

    return { valido: true };
  },

  telefono: function (valor, parametro, etiqueta) {
    const digitos = valor.replace(/[^0-9]/g, '');

    // Se acepta con o sin el prefijo 56 del país.
    const nueveDigitos = digitos.startsWith('56') ? digitos.slice(2) : digitos;

    if (nueveDigitos.length !== 9 || !nueveDigitos.startsWith('9')) {
      return {
        valido: false,
        mensaje:
          etiqueta +
          ' debe ser un celular de 9 dígitos que parta con 9. Ejemplo: +56 9 1234 5678',
      };
    }

    return { valido: true };
  },

  rut: function (valor, parametro, etiqueta) {
    const limpio = limpiarRut(valor);

    if (limpio.length < 8) {
      return {
        valido: false,
        mensaje: etiqueta + ' está incompleto. Ejemplo: 12.345.678-5',
      };
    }

    const cuerpo = limpio.slice(0, -1);
    const digito = limpio.slice(-1);

    if (!/^[0-9]+$/.test(cuerpo)) {
      return {
        valido: false,
        mensaje: etiqueta + ' solo puede llevar números y un dígito verificador.',
      };
    }

    if (digitoVerificador(cuerpo) !== digito) {
      return {
        valido: false,
        mensaje:
          'El dígito verificador no corresponde. Revisa si escribiste bien el RUT.',
      };
    }

    return { valido: true };
  },

  soloLetras: function (valor, parametro, etiqueta) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/.test(valor.trim())) {
      return { valido: false, mensaje: etiqueta + ' solo puede contener letras.' };
    }
    return { valido: true };
  },

  minimo: function (valor, parametro, etiqueta) {
    const minimo = Number(parametro);
    const largo = valor.trim().length;

    if (largo < minimo) {
      return {
        valido: false,
        mensaje:
          etiqueta +
          ' debe tener al menos ' +
          minimo +
          ' caracteres (llevas ' +
          largo +
          ').',
      };
    }
    return { valido: true };
  },

  maximo: function (valor, parametro, etiqueta) {
    const maximo = Number(parametro);
    const largo = valor.trim().length;

    if (largo > maximo) {
      return {
        valido: false,
        mensaje:
          etiqueta +
          ' no puede superar los ' +
          maximo +
          ' caracteres (llevas ' +
          largo +
          ').',
      };
    }
    return { valido: true };
  },

  // Contraseña: al menos 8 caracteres, con una letra y un número. Solo revisa
  // la forma de lo escrito; quién tiene acceso lo decide la sesión.
  password: function (valor, parametro, etiqueta) {
    if (valor.length < 8) {
      return {
        valido: false,
        mensaje:
          etiqueta + ' debe tener al menos 8 caracteres (llevas ' + valor.length + ').',
      };
    }

    if (!/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/.test(valor)) {
      return { valido: false, mensaje: etiqueta + ' debe incluir al menos una letra.' };
    }

    if (!/[0-9]/.test(valor)) {
      return { valido: false, mensaje: etiqueta + ' debe incluir al menos un número.' };
    }

    return { valido: true };
  },

  seleccion: function (valor, parametro, etiqueta) {
    if (valor === '') {
      return {
        valido: false,
        mensaje: 'Debes elegir una opción en ' + etiqueta.toLowerCase() + '.',
      };
    }
    return { valido: true };
  },
};

// Formatos que se aplican mientras la persona escribe.
const FORMATOS = {
  // 912345678 -> +56 9 1234 5678
  telefono: function (valor) {
    let digitos = valor.replace(/[^0-9]/g, '');

    if (digitos.startsWith('56')) {
      digitos = digitos.slice(2);
    }

    digitos = digitos.slice(0, 9);

    if (digitos === '') {
      return '';
    }

    let salida = '+56 ' + digitos.slice(0, 1);

    if (digitos.length > 1) {
      salida += ' ' + digitos.slice(1, 5);
    }
    if (digitos.length > 5) {
      salida += ' ' + digitos.slice(5, 9);
    }

    return salida;
  },

  // 123456785 -> 12.345.678-5
  rut: function (valor) {
    const limpio = limpiarRut(valor).slice(0, 9);

    if (limpio.length <= 1) {
      return limpio;
    }

    const cuerpo = limpio.slice(0, -1);
    const digito = limpio.slice(-1);

    return cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + digito;
  },
};

export { REGLAS, FORMATOS };
