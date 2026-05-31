import { SOCIAL, NAV_LINKS } from '../constants/data';
import './Footer.css';

export function Footer({ goTo }) {
  return (
    <footer className="footer">
      <button className="logo" onClick={() => goTo("home")}>
        <span>Ifea</span>nyi
      </button>
      <p className="footer-tag">Frontend Developer · Nigeria 🇳🇬</p>
      <div className="footer-socials">
        <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" title="Facebook">f</a>
        <a href={SOCIAL.twitter} target="_blank" rel="noreferrer" title="Twitter/X">𝕏</a>
        <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">in</a>
        <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" title="WhatsApp">wa</a>
        <a href={SOCIAL.github} target="_blank" rel="noreferrer" title="GitHub">gh</a>
      </div>
      <ul className="footer-nav">
        {NAV_LINKS.map(l => (
          <li key={l.id}>
            <button onClick={() => goTo(l.id)}>{l.label}</button>
          </li>
        ))}
        <li><button onClick={() => goTo("contact")}>Contact</button></li>
      </ul>
      <p className="copy">© 2024 Ifeanyi · All Rights Reserved</p>
    </footer>
  );
}
