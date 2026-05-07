import { Link } from 'react-router-dom';
import { CenteredNavbar } from '../components/Navbar';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Card, CardContent } from '../components/ui/Card';
import './pages.css';

export function LoginPage() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <CenteredNavbar />

      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1rem',
        }}
      >
        <Card className="login-card">
          <CardContent>
            <div className="login-header">
              <h1>Iniciar Sesión</h1>
              <p className="text-muted-foreground">
                Ingresa tus credenciales para acceder a tu cuenta
              </p>
            </div>

            <form className="login-form">
              <div className="form-group">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div className="form-group">
                <div className="form-row">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link to="#" className="forgot-password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input id="password" type="password" placeholder="••••••••••" />
              </div>

              <Button asChild className="login-btn">
                <Link to="/dashboard">Iniciar Sesión</Link>
              </Button>
            </form>

            <p className="login-footer">
              ¿No tienes cuenta?{' '}
              <Link to="/registro" className="login-link">
                Regístrate como artesano
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
