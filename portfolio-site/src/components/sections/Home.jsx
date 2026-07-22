import './Home.css';
import ifeco from '../../assets/ifecos2.jpg'

export function Home({ goTo }) {
  const openCv = () => {
    window.open('/Ifeanyi_Samuel_CV.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="home reveal">
      <div className="home-content">
        <p className="greeting">Hi there!</p>
        <h1>I'm <span>Ifeanyi</span><br />a Fullstack<br />Developer</h1>
        <p className="home-p">
          I craft beautiful, responsive websites and web applications with clean code and modern design.
          Passionate about turning ideas into pixel-perfect digital realities.
        </p>
        <div className="btn-row">
          <button className="btn-g" onClick={openCv}>Hire Me</button>
          <button className="btn-o" onClick={() => goTo("experience")}>Experience</button>
        </div>
        <div className="stats">
          <div className="stat"><h3>3+</h3><p>Years Exp.</p></div>
          <div className="stat"><h3>5+</h3><p>Projects</p></div>
          <div className="stat"><h3>5+</h3><p>Clients</p></div>
        </div>
      </div>
      <div className="home-visual">
        <div className="avatar-ring">
          <img src={ifeco} alt="" />
          
        </div>
      </div>
    </section>
  );
}
