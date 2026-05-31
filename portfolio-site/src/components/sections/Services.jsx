import './Services.css';
import { SERVICES } from '../../constants/data';
import { SecHead } from '../common/SecHead';

export function Services() {
  return (
    <section id="services" className="sec reveal">
      <SecHead title="My" accent="Services" sub="What I bring to the table for your next project" />
      <div className="grid-3">
        {SERVICES.map((s, i) => (
          <div className="svc-card" key={i}>
            <div className="svc-icon"><img src={s.icon} alt={s.title} /></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul>
              {s.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
