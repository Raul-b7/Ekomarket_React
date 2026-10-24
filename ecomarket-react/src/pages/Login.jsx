/**
 * Iniciar sesión (antes login.html + js/login.js).
 *
 * Props:
 *   sesion          -> sesión actual (o null)
 *   onIniciarSesion -> función de App que guarda la sesión
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EncabezadoPagina from '../components/EncabezadoPagina';
import Campo from '../components/Campo';
import EstadoFormulario from '../components/EstadoFormulario';
import useValidacion from '../utils/useValidacion';
import { buscarCuenta } from '../utils/tienda';

const camposLogin = {
  email: { etiqueta: 'El correo', reglas: 'requerido email' },
  password: { etiqueta: 'La contraseña', reglas: 'requerido password' },
};

// Milisegundos que se muestra el mensaje de bienvenida antes de ir al inicio.
const ESPERA_REDIRECCION = 1200;

export default function Login({ sesion, onIniciarSesion }) {
  const form = useValidacion(camposLogin);
  const [verClave, setVerClave] = useState(false);
  const [entrando, setEntrando] = useState(false);
  const navigate = useNavigate();

  // Tras un login correcto, espera un momento y vuelve al inicio.
  useEffect(() => {
    if (!entrando) return;
    const temporizador = setTimeout(() => navigate('/'), ESPERA_REDIRECCION);
    return () => clearTimeout(temporizador);
  }, [entrando, navigate]);

  // Paso extra del envío: revisar las credenciales (el formato ya lo revisó el hook).
  function revisarCredenciales() {
    const cuenta = buscarCuenta(form.valores.email, form.valores.password);

    if (!cuenta) {
      form.setAviso({
        texto: 'El correo o la contraseña no son correctos.',
        tipo: 'danger',
      });
      // El error es de la pareja correo/clave: se marcan los dos sin decir cuál falló.
      form.marcarInvalidos(['email', 'password']);
      form.cambiarValor('password', '');
      form.enfocar('password');
      return false;
    }

    onIniciarSesion({ email: cuenta.email, nombre: cuenta.nombre });
    form.setAviso({
      texto: `¡Bienvenido de vuelta, ${cuenta.nombre}! Te llevamos al inicio...`,
      tipo: 'success',
    });
    setEntrando(true);
    return false;
  }

  // Si ya hay sesión y aún no hay otro mensaje, se avisa (se calcula, no se guarda).
  const aviso =
    form.aviso ||
    (sesion
      ? { texto: `Ya tienes una sesión abierta como ${sesion.email}.`, tipo: 'info' }
      : null);

  return (
    <main>
      <EncabezadoPagina
        titulo="Iniciar sesión"
        descripcion="Entra a tu cuenta para revisar tus pedidos y comprar más rápido."
      />

      <section className="eco login container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title h5 mb-1">Accede a tu cuenta</h2>
                <p className="card-text text-muted small mb-4">
                  Todos los campos son obligatorios.
                </p>

                <form
                  id="form-login"
                  className="row g-3"
                  noValidate
                  onSubmit={(evento) => form.enviar(evento, revisarCredenciales)}
                >
                  <div className="col-12">
                    <Campo
                      etiqueta="Correo electrónico"
                      datos={form.campo('email')}
                      autoComplete="username"
                      placeholder="nombre@gmail.com"
                      disabled={entrando}
                    />
                  </div>

                  <div className="col-12">
                    <Campo
                      etiqueta="Contraseña"
                      datos={form.campo('password')}
                      type={verClave ? 'text' : 'password'}
                      autoComplete="current-password"
                      disabled={entrando}
                    />
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="ver-clave"
                        checked={verClave}
                        disabled={entrando}
                        onChange={(evento) => setVerClave(evento.target.checked)}
                      />
                      <label className="form-check-label small" htmlFor="ver-clave">
                        Mostrar contraseña
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-success w-100"
                      disabled={entrando}
                    >
                      Entrar
                    </button>
                    <EstadoFormulario pendientes={form.pendientes} aviso={aviso} />
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
