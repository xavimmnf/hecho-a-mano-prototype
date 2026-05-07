import { useParams, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import productsData from '../data/products.json';
import artisansData from '../data/artesanos.json';
import { ShopNavbar } from '../components/ShopNavbar';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import '../styles/pages.css';

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

function MinusIcon({ className }) {
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
    </svg>
  );
}

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

function ShoppingCartIcon({ className }) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export function ProductoDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { product, error } = useMemo(() => {
    if (!id) return { product: null, error: null };

    const productId = parseInt(id);
    const foundProduct = productsData.find((p) => p.id === productId);

    if (!foundProduct) {
      return { product: null, error: 'Producto no encontrado' };
    }

    const artisan = artisansData.find(
      (a) => a.name === foundProduct.artisan,
    ) || {
      id: 1,
      region: 'Región',
    };

    return {
      product: {
        ...foundProduct,
        artisanId: artisan.id,
        region: artisan.region || 'Región',
        category: 'Artesanal',
        description: `Producto artesanal único ${foundProduct.name} creado por ${foundProduct.artisan}. Hecho a mano con dedicación.`,
      },
      error: null,
    };
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="product-detail-page">
      <ShopNavbar searchPlaceholder="Buscar productos" />

      <main className="product-detail-main">
        {/* Back link */}
        <Link to="/catalogo" className="product-detail-back">
          <ArrowLeftIcon className="product-detail-back-icon" />
          Volver al catalogo
        </Link>

        <div className="product-detail-grid">
          {/* Product Image */}
          <div className="product-detail-image">
            <ImageIcon className="product-detail-image-icon" />
          </div>

          {/* Product Details */}
          <div className="product-detail-info">
            <Badge className="product-detail-category">
              {product.category}
            </Badge>
            <h1 className="product-detail-name">{product.name}</h1>

            {/* Artisan Link */}
            <div className="product-detail-artisan">
              <Link
                to={`/artesano/${product.artisanId}`}
                className="product-detail-artisan-link"
              >
                Por {product.artisan}
              </Link>
              <span className="product-detail-separator">•</span>
              <span className="product-detail-region">
                <MapPinIcon className="product-detail-region-icon" />
                {product.region}
              </span>
            </div>

            <p className="product-detail-price">{product.price}</p>

            <p className="product-detail-desc">{product.description}</p>

            {/* Quantity Selector */}
            <div className="product-detail-quantity">
              <span className="product-detail-quantity-label">Cantidad:</span>
              <div className="product-detail-quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                  disabled={quantity === 1}
                >
                  <MinusIcon className="product-detail-qty-icon" />
                </button>
                <span className="qty-display">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                >
                  <PlusIcon className="product-detail-qty-icon" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button className="product-detail-add-btn">
              <ShoppingCartIcon className="product-detail-cart-icon" />
              Agregar al carrito
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
