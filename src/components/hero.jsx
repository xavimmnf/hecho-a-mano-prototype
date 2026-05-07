import { Link } from 'react-router-dom';
import './Hero.css';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Hecho a Mano</h1>

        <p className="hero-desc">
          Cada pieza cuenta una historia de tradición, cultura y dedicación.
          Conectamos artesanos con personas que valoran lo auténtico.
        </p>
      </div>

      <div className="hero-buttons">
        <Button className="hero-btn-primary">
          <Link to="/catalogo">Explorar catalogo</Link>
        </Button>
        <Button variant="outline" className="hero-btn-outline">
          <Link to="/artesanos">Conoce a los artesanos</Link>
        </Button>
      </div>
    </section>
  );
}
