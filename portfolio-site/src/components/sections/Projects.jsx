import './Projects.css';
import { PROJECTS } from '../../constants/data';
import { SecHead } from '../common/SecHead';

export function Projects() {
  return (
    <section id="projects" className="sec reveal">
      <SecHead title="Featured" accent="Projects" sub="Highlight reel of work I'm most proud of" />
      {/* Desktop grid (visible on larger screens) */}
      <div className="projects-grid grid-2">
        {PROJECTS.map((p, i) => (
          <div className="proj-card dark-card" key={`card-${i}`}>
            <div className="proj-top">
              <div className="proj-visual">
                {p.image && <img src={p.image} alt={p.title} className="proj-thumb" />}
              </div>
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              {p.status ? (
                <div className="project-status">{p.status}</div>
              ) : (
                <div className="proj-links">
                  <a href={p.live} className="btn-sm solid" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={p.github} className="btn-sm outline" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <div className="proj-card dark-card mobile-card" key={`mobile-${i}`}>
            <div className="proj-top">
              <div className="proj-visual">
                {p.image && <img src={p.image} alt={p.title} className="proj-thumb" />}
              </div>
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              {p.status ? (
                <div className="project-status">{p.status}</div>
              ) : (
                <div className="proj-links">
                  <a href={p.live} className="btn-sm solid" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={p.github} className="btn-sm outline" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
