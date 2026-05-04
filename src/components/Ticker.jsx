const items = [
  'Impresión 3D FDM', 'Resina SLA/LCD', 'Láser CO₂', 'Láser Diodo',
  'Prototipos', 'Producción en serie', 'Diseño personalizado',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <section style={{ background: 'var(--white)', color: 'var(--teal)' }}>
      <div className="ticker">
        <div className="ticker__track">
          {doubled.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
