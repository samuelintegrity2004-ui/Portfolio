import './Projects.css';
import { PROJECTS } from '../../constants/data';
import { SecHead } from '../common/SecHead';

export function Projects() {
  return (
    <section id="projects" className="sec reveal">
      <SecHead title="Featured" accent="Projects" sub="Highlight reel of work I'm most proud of" />
      <div className="projects-grid grid-2">
        {PROJECTS.map((p, i) => (
          <article className="proj-card" key={`card-${i}`}>
            <div className="proj-top">
              {p.image && <img src={p.image} alt={p.title} className="proj-thumb" />}
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <p className="proj-tech">{p.tech.join(" + ")}</p>
              {p.status ? (
                <div className="project-status">{p.status}</div>
              ) : (
                <div className="proj-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      View
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
