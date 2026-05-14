import { useEffect, useRef } from 'react';
import LogoSvg from './LogoSvg';
import ArrowIcon from './ArrowIcon';

export default function Nav({ state }) {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    function checkNav() {
      if (state.navTheme === 'dark' || state.hero === 'bold') {
        if (state.hero === 'bold' && window.scrollY >= window.innerHeight * 0.7) {
          // check sections below
        } else {
          nav.classList.add('nav--dark');
          if (state.navTheme !== 'dark' && state.hero !== 'bold') return;
          if (state.navTheme === 'dark') return;
        }
      }

      if (state.navTheme === 'dark') { nav.classList.add('nav--dark'); return; }

      const darkSections = document.querySelectorAll('.section--dark, .footer');
      const navBottom = nav.getBoundingClientRect().bottom;
      let overDark = false;

      if (state.hero === 'bold' && window.scrollY < window.innerHeight * 0.7) {
        overDark = true;
      } else {
        darkSections.forEach(s => {
          const r = s.getBoundingClientRect();
          if (r.top < navBottom && r.bottom > 0) overDark = true;
        });
      }

      nav.classList.toggle('nav--dark', overDark);
    }

    checkNav();
    window.addEventListener('scroll', checkNav, { passive: true });
    window.addEventListener('resize', checkNav);
    return () => {
      window.removeEventListener('scroll', checkNav);
      window.removeEventListener('resize', checkNav);
    };
  }, [state.navTheme, state.hero]);

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <a href="#" className="nav__logo" aria-label="Stratix Labs">
        <LogoSvg style={{ color: 'var(--ink)', height: '26px', width: 'auto' }} />
        <span>Stratix Labs</span>
      </a>
      <div className="nav__links">
        <a href="#servicios">Servicios</a>
        <a href="#tienda">Tienda</a>
        <a href="#materiales">Materiales</a>
        <a href="#trabajos">Trabajos</a>
        <a href="#contacto">Contacto</a>
      </div>
      <a href="https://store.stratixlabs.cl" className="nav__cta">
        Ver tienda
        <ArrowIcon />
      </a>
    </nav>
  );
}
