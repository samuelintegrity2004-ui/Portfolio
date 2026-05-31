import './Contact.css';
import { SecHead } from '../common/SecHead';
import { CIItem } from '../common/CIItem';

export function Contact({ form, setForm, handleChange, handleSubmit, formStatus }) {
  return (
    <section id="contact" className="sec reveal">
      <SecHead title="Contact" accent="Me" sub="Got a project in mind? Let's talk!" />
      <div className="contact-wrap">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            I'm open to new opportunities and exciting projects. Whether you have a question or
            just want to say hi, my inbox is always open!
          </p>
          <div className="ci-list">
            <CIItem
              emoji="/mail_icon.png"
              label="Email"
              value="samuelintegrity2004@gmail.com"
              href="mailto:samuelintegrity2004@gmail.com"
            />
            <CIItem
              emoji="/Phonecall.png"
              label="Phone"
              value="09151277509"
              href="tel:+2349151277509"
            />
            <CIItem emoji="/Location.png" label="Location" value="Enugu, Nigeria" />
          </div>
        </div>
        <form className="c-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
          />
          {formStatus === "success" && (
            <div className="f-alert ok">✅ Message sent! I'll get back to you soon.</div>
          )}
          {formStatus === "error" && (
            <div className="f-alert err">❌ Failed to send. Please email me directly.</div>
          )}
          <button
            type="submit"
            className="btn-g submit-btn"
            disabled={formStatus === "sending"}
          >
            {formStatus === "sending" ? "Sending…" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
