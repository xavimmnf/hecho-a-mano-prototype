import { FaGrip, FaUser } from 'react-icons/fa6';
import './Navbar.css';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-content">
        <Link to="/" className="navbar-logo">
          HM
        </Link>
        <Button variant="primary" className="navbar-login-btn ">
          <Link to="/login">Iniciar sesión como artesano</Link>
        </Button>
      </nav>
    </header>
  );
}

export function AuthNavbar() {
  return (
    <header className="navbar">
      <div className="navbar-border navbar-border-top" />
      <nav className="navbar-content">
        <Link to="/dashboard" className="navbar-logo">
          HM
        </Link>
        <div className="navbar-icons">
          <Link to="/dashboard" className="navbar-icon-link">
            <FaGrip className="navbar-icon" />
          </Link>
          <Link to="/perfil" className="navbar-icon-link">
            <FaUser className="navbar-icon" />
          </Link>
        </div>
      </nav>
      <div className="navbar-border navbar-border-bottom" />
    </header>
  );
}

export function CenteredNavbar() {
  return (
    <header className="navbar">
      <div className="navbar-border navbar-border-top" />
      <nav className="navbar-content navbar-content-centered">
        <Link to="/" className="navbar-logo">
          HM
        </Link>
      </nav>
      <div className="navbar-border navbar-border-bottom" />
    </header>
  );
}
