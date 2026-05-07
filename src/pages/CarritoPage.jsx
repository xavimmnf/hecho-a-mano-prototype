import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FaCartShopping, FaMoneyCheckDollar } from 'react-icons/fa6';
import './pages.css';

// Icons
function CartNavbar({ itemCount }) {
  return (
    <header className="cart-navbar">
      <div className="cart-navbar-border" />
      <nav className="cart-navbar-content">
        <Link to="/" className="cart-navbar-logo">
          HM
        </Link>
        <Link to="/carrito" className="cart-navbar-cart-link">
          <FaCartShopping className="cart-navbar-cart-icon" />
          {itemCount > 0 && (
            <span className="cart-navbar-badge">{itemCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}

function ImagePlaceholder({ className }) {
  return (
    <div className="carrito-image-placeholder">
      <svg
        className="carrito-image-placeholder-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

function TrashIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function CreditCardIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

const initialItems = [
  {
    id: 1,
    name: 'Nombre del producto',
    artisan: 'Nombre artesano',
    price: 0,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Nombre del producto',
    artisan: 'Nombre artesano',
    price: 0,
    quantity: 1,
  },
];

export function CarritoPage() {
  const [cartItems, setCartItems] = useState(initialItems);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isEmpty = cartItems.length === 0;

  return (
    <div className="carrito-page">
      <CartNavbar itemCount={cartItems.length} />

      <main className="carrito-main">
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

        <h1 className="carrito-title">Carrito de compras</h1>

        <div className="carrito-grid">
          {/* Cart Items */}
          <div className="carrito-items">
            {isEmpty ? (
              <Card className="carrito-empty">
                <p className="carrito-empty-text">Tu carrito esta vacío</p>
              </Card>
            ) : (
              <>
                {cartItems.map((item) => (
                  <Card key={item.id} className="carrito-item-card">
                    <div className="cart-item">
                      <div className="cart-item-image">
                        <ImagePlaceholder />
                      </div>
                      <div className="cart-item-info">
                        <div className="carrito-item-header">
                          <div>
                            <h3 className="carrito-item-name">{item.name}</h3>
                            <p className="carrito-item-artisan">
                              Por {item.artisan}
                            </p>
                            <p className="carrito-item-price">
                              ${item.price.toFixed(2).replace('.', ',')}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="carrito-remove-btn"
                          >
                            <TrashIcon className="carrito-remove-icon" />
                          </button>
                        </div>
                        <div className="cart-item-actions">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="qty-btn"
                          >
                            -
                          </button>
                          <span className="qty-display">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="carrito-clear-btn"
                >
                  <TrashIcon className="carrito-clear-icon" />
                  Vaciar carrito
                </Button>
              </>
            )}
          </div>

          {/* Order Summary */}
          <Card className="cart-summary">
            <h2 className="carrito-summary-title">Resumen del pedido</h2>
            <div className="carrito-summary-rows">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>$0000,00</span>
              </div>
              <div className="cart-summary-row">
                <span>Envió</span>
                <span>$0000,00</span>
              </div>
            </div>
            <div className="carrito-summary-divider" />
            <div className="carrito-summary-total">
              <span>Total</span>
              <span>$0000,00</span>
            </div>
            <Link to="/checkout">
              <Button
                disabled={isEmpty}
                className={`carrito-checkout-btn ${
                  isEmpty ? 'carrito-checkout-btn-disabled' : ''
                }`}
              >
                <FaMoneyCheckDollar className="carrito-checkout-icon" />
                Proceder al pago
              </Button>
            </Link>

            <p className="carrito-summary-footer">
              Compra segura. Todos los productos son auténticos
              <br />y hechos a mano por artesanos colombianos.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
