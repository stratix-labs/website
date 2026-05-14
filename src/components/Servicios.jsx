import ArrowIcon from './ArrowIcon';

const services = [
  {
    num: '[ 001 / 003 ]',
    img: 'https://images.pexels.com/photos/19871842/pexels-photo-19871842.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Impresora 3D en acción',
    placeholder: '[ 3D PRINT / FDM + RESINA ]',
    title: 'Impresión 3D',
    desc: 'Filamento FDM para piezas funcionales y resina SLA para miniaturas, joyería y detalles finos. Desde un prototipo hasta producción pequeña.',
    meta: 'FDM · SLA',
  },
  {
    num: '[ 002 / 003 ]',
    img: 'https://images.pexels.com/photos/17260646/pexels-photo-17260646.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Corte láser CO2 sobre madera',
    placeholder: '[ CO₂ LASER ]',
    title: 'Láser CO₂',
    desc: 'Corte y grabado de gran formato sobre madera, MDF, acrílico, cuero, cartón y telas. Ideal para señalética, packaging y piezas decorativas.',
    meta: 'MADERA · ACRÍLICO · CUERO',
  },
  {
    num: '[ 003 / 003 ]',
    img: 'https://images.pexels.com/photos/7097290/pexels-photo-7097290.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Láser de diodo grabando',
    placeholder: '[ DIODE LASER ]',
    title: 'Láser Diodo',
    desc: 'Corte y grabado de precisión sobre metal anodizado, cartón, papel. Perfecto para personalización de objetos y regalos únicos.',
    meta: 'CARTÓN · PAPEL · METAL',
  },
];

export default function Servicios() {
  return (
    <section className="section section--dark" id="servicios">
      <div className="wrap">
        <div className="svc-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', marginBottom: 72 }}>
          <div>
            <span className="eyebrow">[ 01 ] Qué hacemos</span>
            <h2 className="h1" style={{ marginTop: 24 }}>
              Tres tecnologías,<br />
              <span className="italic-serif" style={{ color: 'var(--orange)' }}>infinitas posibilidades.</span>
            </h2>
          </div>
          <p className="lead">
            Desde un prototipo único hasta una serie de regalos corporativos. Combinamos impresión 3D y grabado láser para materializar cualquier idea con precisión de estudio.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <article className="service" key={s.num}>
              <div className="service__num">{s.num}</div>
              <div className="service__media">
                <img src={s.img} alt={s.alt} loading="lazy" onError={e => { e.target.style.display = 'none'; }} />
                <div className="placeholder">{s.placeholder}</div>
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
              <div className="service__meta">
                <span>{s.meta}</span>
                <span className="tag">→ COTIZAR</span>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="mailto:hola@stratixlabs.cl" className="btn btn--ghost">Cotizar un proyecto</a>
        </div>
      </div>
    </section>
  );
}
