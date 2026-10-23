/**
 * Contenido completo de los 8 artículos del blog.
 * Se convirtió desde blog.html original: el texto es el mismo,
 * solo cambian class -> className, etiquetas autocerradas (<img />, <hr />)
 * y los enlaces a otras páginas, que ahora usan <Link> de React Router.
 * Los enlaces internos (#articulo-...) siguen siendo anclas normales.
 */
import { Link } from 'react-router-dom';

export default function ArticulosBlog() {
  return (
    <>
      <hr className="container" />

      {/* ARTÍCULO 1 */}
      <article id="articulo-productos-ecologicos" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">
              Consumo responsable
            </span>
            <h2>¿Qué son los productos ecológicos y por qué elegirlos?</h2>
            <img
              src="/image/banner-ecomarket-1.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Variedad de productos ecológicos y sostenibles de EcoMarket"
            />

            <p>
              Cada vez más personas buscan alternativas para reducir su impacto ambiental
              sin cambiar por completo su estilo de vida. Ahí es donde entran los{' '}
              <strong>productos ecológicos</strong>: opciones pensadas para cuidar el
              medio ambiente desde su origen, su fabricación y su uso diario.
            </p>

            <h3>¿Qué significa que un producto sea ecológico?</h3>
            <p>
              Un producto ecológico es aquel que, en comparación con una alternativa
              convencional, genera un menor impacto ambiental durante su ciclo de vida.
              Esto puede darse usando materiales renovables, reduciendo el uso de
              plástico, evitando químicos agresivos o permitiendo que el producto se
              reutilice en lugar de desecharse después de un solo uso.
            </p>
            <ul>
              <li>
                Están hechos con materiales naturales, reciclados o de origen responsable.
              </li>
              <li>Tienen empaques reducidos o libres de plástico innecesario.</li>
              <li>Están diseñados para durar más tiempo o para ser reutilizados.</li>
              <li>Evitan componentes que dañan el entorno al desecharse.</li>
            </ul>

            <h3>Productos ecológicos vs. productos convencionales</h3>
            <p>
              La diferencia principal no siempre está en el resultado que ofrecen, sino en
              cómo se fabrican y qué sucede con ellos después de usarse. Los productos
              convencionales suelen priorizar el costo y la producción masiva, mientras
              que las alternativas sostenibles buscan materiales renovables o de menor
              impacto, como fibras naturales, madera certificada o materiales reciclados.
              Una parte importante de esa diferencia está también en el empaque: elegir
              compras ecológicas suele significar menos plástico de un solo uso y más
              opciones a granel o con envases reutilizables.
            </p>

            <h3>Beneficios de elegir productos sostenibles</h3>
            <ul>
              <li>
                <strong>Reducción de residuos:</strong> muchos productos reutilizables
                reemplazan varios desechables a lo largo del tiempo.
              </li>
              <li>
                <strong>Menor exposición a químicos agresivos:</strong> especialmente en
                productos de limpieza y cuidado personal.
              </li>
              <li>
                <strong>Durabilidad:</strong> suelen estar fabricados con materiales más
                resistentes.
              </li>
              <li>
                <strong>Coherencia con hábitos sostenibles:</strong> cada compra
                responsable refuerza una forma de consumo más consciente.
              </li>
            </ul>

            <h3>Cómo reconocer un producto realmente ecológico</h3>
            <p>
              No toda etiqueta con la palabra "eco" garantiza un producto sostenible.
              Antes de comprar, puedes preguntarte: ¿de qué material está hecho y de dónde
              proviene?, ¿su empaque es reducido o reutilizable?, ¿está pensado para un
              solo uso o para durar en el tiempo?, ¿qué sucede con él una vez que termina
              su vida útil?
            </p>

            <p>
              <strong>Consejo práctico:</strong> no es necesario cambiar todas tus compras
              de golpe. Empieza reemplazando, poco a poco, los productos que más usas a
              diario por alternativas reutilizables, priorizando los que generan más
              residuos en tu rutina.
            </p>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Bolsas reutilizables (set x3).png"
                    className="img-fluid rounded-start p-3"
                    alt="Bolsas reutilizables, un ejemplo de producto ecológico para el hogar"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Las bolsas reutilizables son una excelente forma de dar tu primer
                      paso hacia el consumo responsable, ideales para tus compras a
                      granel.
                    </p>
                    <Link
                      to="/productos#hogar-sustentable"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoHogar Sustentable
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-reducir-residuos">
                10 formas sencillas de reducir los residuos en casa
              </a>{' '}
              ·{' '}
              <a href="#articulo-habitos-sostenibles">
                Hábitos sostenibles para tu vida diaria
              </a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>

      <hr className="container" />

      {/* ARTÍCULO 2 */}
      <article id="articulo-reducir-residuos" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">
              Reducción de residuos
            </span>
            <h2>10 formas sencillas de reducir los residuos en casa</h2>
            <img
              src="/image/eco sustentable -1.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Productos de hogar sustentable para reducir residuos"
            />

            <p>
              Reducir los residuos en casa no requiere una transformación radical. La
              mayoría de los cambios que realmente funcionan son pequeños ajustes en
              hábitos cotidianos, que se mantienen en el tiempo precisamente porque son
              fáciles de sostener.
            </p>

            <h3>Por qué vale la pena reducir los residuos del hogar</h3>
            <p>
              Gran parte de la basura doméstica está compuesta por elementos de un solo
              uso: envases, bolsas, botellas y empaques. Reemplazar estos elementos por
              alternativas reutilizables reduce directamente la cantidad de residuos que
              se generan cada semana, además de ayudar a ahorrar en el mediano plazo.
            </p>

            <h3>10 formas sencillas de reducir los residuos en casa</h3>
            <ol>
              <li>
                <strong>Usa bolsas reutilizables</strong> para las compras en lugar de
                bolsas plásticas de un solo uso.
              </li>
              <li>
                <strong>Prefiere productos a granel</strong> cuando sea posible, evitando
                envases individuales innecesarios.
              </li>
              <li>
                <strong>Reemplaza el papel de cocina</strong> por paños reutilizables y
                lavables.
              </li>
              <li>
                <strong>Elige productos de limpieza concentrados</strong> o rellenables
                para reducir envases plásticos.
              </li>
              <li>
                <strong>Cambia el shampoo líquido por shampoo sólido</strong>, que además
                dura más tiempo.
              </li>
              <li>
                <strong>Reutiliza frascos de vidrio</strong> para almacenar alimentos u
                organizar productos del hogar.
              </li>
              <li>
                <strong>Lleva tu propia botella de agua</strong> en lugar de comprar
                botellas desechables.
              </li>
              <li>
                <strong>Compra solo lo necesario</strong>, planificando tus compras para
                evitar desperdicio de alimentos.
              </li>
              <li>
                <strong>Da una segunda vida a los envases</strong> antes de desecharlos,
                cuando sea posible.
              </li>
              <li>
                <strong>Separa tus residuos</strong> para facilitar el reciclaje de lo que
                sí debe desecharse.
              </li>
            </ol>

            <h3>Errores comunes al intentar reducir residuos</h3>
            <p>
              Un error frecuente es intentar cambiarlo todo de inmediato, lo que puede
              volverse abrumador y difícil de mantener. Otro error habitual es comprar
              productos reutilizables sin planificar su uso real, lo que termina generando
              más objetos acumulados en lugar de menos residuos. Lo más efectivo es
              avanzar por etapas, priorizando los cambios que tengan mayor impacto en tu
              rutina diaria.
            </p>

            <p>
              <strong>Consejo práctico:</strong> ten a mano tus productos reutilizables
              (bolsas, botella, paños) para no recurrir a la opción desechable por
              comodidad, y revisa cada cierto tiempo cuánta basura genera tu hogar para
              notar el progreso.
            </p>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Bolsas reutilizables (set x3).png"
                    className="img-fluid rounded-start p-3"
                    alt="Set de bolsas reutilizables para reducir el uso de plástico"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Nuestras bolsas reutilizables de malla son ideales para compras a
                      granel de frutas, verduras y alimentos a peso.
                    </p>
                    <Link
                      to="/productos#hogar-sustentable"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoHogar Sustentable
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-productos-ecologicos">
                ¿Qué son los productos ecológicos?
              </a>{' '}
              ·{' '}
              <a href="#articulo-guia-reutilizables">
                Guía para elegir productos reutilizables
              </a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>

      <hr className="container" />

      {/* ARTÍCULO 3 */}
      <article id="articulo-guia-reutilizables" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">
              Productos reutilizables
            </span>
            <h2>Guía para elegir productos reutilizables</h2>
            <img
              src="/image/Cepillo de fibra natural-1.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Cepillo de fibra natural, ejemplo de producto reutilizable"
            />

            <p>
              Los productos reutilizables se han vuelto una de las formas más populares de
              avanzar hacia un consumo más responsable. Sin embargo, no todo lo que se
              etiqueta como "reutilizable" cumple realmente ese propósito a largo plazo.
              Elegir bien marca la diferencia entre una compra ecológica útil y un objeto
              que termina sin usarse.
            </p>

            <h3>¿Qué hace que un producto reutilizable sea una buena opción?</h3>
            <p>
              Un buen producto reutilizable debe cumplir al menos tres condiciones: estar
              hecho de un material resistente, ser fácil de limpiar y mantener, y
              reemplazar de forma efectiva a una alternativa desechable que ya usas con
              frecuencia.
            </p>

            <h3>Materiales más sostenibles para productos reutilizables</h3>
            <h4>Fibras naturales</h4>
            <p>
              Materiales como el sisal, el coco o el bambú se utilizan en cepillos y
              utensilios de limpieza. Son biodegradables al final de su vida útil y suelen
              ser resistentes al uso diario.
            </p>
            <h4>Madera certificada</h4>
            <p>
              Se usa en mangos y estructuras de productos de limpieza y cuidado personal.
              Es duradera y, cuando proviene de fuentes certificadas, tiene un menor
              impacto ambiental.
            </p>
            <h4>Tela y malla reutilizable</h4>
            <p>
              Ideal para bolsas de compras, permite lavarse y reutilizarse muchas veces,
              reemplazando bolsas plásticas de un solo uso.
            </p>

            <h3>Cómo elegir el producto reutilizable adecuado</h3>
            <ul>
              <li>
                ¿Reemplaza un producto desechable que usas frecuentemente? Si no, es
                probable que no le des uso real.
              </li>
              <li>¿El material es resistente y fácil de limpiar?</li>
              <li>¿Existen instrucciones claras de cuidado y mantenimiento?</li>
              <li>¿Su tamaño y diseño se adaptan a tu rutina diaria?</li>
            </ul>

            <p>
              <strong>Consejo práctico:</strong> es preferible invertir en pocos productos
              reutilizables de buena calidad que se usen todos los días, en lugar de
              comprar muchos que terminen sin utilizarse.
            </p>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Cepillo de fibra natural-1.png"
                    className="img-fluid rounded-start p-3"
                    alt="Cepillo de limpieza de fibra natural con mango de madera certificada"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Nuestro cepillo de fibra natural combina fibras vegetales y mango de
                      madera certificada, pensado para reemplazar utensilios de limpieza
                      desechables.
                    </p>
                    <Link
                      to="/productos#hogar-sustentable"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoHogar Sustentable
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-desechables-vs-reutilizables">
                Desechables vs. reutilizables
              </a>{' '}
              ·{' '}
              <a href="#articulo-cuidado-reutilizables">
                Cómo cuidar tus productos reutilizables
              </a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>

      <hr className="container" />

      {/* ARTÍCULO 4 */}
      <article id="articulo-desechables-vs-reutilizables" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">Comparativas</span>
            <h2>Productos desechables vs. reutilizables: ¿cuál elegir?</h2>
            <img
              src="/image/EcoCuidado Personal-1.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Productos de cuidado personal reutilizables frente a alternativas desechables"
            />

            <p>
              Al momento de comprar, muchas veces surge la misma duda: ¿conviene elegir la
              opción desechable, más económica en el momento, o invertir en una
              alternativa reutilizable? La respuesta depende del producto, de la
              frecuencia de uso y de qué tan fácil sea mantener la opción reutilizable.
            </p>

            <h3>Ventajas y desventajas de los productos desechables</h3>
            <ul>
              <li>
                <strong>Ventaja:</strong> suelen tener un costo inicial más bajo y no
                requieren mantenimiento.
              </li>
              <li>
                <strong>Desventaja:</strong> generan residuos de forma constante, ya que
                se desechan tras un solo uso.
              </li>
              <li>
                <strong>Desventaja:</strong> a largo plazo, su costo acumulado puede ser
                más alto que el de una alternativa reutilizable.
              </li>
            </ul>

            <h3>Ventajas y desventajas de los productos reutilizables</h3>
            <ul>
              <li>
                <strong>Ventaja:</strong> reducen la generación de residuos de forma
                directa y suelen ser más económicos en el tiempo.
              </li>
              <li>
                <strong>Desventaja:</strong> requieren cuidado y mantenimiento para durar
                más tiempo.
              </li>
              <li>
                <strong>Desventaja:</strong> su costo inicial puede ser mayor que el de la
                versión desechable.
              </li>
            </ul>

            <h3>Comparación práctica: ejemplos cotidianos</h3>
            <p>
              <strong>Shampoo líquido vs. shampoo sólido:</strong> el shampoo sólido
              elimina el envase plástico y suele rendir más lavados, aunque requiere
              mantenerlo seco entre usos para que dure correctamente.
            </p>
            <p>
              <strong>Bolsas plásticas vs. bolsas de tela o malla:</strong> las bolsas
              reutilizables reemplazan decenas de bolsas desechables, siempre que se laven
              y se guarden en un lugar accesible para no olvidarlas al salir.
            </p>

            <h3>¿Cuándo conviene cada opción?</h3>
            <p>
              En general, la alternativa reutilizable conviene cuando se trata de un
              producto de uso frecuente, ya que el ahorro y la reducción de residuos se
              notan rápidamente. La opción desechable puede seguir teniendo sentido en
              situaciones puntuales o de uso muy esporádico.
            </p>

            <p>
              <strong>Consejo práctico:</strong> piensa en la frecuencia de uso, evalúa si
              tienes disposición para limpiar y mantener el producto, y empieza por un
              solo reemplazo antes de cambiar toda tu rutina.
            </p>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Shampoo sólido natural-1.png"
                    className="img-fluid rounded-start p-3"
                    alt="Shampoo sólido natural como alternativa reutilizable al shampoo líquido"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Nuestro shampoo sólido natural es libre de sulfatos y elimina el
                      envase plástico del shampoo tradicional.
                    </p>
                    <Link
                      to="/productos#cuidado-personal"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoCuidado Personal
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-guia-reutilizables">
                Guía para elegir productos reutilizables
              </a>{' '}
              ·{' '}
              <a href="#articulo-cuidado-reutilizables">
                Cómo cuidar tus productos reutilizables
              </a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>

      <hr className="container" />

      {/* ARTÍCULO 5 */}
      <article id="articulo-cuidado-reutilizables" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">
              Cuidado y mantenimiento
            </span>
            <h2>Cómo cuidar correctamente tus productos reutilizables</h2>
            <img
              src="/image/EcoCuidado Personal-2.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Cuidado de productos reutilizables de higiene y limpieza"
            />

            <p>
              Comprar un producto reutilizable es solo el primer paso. Su verdadero
              beneficio ambiental y económico se logra cuando se cuida correctamente y
              dura el mayor tiempo posible.
            </p>

            <h3>Cómo limpiar tus productos reutilizables</h3>
            <p>
              Los cepillos y utensilios de fibra natural deben lavarse con agua y dejarse
              secar al aire, evitando la humedad constante que puede deteriorar la fibra.
              Las bolsas de tela o malla pueden lavarse a mano o en máquina, según la
              indicación del fabricante, y se recomienda dejarlas secar por completo antes
              de guardarlas. Los productos con mango de madera no deben sumergirse por
              tiempos prolongados, para evitar que la madera se dañe.
            </p>

            <h3>Cómo almacenar tus productos reutilizables correctamente</h3>
            <p>
              Guardar los productos en un lugar seco y ventilado ayuda a prevenir la
              humedad y el mal olor. Los jabones y shampoos sólidos, por ejemplo, duran
              más si se guardan en una jabonera con buen drenaje que en un recipiente
              cerrado.
            </p>

            <h3>¿Cuánto duran los productos reutilizables?</h3>
            <p>
              La duración varía según el material y la frecuencia de uso y cuidado. En
              general, con una limpieza y almacenamiento adecuados, los productos
              reutilizables de buena calidad ofrecen muchos más usos que su equivalente
              desechable, lo que compensa su costo inicial en el tiempo.
            </p>

            <h3>Errores comunes que reducen la vida útil de tus productos</h3>
            <ul>
              <li>
                Guardarlos húmedos, lo que favorece la aparición de humedad y malos
                olores.
              </li>
              <li>
                No seguir las indicaciones de limpieza específicas para cada material.
              </li>
              <li>
                Exponerlos a temperaturas o productos químicos agresivos que no son
                necesarios para su mantenimiento.
              </li>
            </ul>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Cepillo de fibra natural-1.png"
                    className="img-fluid rounded-start p-3"
                    alt="Cepillo de fibra natural que requiere secado adecuado para durar más tiempo"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Nuestro cepillo de fibra natural, con el cuidado adecuado, puede
                      acompañarte por mucho tiempo antes de necesitar reemplazo.
                    </p>
                    <Link
                      to="/productos#hogar-sustentable"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoHogar Sustentable
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-guia-reutilizables">
                Guía para elegir productos reutilizables
              </a>{' '}
              ·{' '}
              <a href="#articulo-habitos-sostenibles">
                Hábitos sostenibles para tu vida diaria
              </a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>

      <hr className="container" />

      {/* ARTÍCULO 6 */}
      <article id="articulo-habitos-sostenibles" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">
              Hábitos sostenibles
            </span>
            <h2>Hábitos sostenibles que puedes incorporar a tu vida diaria</h2>
            <img
              src="/image/EcoAlimentos Orgánicos-1.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Alimentos orgánicos como parte de hábitos sostenibles diarios"
            />

            <p>
              Llevar una vida más sostenible no depende de un solo gran cambio, sino de la
              suma de pequeños hábitos que se mantienen en el tiempo. A continuación,
              algunas ideas simples de aplicar en distintas áreas de tu rutina.
            </p>

            <h3>Por qué los pequeños hábitos marcan la diferencia</h3>
            <p>
              Un hábito sostenible que se repite todos los días termina teniendo más
              impacto que una acción aislada, porque se convierte en parte natural de tu
              rutina y no depende de la fuerza de voluntad de un solo momento.
            </p>

            <h3>Hábitos sostenibles para el hogar</h3>
            <ul>
              <li>Reutilizar frascos y envases antes de desecharlos.</li>
              <li>Usar productos de limpieza concentrados o rellenables.</li>
              <li>
                Reparar objetos en lugar de reemplazarlos apenas presentan una falla
                menor.
              </li>
            </ul>

            <h3>Hábitos sostenibles al momento de comprar</h3>
            <ul>
              <li>Llevar bolsas reutilizables cuando sales a comprar.</li>
              <li>Priorizar productos a granel o con empaques reducidos.</li>
              <li>
                Elegir alternativas reutilizables para los productos que usas con más
                frecuencia.
              </li>
            </ul>

            <h3>Hábitos sostenibles en la alimentación</h3>
            <ul>
              <li>Planificar las compras para evitar el desperdicio de alimentos.</li>
              <li>
                Elegir alimentos orgánicos y de menor procesamiento cuando sea posible.
              </li>
              <li>Almacenar los alimentos correctamente para extender su duración.</li>
            </ul>

            <p>
              <strong>Consejo práctico:</strong> elige un solo hábito nuevo a la vez y
              mantenlo por unas semanas antes de sumar otro. Es la forma más efectiva de
              que un cambio se vuelva permanente.
            </p>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Miel orgánica 500g-1.png"
                    className="img-fluid rounded-start p-3"
                    alt="Miel orgánica, un alimento sostenible para incorporar en la alimentación diaria"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Nuestra miel orgánica proviene de apicultura responsable, sin
                      aditivos ni procesos industriales.
                    </p>
                    <Link
                      to="/productos#alimentos-organicos"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoAlimentos Orgánicos
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-productos-ecologicos">
                ¿Qué son los productos ecológicos?
              </a>{' '}
              ·{' '}
              <a href="#articulo-reducir-residuos">
                10 formas de reducir residuos en casa
              </a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>

      <hr className="container" />

      {/* ARTÍCULO 7 */}
      <article id="articulo-reducir-plastico" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">
              Reducción de residuos
            </span>
            <h2>5 formas de reducir el plástico en tu rutina diaria</h2>
            <img
              src="/image/banner-cero-plastico-1.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Alternativas cotidianas para reducir el uso de plástico"
            />

            <p>
              El plástico de un solo uso se ha vuelto tan común que muchas veces pasa
              desapercibido en la rutina diaria. La buena noticia es que reducirlo no
              exige un cambio radical: basta con identificar los puntos donde más se usa y
              reemplazarlos por alternativas simples.
            </p>

            <h3>Por qué el plástico de un solo uso es un problema</h3>
            <p>
              Bolsas, envases y botellas plásticas suelen usarse por minutos u horas, pero
              tardan siglos en degradarse. Al reemplazar estos elementos por opciones
              reutilizables, se reduce de forma directa la cantidad de plástico que
              termina como residuo.
            </p>

            <h3>5 formas sencillas de reducir el plástico en tu día a día</h3>
            <ol>
              <li>
                <strong>Lleva tu propia botella de agua</strong> reutilizable en lugar de
                comprar botellas desechables.
              </li>
              <li>
                <strong>Usa bolsas de tela o malla</strong> para las compras,
                especialmente en frutas y verduras a granel.
              </li>
              <li>
                <strong>Cambia el shampoo líquido por shampoo sólido</strong>, que elimina
                el envase plástico por completo.
              </li>
              <li>
                <strong>Prefiere envases de vidrio o metal</strong> para almacenar
                alimentos en lugar de recipientes plásticos desechables.
              </li>
              <li>
                <strong>Evita cubiertos y sorbetes plásticos</strong> de un solo uso
                cuando pidas comida para llevar.
              </li>
            </ol>

            <h3>Un pequeño cambio, un gran impacto acumulado</h3>
            <p>
              No es necesario aplicar los cinco cambios al mismo tiempo. Incorporar uno
              solo y mantenerlo en el tiempo ya reduce de forma constante el plástico que
              generas, y suele facilitar que los siguientes cambios se adopten con menos
              esfuerzo.
            </p>

            <p>
              <strong>Consejo práctico:</strong> identifica el objeto plástico de un solo
              uso que más utilizas en tu semana y comienza por reemplazar solo ese antes
              de avanzar con los demás.
            </p>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Bolsas reutilizables (set x3).png"
                    className="img-fluid rounded-start p-3"
                    alt="Bolsas reutilizables como alternativa al plástico de un solo uso"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Nuestras bolsas reutilizables son una forma sencilla de dejar de
                      lado las bolsas plásticas en tus compras diarias.
                    </p>
                    <Link
                      to="/productos#hogar-sustentable"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoHogar Sustentable
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-reducir-residuos">
                10 formas sencillas de reducir los residuos en casa
              </a>{' '}
              · <a href="#articulo-cruelty-free">¿Qué significa el sello Cruelty-Free?</a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>

      <hr className="container" />

      {/* ARTÍCULO 8 */}
      <article id="articulo-cruelty-free" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="badge text-bg-success rounded-pill mb-3">
              Cuidado personal
            </span>
            <h2>¿Qué significa realmente el sello Cruelty-Free?</h2>
            <img
              src="/image/Jabón artesanal de avena-1.png"
              className="img-fluid rounded shadow-sm w-100 my-4"
              alt="Jabón artesanal con sello cruelty-free"
            />

            <p>
              Cada vez más productos de cuidado personal muestran el sello "Cruelty-Free"
              en su empaque, pero no siempre queda claro qué certifica realmente esta
              etiqueta ni qué aspectos deja fuera.
            </p>

            <h3>¿Qué garantiza el sello Cruelty-Free?</h3>
            <p>
              El sello Cruelty-Free certifica que un producto, ni sus ingredientes, fueron
              probados en animales durante ninguna etapa de su desarrollo. Esto aplica
              tanto al producto terminado como a las materias primas que lo componen.
            </p>

            <h3>Qué NO garantiza esta certificación</h3>
            <p>
              Es un error común asumir que "Cruelty-Free" implica automáticamente que un
              producto es vegano o ecológico. Esta etiqueta no certifica:
            </p>
            <ul>
              <li>
                Que el producto esté libre de ingredientes de origen animal (eso lo indica
                el sello "Vegano").
              </li>
              <li>Que los envases sean reciclables o de bajo impacto ambiental.</li>
              <li>
                Que la empresa cumpla otros estándares de sostenibilidad en su producción.
              </li>
            </ul>

            <h3>Cómo identificar productos realmente Cruelty-Free</h3>
            <ul>
              <li>
                Busca sellos oficiales reconocidos en el empaque, en lugar de solo la
                frase "no testado en animales".
              </li>
              <li>
                Verifica que la certificación cubra también a los proveedores de
                ingredientes, no solo al producto final.
              </li>
              <li>
                Ten en cuenta que un producto puede ser Cruelty-Free y, al mismo tiempo,
                no ser vegano ni tener un empaque sostenible.
              </li>
            </ul>

            <p>
              <strong>Consejo práctico:</strong> si buscas un producto realmente alineado
              con el consumo responsable, revisa por separado si es Cruelty-Free, si es
              vegano y si su empaque es reducido o reciclable, ya que son tres criterios
              distintos.
            </p>

            <div className="card shadow-sm my-4">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/image/Jabón artesanal de avena-1.png"
                    className="img-fluid rounded-start p-3"
                    alt="Jabón artesanal de avena, un producto de cuidado personal cruelty-free"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title h6">Producto relacionado</h4>
                    <p className="card-text">
                      Nuestro jabón artesanal de avena está elaborado sin pruebas en
                      animales y con ingredientes de origen responsable.
                    </p>
                    <Link
                      to="/productos#cuidado-personal"
                      className="btn btn-success btn-sm"
                    >
                      Ver productos de EcoCuidado Personal
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="small">
              Sigue leyendo:{' '}
              <a href="#articulo-desechables-vs-reutilizables">
                Desechables vs. reutilizables
              </a>{' '}
              ·{' '}
              <a href="#articulo-reducir-plastico">
                5 formas de reducir el plástico en tu rutina diaria
              </a>
            </p>
            <p>
              <a href="#articulos">↑ Volver al listado de artículos</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
