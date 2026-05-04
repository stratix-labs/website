import LogoSvg from './LogoSvg';

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <LogoSvg style={{ height: 40, width: 'auto', color: 'var(--white)', marginBottom: 16 }} />
            <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 12 }}>Stratix Labs</h3>
            <p className="italic-serif" style={{ fontSize: 20, color: 'var(--orange)', marginTop: 4 }}>Reality, On Demand.</p>
            <p style={{ marginTop: 20, color: 'rgba(249,249,249,0.6)', fontSize: 14, maxWidth: 320, lineHeight: 1.5 }}>
              Estudio de fabricación digital. Impresión 3D y grabado láser bajo un mismo techo.
            </p>
          </div>

          <div className="footer__col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#">Impresión 3D FDM</a></li>
              <li><a href="#">Impresión 3D Resina</a></li>
              <li><a href="#">Corte y Grabado láser CO₂</a></li>
              <li><a href="#">Corte y Grabado láser diodo</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Tienda</h5>
            <ul>
              <li><a href="#">Novedades</a></li>
              <li><a href="#">Decoración</a></li>
              <li><a href="#">Regalos</a></li>
              <li><a href="#">Personalizables</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5>Contacto</h5>
            <ul>
              <li><a href="mailto:hola@stratixlabs.cl">hola@stratixlabs.cl</a></li>
              <li><a href="https://www.instagram.com/stratixlabs/" target='__blank'>Instagram →</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Stratix Labs</span>
          <span>Hecho en el taller ◆ v1.0</span>
        </div>
      </div>
    </footer>
  );
}
