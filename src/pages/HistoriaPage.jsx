import { Link } from 'react-router-dom';
import '../styles/pages.css';

export function HistoriaPage() {
  return (
    <div className="history-page">
      <div className="history-navbar">
        <nav className="history-navbar-inner">
          <Link to="/" className="history-logo">
            HM
          </Link>
          <Link to="/catalogo" className="carrito-back-link">
            <svg
              className="carrito-back-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Seguir comprando
          </Link>
        </nav>
      </div>

      <div className="history-main">
        <div className="history-desc">
          <h1 className="history-title">Nuestra historia</h1>
          <p className="history-paragraph">
            Hecho a Mano nace del amor por las tradiciones artesanales de
            Valledupar y el deseo de conectar a los artesanos con personas que
            valoran el trabajo hecho con dedicación y alma.
          </p>
        </div>

        <div className="history-mision-vision">
          <div className="history-mision">
            <h2 className="history-subtitle">Nuestra mision</h2>
            <p>
              Preservar y promover las técnicas artesanales tradicionales de
              Valledupar, brindando a los artesanos una plataforma digital para
              mostrar su trabajo al mundo y generar ingresos justos que les
              permitan continuar con su oficio.
            </p>
          </div>

          <div className="history-vision">
            <h2 className="history-subtitle">Nuestra visión</h2>
            <p>
              Ser la plataforma líder en Colombia que conecta artesanos con
              clientes que buscan productos únicos y auténticos, creando un
              ecosistema sostenible que valore el trabajo manual y preserve
              nuestras tradiciones culturales.
            </p>
          </div>
        </div>
      </div>

      <div className="history-howitworks">
        <div className="history-howitworks-desc">
          <h2 className="history-howitworks-title">
            Como funciona Hecho a mano
          </h2>
          <p>
            Un proceso simple que conecta artesanos con clientes de manera
            directa y transparente
          </p>
        </div>

        <div className="history-steps">
          <div className="history-step">
            <div className="history-step-number">1</div>
            <h3 className="history-step-title">Registro de artesanos</h3>
            <p>
              Los artesanos crean su perfil y suben sus productos con fotos,
              descripciones y precios.
            </p>
          </div>

          <div className="history-step">
            <div className="history-step-number">2</div>
            <h3 className="history-step-title">Exploracion de clientes</h3>
            <p>
              Los clientes navegan el catálogo, filtran por categoría y región,
              y descubren productos únicos.
            </p>
          </div>

          <div className="history-step">
            <div className="history-step-number">3</div>
            <h3 className="history-step-title">Conexión directa</h3>
            <p>
              Los clientes contactan directamente a los artesanos para realizar
              pedidos personalizados o compras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
