import { materials } from '../data';

export default function Materiales() {
  return (
    <section className="section section--cream" id="materiales">
      <div className="wrap">
        <div className="materials">
          <div className="materials__intro">
            <span className="eyebrow">[ 03 ] Materiales</span>
            <h2 className="h1" style={{ marginTop: 24, fontSize: 'clamp(40px, 5vw, 80px)' }}>
              Elige la materia prima.{' '}
              <span className="italic-serif" style={{ color: 'var(--orange)' }}>Nosotros le damos forma.</span>
            </h2>
            <p className="lead" style={{ marginTop: 32 }}>
              Trabajamos con un catálogo vivo de materiales. ¿No ves el que necesitas? Pregúntanos — probablemente lo conseguimos.
            </p>
            <div style={{ marginTop: 40, display: 'flex', gap: 32 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: 'var(--orange)', lineHeight: 1 }}>15+</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6, color: 'var(--ink-60)' }}>Materiales<br />disponibles</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: 'var(--orange)', lineHeight: 1 }}>48h</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6, color: 'var(--ink-60)' }}>Tiempo<br />promedio</div>
              </div>
            </div>
          </div>

          <div className="materials__list">
            {materials.map(m => (
              <div className="material" key={m.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="material__tag">{m.tag}</span>
                  <div className="material__swatch" style={{ background: m.color }} />
                </div>
                <h4 className="material__name">{m.name}</h4>
                <p className="material__desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
