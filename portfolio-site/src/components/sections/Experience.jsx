import './Experience.css';
import { EXPERIENCES, SKILLS } from '../../constants/data';
import { SecHead } from '../common/SecHead';

export function Experience({ barsReady }) {
  return (
    <section id="experience" className="sec sec-alt reveal">
      <SecHead title="My" accent="Experience" sub="Professional journey and technical expertise" />
      <div className="exp-wrap">
        <div className="timeline">
          {EXPERIENCES.map((ex, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dot" />
              <div className="tl-body">
                <span className="tl-date">{ex.period}</span>
                <h3>{ex.role}</h3>
                {ex.company && <h4>{ex.company}</h4>}
                <p>{ex.desc}</p>
                <div className="badge-row">
                  {ex.skills.map(s => (
                    <span key={s} className="badge">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-pane">
          <h3>Technical Skills</h3>
          {SKILLS.map((sk, i) => (
            <div className="skill" key={i}>
              <div className="skill-label">
                <span>{sk.name}</span>
                <span className="skill-pct">✓</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: barsReady ? `${sk.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
