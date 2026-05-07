import { Link } from 'react-router-dom';
import { AuthNavbar } from '../components/Navbar';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Card, CardContent } from '../components/ui/Card';
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

export function PerfilPage() {
  return (
    <div className="perfil-page">
      <AuthNavbar />

      <main className="perfil-main">
        {/* Profile Header Card */}
        <Card className="perfil-card">
          <CardContent className="perfil-card-content">
            <div className="perfil-header">
              {/* Avatar */}
              <div className="perfil-avatar">
                <ImageIcon className="perfil-avatar-icon" />
              </div>

              {/* Name and Email */}
              <div className="perfil-info">
                <h1 className="perfil-name">Nombre del artesano</h1>
                <p className="perfil-email">nombreapellido@correo.com</p>
              </div>

              {/* Action Buttons */}
              <div className="perfil-actions">
                <Button variant="outline" className="perfil-btn">
                  Editar perfil
                </Button>
                <Button className="perfil-btn">Cambiar foto</Button>
                <Button variant="destructive" className="perfil-btn-delete">
                  Eliminar cuenta
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information Card */}
        <Card className="perfil-card">
          <CardContent className="perfil-card-content">
            <div className="perfil-section-header">
              <h2 className="perfil-section-title">Información personal</h2>
              <p className="perfil-section-desc">
                Actualiza tu información de contacto y dirección
              </p>
            </div>

            <div className="perfil-grid">
              <div className="form-group">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  placeholder="Nombre Nombre Apellido Apellido"
                  className="perfil-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="NombreApellido@corre.com"
                  className="perfil-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="+57 000-000-0000"
                  className="perfil-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="departamento">Departameno</Label>
                <Input
                  id="departamento"
                  placeholder="Nombre Departamento"
                  className="perfil-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="ciudad">Ciudad</Label>
                <Input
                  id="ciudad"
                  placeholder="Nombre Ciudad"
                  className="perfil-input"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="direccion">Dirección</Label>
                <Input
                  id="direccion"
                  placeholder="Calle #00 Carrera 00 Ubz Nombre - Mz 00 Casa A"
                  className="perfil-input"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button asChild className="perfil-logout-btn">
          <Link to="/">Cerrar sesión</Link>
        </Button>
      </main>
    </div>
  );
}
