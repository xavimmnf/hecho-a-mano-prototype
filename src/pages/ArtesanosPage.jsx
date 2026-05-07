import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ShopNavbar } from '../components/ShopNavbar';
import '../styles/pages.css';

import artisansData from '../data/artesanos.json';

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

const artisans = [
  {
    id: 1,
    name: 'Nombre del artesano',
    region: 'Región',
    products: 'N° de productos',
  },
  {
    id: 2,
    name: 'Nombre del artesano',
    region: 'Región',
    products: 'N° de productos',
  },
  {
    id: 3,
    name: 'Nombre del artesano',
    region: 'Región',
    products: 'N° de productos',
  },
  {
    id: 4,
    name: 'Nombre del artesano',
    region: 'Región',
    products: 'N° de productos',
  },
];

export function ArtesanosPage() {
  const data = artisansData;

  return (
    <div className="artesanos-page">
      <ShopNavbar searchPlaceholder="Buscar artesano" activePath="/artesanos" />

      <main className="artesanos-main">
        {/* Title */}
        <div className="artesanos-title">
          <h1 className="artesanos-heading">Nuestros Artesanos</h1>
          <p className="artesanos-paragraph">
            Conoce a los maestros artesanos que preservan las tradiciones
            ancestrales de Valledupar. Cada pieza cuenta una historia de
            dedicación, talento y amor por el oficio.
          </p>
        </div>

        {/* Artisan Grid */}
        <div className="artesanos-grid">
          {data.map((artisan) => (
            <div key={artisan.id} className="artesano-card">
              {/* Image Placeholder */}
              <div className="artesano-image">
                <ImageIcon className="artesano-image-icon" />
              </div>

              {/* Content */}
              <div className="artesano-content">
                <h3 className="artesano-name">{artisan.name}</h3>
                <div className="artesano-region">
                  <MapPinIcon className="artesano-region-icon" />
                  <span>{artisan.region}</span>
                  <span className="artesano-products">{artisan.products}</span>
                </div>

                {/* Skeleton lines */}
                <div className="artesano-skeleton">
                  <div className="artesano-skeleton-bar" />
                  <div className="artesano-skeleton-bar" />
                </div>

                <Button asChild className="artesano-btn">
                  <Link to={`/artesano/${artisan.id}`}>Ver perfil</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Ver mas perfiles */}
        <div className="artesanos-load-more">
          <Button className="artesanos-load-more-btn">Ver mas perfiles</Button>
        </div>
      </main>
    </div>
  );
}
