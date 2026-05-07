import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import artisansData from '../data/artesanos.json';
import productsData from '../data/products.json';
import { ShopNavbar } from '../components/ShopNavbar';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
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

export function ArtesanoDetailPage() {
  const { id } = useParams();

  const { artisan, artisanProducts, error } = useMemo(() => {
    if (!id) return { artisan: null, artisanProducts: [], error: null };

    const artisanId = parseInt(id);
    const foundArtisan = artisansData.find((a) => a.id === artisanId);

    if (!foundArtisan) {
      return {
        artisan: null,
        artisanProducts: [],
        error: 'Artesano no encontrado',
      };
    }

    const computedArtisan = {
      ...foundArtisan,
      specialty: foundArtisan.name.split(' ')[0] || 'Artesano',
      bio: `Descubre las creaciones únicas de ${foundArtisan.name} desde ${foundArtisan.region}. Artesanía auténtica hecha a mano.`,
    };

    const products = productsData.filter(
      (p) => p.artisan === foundArtisan.name,
    );

    return { artisan: computedArtisan, artisanProducts: products, error: null };
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!artisan) return <div>Artesano no encontrado</div>;

  return (
    <div className="artesano-detail-page">
      <ShopNavbar searchPlaceholder="Buscar productos" />

      <main className="artesano-detail-main">
        <Link to="/artesanos" className="artesano-detail-back">
          <ArrowLeftIcon className="artesano-detail-back-icon" />
          Volver a artesanos
        </Link>

        <div className="artesano-detail-header">
          <div className="artesano-detail-profile">
            {/* Avatar */}
            <div className="artesano-detail-avatar">
              <ImageIcon className="artesano-detail-avatar-icon" />
            </div>

            {/* Info */}
            <div className="artesano-detail-info">
              <h1 className="artesano-detail-name">{artisan.name}</h1>
              <div className="artesano-detail-region">
                <MapPinIcon className="artesano-detail-region-icon" />
                <span>{artisan.region}</span>
              </div>
              <Badge className="artesano-detail-specialty">
                {artisan.specialty}
              </Badge>
            </div>
          </div>

          {/* Bio */}
          <div className="artesano-detail-bio">
            <h2 className="artesano-detail-bio-title">Sobre mí</h2>
            <p className="artesano-detail-bio-text">{artisan.bio}</p>
          </div>
        </div>

        {/* Products */}
        <div className="artesano-detail-products">
          <h2 className="artesano-detail-products-title">
            Productos ({artisanProducts.length})
          </h2>
          <div className="dashboard-products">
            {artisanProducts.map((product) => (
              <Card key={product.id} className="artesano-product-card">
                <div className="dashboard-product-image">
                  <ImageIcon className="artesano-product-image-icon" />
                </div>
                <CardContent className="dashboard-product-content">
                  <h3 className="artesano-product-name">{product.name}</h3>
                  <div className="artesano-product-price-wrapper">
                    <span className="artesano-product-price">
                      {product.price}
                    </span>
                  </div>
                  <Button asChild className="artesano-product-detail-btn">
                    <Link to={`/producto/${product.id}`}>Ver detalle</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
            {artisanProducts.length === 0 && (
              <p>No hay productos disponibles para este artesano.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
