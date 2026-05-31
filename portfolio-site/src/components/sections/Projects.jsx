import './Projects.css';
import { PROJECTS } from '../../constants/data';
import { SecHead } from '../common/SecHead';

export function Projects() {
  return (
    <section id="projects" className="sec reveal">
      <SecHead title="Featured" accent="Projects" sub="Highlight reel of work I'm most proud of" />
      <div className="grid-2">
        {PROJECTS.map((p, i) => (
          <div className="proj-card" key={i}>
            <div className="proj-top" style={{ background: p.gradient }}>
              <span className="proj-num">0{i + 1}</span>
              <span className="proj-cat">{p.category}</span>
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="badge-row">
                {p.tech.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
              <div className="proj-links">
                <a href={p.live} className="btn-sm solid" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={p.github} className="btn-sm outline" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
