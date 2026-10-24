/**
 * Contacto (antes contacto.html + js/contacto.js).
 * Las reglas que antes estaban en data-reglas ahora se declaran en este objeto.
 */
import EncabezadoPagina from '../components/EncabezadoPagina';
import Campo from '../components/Campo';
import EstadoFormulario from '../components/EstadoFormulario';
import useValidacion from '../utils/useValidacion';

const camposContacto = {
  nombre: { etiqueta: 'El nombre', reglas: 'requerido soloLetras minimo:3 maximo:60' },
  email: { etiqueta: 'El correo', reglas: 'requerido email' },
  telefono: { etiqueta: 'El teléfono', reglas: 'telefono', formato: 'telefono' },
  motivo: { etiqueta: 'Motivo de contacto', reglas: 'seleccion' },
  asunto: { etiqueta: 'El asunto', reglas: 'requerido minimo:5 maximo:80' },
  mensaje: {
    etiqueta: 'El mensaje',
    reglas: 'requerido minimo:20 maximo:500',
    contador: 500,
  },
};

const MENSAJE_EXITO =
  '¡Gracias por escribirnos! Te responderemos dentro de las próximas 24 horas.';

// Asterisco rojo de los campos obligatorios.
const obligatorio = <span className="text-danger">*</span>;

export default function Contacto() {
  const form = useValidacion(camposContacto, MENSAJE_EXITO);

  return (
    <main>
      <EncabezadoPagina
        titulo="Contáctanos"
        descripcion="¿Tienes dudas sobre nuestros productos o tu pedido? Escríbenos y te respondemos a la brevedad."
      />

      <section className="eco contacto container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title h5 mb-1">Envíanos un mensaje</h2>
                <p className="card-text text-muted small mb-4">
                  Los campos marcados con <span className="text-danger">*</span> son
                  obligatorios.
                </p>

                {/* noValidate: la validación la hace nuestro hook, no el navegador. */}
                <form
                  id="form-contacto"
                  className="row g-3"
                  noValidate
                  onSubmit={(evento) => form.enviar(evento)}
                >
                  <div className="col-12 col-md-6">
                    <Campo
                      etiqueta={<>Nombre completo {obligatorio}</>}
                      datos={form.campo('nombre')}
                      autoComplete="name"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <Campo
                      etiqueta={<>Correo electrónico {obligatorio}</>}
                      datos={form.campo('email')}
                      autoComplete="email"
                      placeholder="nombre@gmail.com"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <Campo
                      etiqueta={
                        <>
                          Teléfono <span className="text-muted">(opcional)</span>
                        </>
                      }
                      datos={form.campo('telefono')}
                      autoComplete="tel"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <Campo
                      etiqueta={<>Motivo de contacto {obligatorio}</>}
                      control="select"
                      datos={form.campo('motivo')}
                    >
                      <option value="">Elige un motivo</option>
                      <option value="productos">Consulta sobre productos</option>
                      <option value="pedido">Estado de mi pedido</option>
                      <option value="despacho">Despacho y cobertura</option>
                      <option value="sugerencia">Sugerencia o reclamo</option>
                      <option value="otro">Otro</option>
                    </Campo>
                  </div>

                  <div className="col-12">
                    <Campo
                      etiqueta={<>Asunto {obligatorio}</>}
                      datos={form.campo('asunto')}
                    />
                  </div>

                  <div className="col-12">
                    <Campo
                      etiqueta={<>Mensaje {obligatorio}</>}
                      control="textarea"
                      rows={5}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      datos={form.campo('mensaje')}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-success w-100">
                      Enviar mensaje
                    </button>
                    <EstadoFormulario pendientes={form.pendientes} aviso={form.aviso} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
