export default function Tweaks({ state, onUpdate, isOpen }) {
  const groups = [
    { key: 'hero', label: 'Hero', options: [{ value: 'type', label: 'Tipo XL' }, { value: 'split', label: 'Split' }, { value: 'bold', label: 'Fondo' }] },
    { key: 'navTheme', label: 'Tema nav', options: [{ value: 'light', label: 'Claro' }, { value: 'dark', label: 'Oscuro' }] },
    { key: 'density', label: 'Densidad', options: [{ value: 'compact', label: 'Compacta' }, { value: 'default', label: 'Normal' }, { value: 'roomy', label: 'Aireada' }] },
    { key: 'accent', label: 'Acento', options: [{ value: '#EE5501', label: 'Naranja' }, { value: '#D34A00', label: 'Quemado' }, { value: '#FF7A2E', label: 'Brillante' }] },
  ];

  return (
    <div className={`tweaks${isOpen ? ' is-open' : ''}`} id="tweaks">
      <h4>◆ Tweaks</h4>
      {groups.map(g => (
        <div className="tweaks__group" key={g.key}>
          <span className="tweaks__label">{g.label}</span>
          <div className="tweaks__buttons">
            {g.options.map(o => (
              <button
                key={o.value}
                className={state[g.key] === o.value ? 'is-active' : ''}
                onClick={() => onUpdate(g.key, o.value)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
