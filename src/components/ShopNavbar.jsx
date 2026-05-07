import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './ui/Input';
import './ShopNavbar.css';

import { FaCartShopping, FaBars, FaXmark } from 'react-icons/fa6';

function SearchIcon({ className }) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const navItems = [
  { label: 'Catalogo de productos', href: '/catalogo' },
  { label: 'Nuestros artesanos', href: '/artesanos' },
  { label: 'Nuestra historia', href: '/historia' },
  { label: 'Soporte técnico', href: '/soporte' },
];

export function ShopNavbar({
  searchPlaceholder = 'Buscar productos',
  activePath,
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="shop-navbar">
      <div className="navbar-border navbar-border-top" />
      <nav className="shop-navbar-content">
        <Link to="/" className="shop-navbar-logo">
          HM
        </Link>

        <div className="shop-navbar-search">
          <SearchIcon className="shop-navbar-search-icon" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            className="shop-navbar-search-input"
          />
        </div>

        <div className="shop-navbar-actions">
          <Link to="/carrito" className="shop-navbar-cart-link">
            <FaCartShopping className="shop-navbar-icon" />
          </Link>

          <button
            className="shop-navbar-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? (
              <FaXmark className="shop-navbar-icon" />
            ) : (
              <FaBars className="shop-navbar-icon" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <nav className="shop-navbar-mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`shop-navbar-mobile-link ${
                activePath === item.href ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="navbar-border navbar-border-bottom" />
    </header>
  );
}
