import { Link } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaRegPaperPlane,
  FaArrowLeft,
} from 'react-icons/fa6';
{
  /* <FaEnvelope /> */
  /* <FaPhone /> */
  /* <FaLocationDot /> */
  /* <FaRegPaperPlane /> */
  /* <FaArrowLeft /> */
}
import './pages.css';

// Icons
function MailIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function ArrowLeftIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export function SoportePage() {
  return (
    <div className="support-page">
      {/* Navbar */}
      <header className="support-navbar">
        <div className="support-navbar-border" />
        <nav className="support-navbar-inner">
          <Link to="/" className="support-logo">
            HM
          </Link>
          <Link to="/catalogo" className="carrito-back-link">
            <FaArrowLeft />
            Seguir comprando
          </Link>
        </nav>
      </header>

      <main className="support-main">
        {/* Title */}
        <div className="support-title-wrap">
          <h1 className="support-title">Soporte técnico</h1>
          <p className="support-subtitle">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos
            lo antes posible.
          </p>
        </div>

        {/* Content */}
        <div className="soporte-grid">
          {/* Contact Info */}
          <div>
            <h2 className="support-section-title">Información de contacto</h2>
            <p className="support-section-desc">
              Puedes contactarnos a través de cualquiera de estos medios.
              <br />
              Nuestro equipo está disponible de lunes a viernes de 9:00 AM a
              6:00 PM.
            </p>

            <div className="support-contact-stack">
              {/* Email */}
              <div className="soporte-info-item">
                <div className="soporte-icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="support-info-title">E - mail</h3>
                  <p className="support-info-text">contacto@hechoamano.com</p>
                  <p className="support-info-text">soporte@hechoamano.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="soporte-info-item">
                <div className="soporte-icon-box">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="support-info-title">Teléfono</h3>
                  <p className="support-info-text">+57 (300) 123 - 5678</p>
                  <p className="support-info-text">+57 (301) 876 - 4321</p>
                </div>
              </div>

              {/* Address */}
              <div className="soporte-info-item">
                <div className="soporte-icon-box">
                  <FaLocationDot />
                </div>
                <div>
                  <h3 className="support-info-title">Dirección</h3>
                  <p className="support-info-text">
                    Carrera 15 # 8-45, Barrio Centro
                  </p>
                  <p className="support-info-text">Valledupar, Cesar 200001</p>
                  <p className="support-info-text">Colombia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="support-section-title support-form-title">
              Haznos saber que problemas tienes
            </h2>

            <form className="support-form">
              <div className="checkout-form-grid">
                <div className="form-group">
                  <label className="support-label">
                    Nombre completo <span className="support-required">*</span>
                  </label>
                  <Input placeholder="Nombre Nombre Apellido Apellido" />
                </div>
                <div className="form-group">
                  <label className="support-label">
                    E - mail <span className="support-required">*</span>
                  </label>
                  <Input type="email" placeholder="ejemplo@correo.com" />
                </div>
              </div>

              <div className="checkout-form-grid">
                <div className="form-group">
                  <label className="support-label">Telefono</label>
                  <Input type="tel" placeholder="+57 000-000-0000" />
                </div>
                <div className="form-group">
                  <label className="support-label">
                    Asunto <span className="support-required">*</span>
                  </label>
                  <Input placeholder="¿En que podemos ayudarte?" />
                </div>
              </div>

              <div className="form-group">
                <label className="support-label">
                  Mensaje <span className="support-required">*</span>
                </label>
                <textarea
                  className="support-textarea"
                  placeholder="Escribe tu mensaje aqui"
                />
              </div>

              <Button className="support-submit">
                <FaRegPaperPlane />
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
