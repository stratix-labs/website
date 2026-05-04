import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Servicios from './components/Servicios';
import Tienda from './components/Tienda';
import Materiales from './components/Materiales';
import Instagram from './components/Instagram';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';
import Tweaks from './components/Tweaks';

const DEFAULTS = { hero: 'split', navTheme: 'light', density: 'default', accent: '#EE5501' };

const densityMap = {
  compact: 'clamp(56px, 7vw, 100px)',
  default: 'clamp(80px, 10vw, 160px)',
  roomy: 'clamp(120px, 14vw, 220px)',
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('stratix_tweaks') || '{}');
    return { ...DEFAULTS, ...saved };
  } catch {
    return { ...DEFAULTS };
  }
}

export default function App() {
  const [state, setState] = useState(loadState);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--orange', state.accent);
    document.documentElement.style.setProperty('--pad-section-y', densityMap[state.density] || densityMap.default);
    localStorage.setItem('stratix_tweaks', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const handler = (e) => {
      const d = e.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode') setTweaksOpen(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', handler);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (_) {}
    return () => window.removeEventListener('message', handler);
  }, []);

  function updateState(key, value) {
    setState(prev => ({ ...prev, [key]: value }));
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*'); } catch (_) {}
  }

  return (
    <>
      <Nav state={state} />
      <main id="hero-slot">
        <Hero variant={state.hero} />
      </main>
      <Ticker />
      <Servicios />
      <Tienda />
      <Materiales />
      {/**       <Instagram /> */}
      <CtaBand />
      <Footer />
      <Tweaks state={state} onUpdate={updateState} isOpen={tweaksOpen} />
    </>
  );
}
