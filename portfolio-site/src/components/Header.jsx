import { NAV_LINKS } from '../constants/data';
import { MenuIcon, CloseIcon } from './icons';
import './Header.css';

export function Header({ active, scrolled, menuOpen, setMenuOpen, goTo }) {
  const handleNavClick = (id) => {
    goTo(id);
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <button className="logo" onClick={() => goTo("home")}>
        <span>Ifea</span>nyi
      </button>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(l => (
          <button
            key={l.id}
            className={`nav-link ${active === l.id ? "active" : ""}`}
            onClick={() => handleNavClick(l.id)}
          >
            {l.label}
          </button>
        ))}
        <button className="cta-btn mobile-cta" onClick={() => handleNavClick("contact")}>
          Contact Me
        </button>
      </nav>

      <button className="cta-btn desktop-cta" onClick={() => goTo("contact")}>
        Contact Me
      </button>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
}
