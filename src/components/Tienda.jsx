import ArrowIcon from './ArrowIcon';
import { shop } from '../data';

export default function Tienda() {
  return (
    <section className="section section--light" id="tienda">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 32, marginBottom: 56, flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow">[ 02 ] Tienda</span>
            <h2 className="h1" style={{ marginTop: 24 }}>
              Productos hechos<br />
              <span className="italic-serif" style={{ color: 'var(--orange)' }}>aquí mismo.</span>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Una selección curada de piezas fabricadas en nuestro taller. Decoración, accesorios y regalos — todos salidos de nuestras propias máquinas.
            </p>
          </div>
          <a href="#catalogo" className="btn btn--ghost" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>
            Ver catálogo completo<ArrowIcon />
          </a>
        </div>
{/**         <div id="shop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {shop.map(p => (
            <div className="shop-card" key={p.name}>
              <div className="shop-card__media">
                <img src={p.img} alt={p.name} loading="lazy" onError={e => { e.target.parentElement.style.background = 'var(--sand)'; e.target.style.display = 'none'; }} />
                <div className="shop-card__badge">◆ {p.badge}</div>
              </div>
              <div className="shop-card__row">
                <div>
                  <div className="shop-card__name">{p.name}</div>
                  <div className="shop-card__tech">{p.tech}</div>
                </div>
                <div className="shop-card__price">{p.price}</div>
              </div>
            </div>
          ))}
        </div> */}

        <div style={{ marginTop: 40, padding: 24, background: 'var(--cream)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', padding: '6px 10px', border: '1px solid var(--orange)' }}>◆ Pronto online</div>
            <span style={{ fontSize: 14, color: 'var(--ink-60)' }}>La tienda completa estará disponible en las próximas semanas. Mientras tanto escríbenos para reservas y encargos.</span>
          </div>
          <a href="#contacto" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--teal)' }}>Avísame cuando abra →</a>
        </div>
      </div>
    </section>
  );
}
