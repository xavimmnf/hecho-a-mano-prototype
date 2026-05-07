import { Link } from 'react-router-dom';
import { CenteredNavbar } from '../components/Navbar';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Card, CardContent } from '../components/ui/Card';
import './pages.css';

export function RegistroPage() {
  return (
    <div className="registro-page">
      <CenteredNavbar />

      <main className="registro-main">
        <Card className="registro-card">
          <CardContent>
            <div className="registro-header">
              <h1 className="registro-title">Registro de artesanos</h1>
              <p className="registro-subtitle">
                Únete a nuestra comunidad y comparte tu arte con miles de
                personas
              </p>
            </div>

            <form className="registro-form">
              <div className="form-group">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  placeholder="Nombre Nombre Apellido Apellido"
                />
              </div>

              <div className="registro-grid registro-grid-4">
                <div className="form-group">
                  <Label htmlFor="email">
                    Correo Electrónico{' '}
                    <span className="registro-required">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+57 000-000-0000"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••••"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••••"
                  />
                </div>
              </div>

              <div className="registro-grid">
                <div className="form-group">
                  <Label>
                    Region <span className="registro-required">*</span>
                  </Label>
                  <Select>
                    <option value="">Seleccione su región</option>
                    <option value="caribe">Caribe</option>
                    <option value="pacifico">Pacífico</option>
                    <option value="andina">Andina</option>
                    <option value="amazonia">Amazonia</option>
                  </Select>
                </div>

                <div className="form-group">
                  <Label>
                    Especialidad <span className="registro-required">*</span>
                  </Label>
                  <Select>
                    <option value="">Seleccione su especialidad</option>
                    <option value="ceramica">Cerámica</option>
                    <option value="textiles">Textiles</option>
                    <option value="joyeria">Joyería</option>
                    <option value="madera">Madera</option>
                    <option value="cuero">Cuero</option>
                  </Select>
                </div>
              </div>

              <div className="form-group">
                <Label htmlFor="biografia">
                  Biografía <span className="registro-required">*</span>
                </Label>
                <Textarea
                  id="biografia"
                  placeholder="Cuentanos sobre tu historia, tus tecnicas, y tradiciones..."
                  className="registro-textarea"
                />
              </div>

              <Button asChild className="registro-btn">
                <Link to="/dashboard">Crear cuenta de artesano</Link>
              </Button>
            </form>

            <p className="login-footer">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="login-link">
                Inicia sesión aquí
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
