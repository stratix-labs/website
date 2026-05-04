import { igTiles } from '../data';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
    </svg>
  );
}

export default function Instagram() {
  return (
    <section className="section section--light" id="trabajos">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 32, marginBottom: 48, flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow">[ 04 ] @stratix.labs</span>
            <h2 className="h1" style={{ marginTop: 24 }}>
              Últimos trabajos<br />
              <span className="italic-serif" style={{ color: 'var(--orange)' }}>del taller.</span>
            </h2>
          </div>
          <a href="https://instagram.com/" className="btn btn--ghost" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>
            <InstagramIcon />
            Seguir en Instagram
          </a>
        </div>

        <div className="ig-grid" id="ig-grid">
          {igTiles.map((t, i) => (
            <div className="ig-tile" key={i}>
              <img src={t.q} alt={t.cap} loading="lazy" onError={e => { e.target.parentElement.style.background = 'var(--teal-600)'; e.target.remove(); }} />
              <div className="ig-tile__overlay"><span>◆ {t.cap}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
