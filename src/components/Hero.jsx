import ArrowIcon from './ArrowIcon';
import LogoSvg from './LogoSvg';

function HeroType() {
  return (
    <section className="section section--light" style={{ paddingTop: 140, paddingBottom: 60, overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <span className="eyebrow">[ Reality, On Demand ]</span>
          <span className="eyebrow" style={{ opacity: 0.5 }}>Est. 2026 / Fabricación digital</span>
        </div>
        <h1 className="h-display" style={{ color: 'var(--teal)' }}>
          Impresión 3D.<br />
          Grabado láser.<br />
          <span className="italic-serif" style={{ color: 'var(--orange)', fontSize: '0.92em' }}>Tus ideas, fabricadas.</span>
        </h1>
        <div className="hero-foot" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 64, alignItems: 'end' }}>
          <p className="lead">
            Estudio de fabricación digital con tres tecnologías bajo un mismo techo: impresión 3D (filamento y resina) y grabado láser CO₂ y diodo. Ofrecemos servicios a medida <strong>y</strong> una tienda con piezas hechas aquí mismo.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="https://store.stratixlabs.cl" className="btn btn--primary">Ver la tienda<ArrowIcon /></a>
            <a href="#servicios" className="btn btn--ghost" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>Nuestros servicios</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="section section--light" style={{ paddingTop: 120, paddingBottom: 0 }}>
      <div className="wrap">
        <div className="hero-split" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center', minHeight: 'calc(100vh - 160px)' }}>
          <div>
            <span className="eyebrow">[ Reality, On Demand ]</span>
            <h1 className="h1" style={{ marginTop: 24, color: 'var(--teal)' }}>
              Fabricamos<br />
              <span style={{ color: 'var(--orange)' }}>lo que imaginas.</span><br />
              <span className="italic-serif" style={{ fontSize: '0.75em', fontWeight: 400 }}>Con precisión de estudio.</span>
            </h1>
            <p className="lead" style={{ marginTop: 32 }}>
              Impresión 3D y grabado láser. Servicios a medida y una <strong>tienda</strong> con piezas fabricadas aquí mismo — desde decoración hasta regalos corporativos.
            </p>
            <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://store.stratixlabs.cl" className="btn btn--primary">Ver la tienda<ArrowIcon /></a>
              <a href="#servicios" className="btn btn--ghost" style={{ color: 'var(--teal)', borderColor: 'var(--teal)' }}>Servicios</a>
            </div>
            <div style={{ marginTop: 64, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[
                { num: '01', title: 'Impresión 3D', sub: 'FDM · Resina' },
                { num: '02', title: 'Láser CO₂', sub: 'Corte · Grabado' },
                { num: '03', title: 'Láser Diodo', sub: 'Precisión fina' },
              ].map(s => (
                <div key={s.num}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink-60)', textTransform: 'uppercase' }}>[ {s.num} ]</div>
                  <div style={{ fontWeight: 700, marginTop: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-60)', fontFamily: 'var(--font-mono)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--cream)', overflow: 'hidden' }}>
            <img
              src={`${import.meta.env.BASE_URL}images/hero.png`}
              alt="Impresora 3D"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05)' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(2,47,50,0.04) 20px, rgba(2,47,50,0.04) 21px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--white)', background: 'rgba(2,47,50,0.85)', padding: 12, display: 'flex', justifyContent: 'space-between' }}>
              <span>FDM · PLA · 0.2mm</span><span>Tiempo: 1h 32min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBold() {
  return (
    <section className="section section--dark" style={{ paddingTop: 140, paddingBottom: 120, overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <LogoSvg style={{ position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)', height: '90%', opacity: 0.08, color: 'var(--orange)', pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>[ Stratix Labs / 2026 ]</span>
          <span className="eyebrow" style={{ color: 'rgba(249,249,249,0.5)', fontFamily: 'var(--font-mono)' }}>◆ 3D PRINT · CO₂ · DIODE LASER</span>
        </div>
        <h1 className="h-display" style={{ color: 'var(--white)' }}>
          Reality,<br />
          <span style={{ color: 'var(--orange)' }}>On&nbsp;Demand.</span>
        </h1>
        <div className="hero-bold-foot" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 72, alignItems: 'end' }}>
          <p className="lead" style={{ gridColumn: 'span 2' }}>
            Estudio de fabricación digital donde tu archivo se vuelve objeto. Servicios a medida en impresión 3D y láser <strong>+ tienda</strong> con piezas hechas aquí mismo.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'stretch' }}>
            <a href="https://store.stratixlabs.cl" className="btn btn--primary" style={{ justifyContent: 'space-between' }}>Ver la tienda<ArrowIcon /></a>
            <a href="#servicios" className="btn btn--ghost" style={{ justifyContent: 'space-between' }}>Servicios<ArrowIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroes = { type: HeroType, split: HeroSplit, bold: HeroBold };

export default function Hero({ variant }) {
  const Component = heroes[variant] || HeroSplit;
  return <Component />;
}
