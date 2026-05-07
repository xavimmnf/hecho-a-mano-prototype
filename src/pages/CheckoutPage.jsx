import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import '../styles/pages.css';

function CheckoutNavbar() {
  return (
    <header className="checkout-navbar">
      <div className="checkout-navbar-border" />
      <nav className="checkout-navbar-inner">
        <Link to="/" className="checkout-logo">
          HM
        </Link>
      </nav>
    </header>
  );
}

export function CheckoutPage() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <CheckoutNavbar />

      <main className="checkout-main">
        <h1 className="checkout-title">Finalizar compra</h1>

        <div className="carrito-grid">
          <div className="checkout-forms-stack">
            <Card className="checkout-card">
              <h2 className="checkout-card-title">Información de envió</h2>
              <div className="checkout-form-grid">
                <div className="form-group">
                  <label className="checkout-label">Nombre completo</label>
                  <Input placeholder="Nombre Nombre Apellido Apellido" />
                </div>
                <div className="form-group">
                  <label className="checkout-label">Departameno</label>
                  <Input placeholder="Nombre Departamento" />
                </div>
                <div className="form-group">
                  <label className="checkout-label">Correo electrónico</label>
                  <Input type="email" placeholder="NombreApellido@corre.com" />
                </div>
                <div className="form-group">
                  <label className="checkout-label">Ciudad</label>
                  <Input placeholder="Nombre Ciudad" />
                </div>
                <div className="form-group">
                  <label className="checkout-label">Teléfono</label>
                  <Input type="tel" placeholder="+57 000-000-0000" />
                </div>
                <div className="form-group">
                  <label className="checkout-label">Dirección</label>
                  <Input placeholder="Calle #00 Carrera 00 Ubz Nombre - Mz 00 Casa A" />
                </div>
              </div>
            </Card>

            <Card className="checkout-card">
              <h2 className="checkout-card-title">Información de pago</h2>
              <div className="checkout-payment-stack">
                <div className="form-group">
                  <label className="checkout-label">Numero de tarjeta</label>
                  <Input placeholder="1234 5678 9012 3456" />
                </div>

                <div className="checkout-form-grid">
                  <div className="form-group">
                    <label className="checkout-label">
                      Fecha de expiración
                    </label>
                    <Input placeholder="MM/AA" />
                  </div>
                  <div className="form-group">
                    <label className="checkout-label">CVV</label>
                    <Input placeholder="123" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="checkout-label">Nombre en la tarjeta</label>
                  <Input placeholder="Nombre Nombre Apellido Apellido" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="cart-summary">
            <h2 className="checkout-summary-title">Resumen del pedido</h2>
            <div className="checkout-summary-rows">
              <div className="cart-summary-row">
                <span>Cantidad de articulos</span>
                <span>2</span>
              </div>
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>$0000,00</span>
              </div>
              <div className="cart-summary-row">
                <span>Envió</span>
                <span>$0000,00</span>
              </div>
            </div>

            <div className="checkout-summary-divider" />

            <div className="checkout-summary-total">
              <span>Total</span>
              <span>$0000,00</span>
            </div>

            <Button className="checkout-submit">Finalizar la compra</Button>
            <Button asChild variant="outline" className="checkout-back-btn">
              <Link to="/carrito">Volver al carrito</Link>
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
