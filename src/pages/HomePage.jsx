import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { Footer } from '../components/footer';

export function HomePage() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
