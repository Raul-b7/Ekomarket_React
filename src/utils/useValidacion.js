/**
 * Hook de validación de formularios (reemplaza a js/validador.js original).
 *
 * Antes: el Validador buscaba los campos en el HTML (data-reglas) y les cambiaba
 * clases con classList. En React no tocamos el DOM a mano: guardamos los valores
 * y los errores en estado (useState) y React vuelve a dibujar el formulario.
 *
 * Se mantiene el mismo comportamiento:
 *   - valida al salir del campo (blur);
 *   - mientras escribes, solo revalida si el campo ya estaba en rojo;
 *   - un campo opcional vacío queda neutro (ni verde ni rojo);
 *   - sugiere correcciones de correo y formatea el teléfono;
 *   - contador de caracteres y resumen "Faltan N campos";
 *   - al enviar, lleva el foco al primer campo con error.
 *
 * Uso: const form = useValidacion({ email: { reglas: 'requerido email', etiqueta: 'El correo' } });
 */
import { useRef, useState } from 'react';
import { REGLAS, FORMATOS } from './validaciones';

// Reglas que sí se revisan con el campo vacío; el resto se salta si no hay nada escrito.
const REGLAS_SOBRE_VACIO = ['requerido', 'seleccion'];

export default function useValidacion(config, mensajeExito) {
  const ids = Object.keys(config);

  // Un objeto { idCampo: valor } con lo que la persona escribió.
  const [valores, setValores] = useState(() =>
    Object.fromEntries(ids.map((id) => [id, ''])),
  );
  // { idCampo: { estado: 'valido' | 'invalido' | null, mensaje, sugerencia } }
  const [revision, setRevision] = useState({});
  // Mensaje grande bajo el botón: { texto, tipo: 'danger' | 'success' | 'info' }
  const [aviso, setAviso] = useState(null);
  // useRef guarda las referencias a los <input> para poder hacer focus().
  const referencias = useRef({});

  // Evalúa un valor contra todas las reglas del campo (igual que Validador.evaluar).
  function evaluar(id, valor) {
    const { reglas, etiqueta = 'Este campo' } = config[id];
    let sugerencia = null;

    for (const declarada of reglas.trim().split(/\s+/)) {
      const [nombre, parametro] = declarada.split(':');
      const regla = REGLAS[nombre];

      if (!regla) continue;
      if (valor.trim() === '' && !REGLAS_SOBRE_VACIO.includes(nombre)) continue;

      const resultado = regla(valor, parametro, etiqueta);
      if (!resultado.valido) {
        return { valido: false, mensaje: resultado.mensaje };
      }
      if (resultado.sugerencia) sugerencia = resultado.sugerencia;
    }
    return { valido: true, sugerencia };
  }

  // Revisa un campo y guarda el resultado para que se vea en pantalla.
  function revisar(id, valor = valores[id]) {
    const resultado = evaluar(id, valor);
    const obligatorio = REGLAS_SOBRE_VACIO.some((regla) =>
      config[id].reglas.includes(regla),
    );

    let nuevo;
    if (valor.trim() === '' && !obligatorio) {
      nuevo = { estado: null, mensaje: '', sugerencia: null };
    } else if (resultado.valido) {
      nuevo = { estado: 'valido', mensaje: '', sugerencia: resultado.sugerencia };
    } else {
      nuevo = { estado: 'invalido', mensaje: resultado.mensaje, sugerencia: null };
    }

    // Se usa la forma con función para no perder cambios de otros campos.
    setRevision((anterior) => ({ ...anterior, [id]: nuevo }));
    return resultado.valido;
  }

  function cambiarValor(id, valorEscrito) {
    const formato = FORMATOS[config[id].formato];
    const valor = formato ? formato(valorEscrito) : valorEscrito;

    setValores((anterior) => ({ ...anterior, [id]: valor }));

    // Solo se revalida mientras se escribe si el campo ya estaba en error.
    if (revision[id]?.estado === 'invalido') {
      revisar(id, valor);
    } else if (revision[id]?.sugerencia) {
      // Si cambia el texto, la sugerencia anterior ya no aplica.
      setRevision((anterior) => ({
        ...anterior,
        [id]: { ...anterior[id], sugerencia: null },
      }));
    }
  }

  // Aplica la corrección sugerida ("¿Quisiste decir ...?") con un clic.
  function aplicarSugerencia(id) {
    const sugerencia = revision[id]?.sugerencia;
    setValores((anterior) => ({ ...anterior, [id]: sugerencia }));
    revisar(id, sugerencia);
    referencias.current[id]?.focus();
  }

  // Marca varios campos en rojo sin mensaje propio (lo usa el login).
  function marcarInvalidos(lista) {
    setRevision((anterior) => {
      const copia = { ...anterior };
      lista.forEach((id) => {
        copia[id] = { estado: 'invalido', mensaje: '', sugerencia: null };
      });
      return copia;
    });
  }

  // Cuántos campos faltan: se calcula en cada render, no necesita estado propio.
  const pendientes = ids.filter((id) => !evaluar(id, valores[id]).valido).length;

  // Maneja el submit. "alEnviar" es un paso extra opcional (por ejemplo, revisar
  // credenciales); si devuelve false, se queda el aviso que ese paso haya puesto.
  function enviar(evento, alEnviar) {
    evento.preventDefault();

    let primerError = null;
    ids.forEach((id) => {
      if (!revisar(id) && !primerError) primerError = id;
    });

    if (primerError) {
      const campo = referencias.current[primerError];
      campo?.focus();
      campo?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setAviso({
        texto: 'Revisa los campos marcados en rojo antes de continuar.',
        tipo: 'danger',
      });
      return;
    }

    if (alEnviar && alEnviar() === false) return;

    setAviso({
      texto: mensajeExito || '¡Listo! Los datos fueron validados correctamente.',
      tipo: 'success',
    });
  }

  // Devuelve todo lo que el componente <Campo> necesita para dibujar un campo.
  function campo(id) {
    const { estado, mensaje = '', sugerencia = null } = revision[id] || {};
    let clase = '';
    if (estado === 'valido') clase = 'is-valid';
    if (estado === 'invalido') clase = 'is-invalid';

    return {
      id,
      valor: valores[id],
      clase,
      estado,
      mensaje,
      sugerencia,
      contador: config[id].contador,
      referencia: (elemento) => (referencias.current[id] = elemento),
      onChange: (evento) => cambiarValor(id, evento.target.value),
      onBlur: () => revisar(id),
      onSugerencia: () => aplicarSugerencia(id),
    };
  }

  // Lleva el cursor a un campo (por ejemplo, a la contraseña después de un error).
  function enfocar(id) {
    referencias.current[id]?.focus();
  }

  return {
    valores,
    campo,
    enviar,
    pendientes,
    aviso,
    setAviso,
    marcarInvalidos,
    cambiarValor,
    enfocar,
  };
}
