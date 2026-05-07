import { Link } from 'react-router-dom';
import { AuthNavbar } from '../components/Navbar';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import './pages.css';

// Icons
function PlusIcon({ className }) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function PackageIcon({ className }) {
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
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" x2="12" y1="22" y2="12" />
    </svg>
  );
}

function ShoppingBagIcon({ className }) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function DollarIcon({ className }) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function TrendingUpIcon({ className }) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 15" />
    </svg>
  );
}

function ImageIcon({ className }) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

const stats = [
  {
    title: 'Total productos',
    value: '4',
    subtitle: 'Productos totales',
    icon: PackageIcon,
  },
  {
    title: 'Pedidos totales',
    value: '3',
    subtitle: 'Este mes',
    icon: ShoppingBagIcon,
  },
  {
    title: 'Ventas',
    value: '$ 2,600',
    subtitle: 'Total del mes',
    icon: DollarIcon,
  },
  {
    title: 'Tasa de conversión',
    value: '12.5%',
    subtitle: '+2.5% vs mes anterior',
    icon: TrendingUpIcon,
  },
];

const products = [
  { id: 1, name: 'Nombre del producto', price: '$0000,00', status: 'En stock' },
  { id: 2, name: 'Nombre del producto', price: '$0000,00', status: 'En stock' },
  { id: 3, name: 'Nombre del producto', price: '$0000,00', status: 'En stock' },
  { id: 4, name: 'Nombre del producto', price: '$0000,00', status: 'En stock' },
];

export function DashboardPage() {
  return (
    <div className="dashboard-page">
      <AuthNavbar />

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Bienvenido,</h1>
          <p>Administra tus productos y pedidos desde aquí</p>
        </div>

        {/* Stats Grid */}
        <div className="dashboard-stats">
          {stats.map((stat) => (
            <Card key={stat.title} className="dashboard-stat-card">
              <CardContent className="dashboard-stat-content">
                <div className="dashboard-stat-row">
                  <span className="dashboard-stat-title">{stat.title}</span>
                  <stat.icon className="dashboard-stat-icon" />
                </div>
                <div className="dashboard-stat-value">{stat.value}</div>
                <p className="dashboard-stat-subtitle">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Section */}
        <div className="dashboard-products-header">
          <div>
            <h2>Mis Productos</h2>
            <p>Administra tu catálogo de productos</p>
          </div>
          <Button className="dashboard-add-btn">
            <PlusIcon className="dashboard-add-btn-icon" />
            Agregar producto
          </Button>
        </div>

        {/* Products Grid */}
        <div className="dashboard-products">
          {products.map((product) => (
            <Card key={product.id} className="dashboard-product-card">
              <div className="dashboard-product-image">
                <ImageIcon className="dashboard-product-image-icon" />
              </div>
              <CardContent className="dashboard-product-content">
                <h3 className="dashboard-product-name">{product.name}</h3>
                <div className="dashboard-product-skeleton" />
                <div className="dashboard-product-price-row">
                  <span className="dashboard-product-price">
                    {product.price}
                  </span>
                  <Badge className="dashboard-product-badge">
                    {product.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
