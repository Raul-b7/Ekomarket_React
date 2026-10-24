/**
 * Mensajes bajo el botón de envío de un formulario (Contacto y Login).
 *
 * Props:
 *   pendientes -> cuántos campos faltan ("Faltan 3 campos por completar.")
 *   aviso      -> { texto, tipo } o null; tipo es 'danger', 'success' o 'info'
 */
export default function EstadoFormulario({ pendientes, aviso }) {
  let resumen;
  if (pendientes === 0) resumen = 'Todo listo para continuar.';
  else if (pendientes === 1) resumen = 'Falta 1 campo por completar.';
  else resumen = `Faltan ${pendientes} campos por completar.`;

  return (
    <>
      <p
        className={`small mt-2 mb-0 ${pendientes === 0 ? 'text-success' : 'text-muted'}`}
      >
        {resumen}
      </p>
      <div
        className={aviso ? `alert alert-${aviso.tipo} py-2 small` : 'mt-3'}
        role="status"
      >
        {aviso?.texto}
      </div>
    </>
  );
}
