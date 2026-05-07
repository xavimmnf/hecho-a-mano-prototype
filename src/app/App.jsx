import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import {
  HomePage,
  LoginPage,
  RegistroPage,
  CatalogoPage,
  ArtesanosPage,
  ArtesanoDetailPage,
  ProductoDetailPage,
  DashboardPage,
  PerfilPage,
  CarritoPage,
  CheckoutPage,
  HistoriaPage,
  SoportePage,
} from '../js/index';
import '../styles/index.css';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/artesanos" element={<ArtesanosPage />} />
        <Route path="/artesano/:id" element={<ArtesanoDetailPage />} />
        <Route path="/producto/:id" element={<ProductoDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/soporte" element={<SoportePage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
