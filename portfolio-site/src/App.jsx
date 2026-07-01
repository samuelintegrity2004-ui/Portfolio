import { useState, useEffect } from "react";
import './styles/styles.css';

// Components
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/sections/Home';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
// Education component removed per user request
import { Contact } from './components/sections/Contact';

export default function App() {
  const [active,     setActive]     = useState("home");
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [barsReady,  setBarsReady]  = useState(false);
  const [form,       setForm]       = useState({ name:"", email:"", message:"" });
  const [formStatus, setFormStatus] = useState("");
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const ids = ["home","services","experience","projects","contact"];
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) cur = id;
        if (id === "experience" && el && window.scrollY >= el.offsetTop - 200) setBarsReady(true);
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const payload = { name: form.name, email: form.email, message: form.message };
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setFormStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name:"", email:"", message:"" });
    } catch {
      setFormStatus("error");
    }
    setTimeout(() => setFormStatus(""), 6000);
  };

  return (
    <ErrorBoundary>
      <Header active={active} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />
      
      <Home goTo={goTo} />
      <Services />
      <Experience barsReady={barsReady} />
      <Projects />
      {/* Education section removed */}
      <Contact form={form} setForm={setForm} handleChange={handleChange} handleSubmit={handleSubmit} formStatus={formStatus} />
      
      <Footer goTo={goTo} />
    </ErrorBoundary>
  );
}
