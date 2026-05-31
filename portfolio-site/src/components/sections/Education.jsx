import './Education.css';
import { EDUCATION } from '../../constants/data';
import { SecHead } from '../common/SecHead';

export function Education() {
  return (
    <section id="education" className="sec sec-alt">
      <SecHead title="My" accent="Education" sub="Academic background and professional certifications" />
      <div className="grid-2">
        {EDUCATION.map((ed, i) => (
          <div className="edu-card" key={i}>
            <span className="edu-icon">{ed.icon}</span>
            <div>
              <span className="edu-period">{ed.period}</span>
              <h3>{ed.degree}</h3>
              <h4>{ed.institution}</h4>
              <p>{ed.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
