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
          <a href="https://store.stratixlabs.cl/productos" target='__blank' className="btn btn--ghost" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>
            Ver catálogo completo<ArrowIcon />
          </a>
        </div>
        <div id="shop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
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
        </div> 

      </div>
    </section>
  );
}
