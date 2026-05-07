import { Link } from 'react-router-dom';
import { useState } from 'react';
import productsData from '../data/products.json';
import { Footer } from '../components/footer';
import { ShopNavbar } from '../components/ShopNavbar';
import { Checkbox } from '../components/ui/Checkbox';
import { Card } from '../components/ui/Card';
import './pages.css';

// Icons
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

const categories = [
  { id: 'ceramica', label: 'Cerámica' },
  { id: 'textiles', label: 'Textiles' },
  { id: 'joyeria', label: 'Joyería' },
  { id: 'madera', label: 'Madera' },
  { id: 'cuero', label: 'Cuero' },
  { id: 'vidrio', label: 'Vidrio' },
];

const regions = [
  { id: 'caribe', label: 'Caribe' },
  { id: 'pacifico', label: 'Pacífico' },
  { id: 'andina', label: 'Andina' },
  { id: 'amazonia', label: 'Amazonia' },
];

export function CatalogoPage() {
  const [products] = useState(productsData);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <ShopNavbar searchPlaceholder="Buscar productos" activePath="/catalogo" />

      <main style={{ flex: 1, padding: '2rem 1.5rem' }}>
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Catalogo de producto</h1>
          <p className="text-muted-foreground">
            Descubre productos artesanales únicos hechos a mano
          </p>
        </div>

        <div className="catalogo-layout">
          {/* Left Sidebar - Filters */}
          <aside className="catalogo-sidebar">
            <div className="catalogo-filters">
              {/* Category Filter */}
              <div className="mb-4">
                <h3 className="font-semibold mb-4">Categoria</h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                      }}
                    >
                      <Checkbox id={category.id} />
                      <span>{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <h3 className="font-semibold mb-4">Región</h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {regions.map((region) => (
                    <label
                      key={region.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                      }}
                    >
                      <Checkbox id={region.id} />
                      <span>{region.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="catalogo-products">
            <div className="product-grid">
              {products.map((product) => (
                <Link
                  to={`/producto/${product.id}`}
                  key={product.id}
                  className="product-card"
                >
                  <div className="product-image">
                    <ImageIcon />
                  </div>
                  <div className="product-content">
                    <h3 className="font-semibold text-base">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {product.artisan}
                    </p>
                    <div className="product-skeleton">
                      <div
                        style={{
                          height: '6px',
                          width: '80px',
                          backgroundColor: 'var(--foreground)',
                          borderRadius: '9999px',
                        }}
                      />
                      <div
                        style={{
                          height: '6px',
                          width: '128px',
                          backgroundColor: 'var(--muted)',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>
                    <p className="product-price">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
