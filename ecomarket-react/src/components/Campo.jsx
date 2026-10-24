/**
 * Un campo de formulario con su mensaje de error y su zona de ayuda.
 * Antes el Validador creaba estos <div> con document.createElement;
 * ahora están escritos en JSX y se muestran según el estado.
 *
 * Props:
 *   etiqueta  -> texto (o JSX) del <label>
 *   control   -> 'input' (por defecto), 'textarea' o 'select'
 *   datos     -> lo que devuelve form.campo('id') del hook useValidacion
 *   children  -> las <option> cuando control es 'select'
 *   ...resto  -> otros atributos: type, placeholder, autoComplete, rows...
 */
export default function Campo({
  etiqueta,
  control = 'input',
  datos,
  children,
  ...resto
}) {
  const { id, valor, clase, estado, mensaje, sugerencia, contador } = datos;

  const propsControl = {
    id,
    value: valor,
    onChange: datos.onChange,
    onBlur: datos.onBlur,
    ref: datos.referencia,
    'aria-invalid': estado ? String(estado === 'invalido') : undefined,
    'aria-describedby': `${id}-error`,
    ...resto,
  };

  // Clase del contador: amarillo sobre el 90 % y rojo si se pasa del máximo.
  let claseContador = 'form-text';
  if (contador && valor.length > contador) claseContador = 'form-text text-danger';
  else if (contador && valor.length > contador * 0.9)
    claseContador = 'form-text text-warning';

  return (
    <>
      <label htmlFor={id} className="form-label">
        {etiqueta}
      </label>

      {control === 'select' && (
        <select className={`form-select ${clase}`} {...propsControl}>
          {children}
        </select>
      )}
      {control === 'textarea' && (
        <textarea className={`form-control ${clase}`} {...propsControl} />
      )}
      {control === 'input' && (
        <input type="text" className={`form-control ${clase}`} {...propsControl} />
      )}

      <div className="invalid-feedback" id={`${id}-error`} role="alert">
        {mensaje}
      </div>

      {/* Zona de ayuda: sugerencia de correo o contador de caracteres. */}
      {sugerencia ? (
        <div className="form-text" id={`${id}-ayuda`}>
          <span>¿Quisiste decir </span>
          <button
            type="button"
            className="btn btn-link btn-sm p-0 align-baseline"
            onClick={datos.onSugerencia}
          >
            {sugerencia}
          </button>
          ?
        </div>
      ) : (
        <div className={claseContador} id={`${id}-ayuda`}>
          {contador ? `${valor.length} / ${contador} caracteres` : ''}
        </div>
      )}
    </>
  );
}
