import ArrowIcon from './ArrowIcon';

export default function CtaBand() {
  return (
    <section style={{ background: 'var(--orange)', color: 'var(--white)', padding: 'clamp(60px, 8vw, 120px) 0' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
        <div>
          <h2 className="h1" style={{ fontSize: 'clamp(40px, 6vw, 84px)', color: 'var(--white)' }}>
            ¿Tienes una idea?<br />
            <span className="italic-serif" style={{ opacity: 0.85 }}>Vamos a fabricarla.</span>
          </h2>
        </div>
        <a href="#contacto" className="btn" style={{ background: 'var(--teal)', color: 'var(--white)', padding: '24px 32px', fontSize: 14 }}>
          Hablemos<ArrowIcon />
        </a>
      </div>
    </section>
  );
}
