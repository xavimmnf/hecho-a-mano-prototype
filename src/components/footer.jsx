import './Footer.css';
import { Link } from 'react-router-dom';
import { FaSquareXTwitter, FaSquareInstagram } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/historia" className="footer-link">
            Nosotros
          </Link>
          <Link to="/soporte" className="footer-link">
            Contacto
          </Link>
        </div>

        <p className="footer-copyright">
          ©Todos los derechos reservados | Hecho a Mano
        </p>

        <div className="footer-social">
          <a href="#" className="footer-social-link" aria-label="X (Twitter)">
            <FaSquareXTwitter size={20} />
          </a>
          <a href="#" className="footer-social-link" aria-label="Instagram">
            <FaSquareInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
