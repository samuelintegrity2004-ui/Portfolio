require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const { Resend } = require('resend');

const app  = express();
const PORT = process.env.PORT || 5000;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

/* ── Middleware ── */
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// Admin authentication middleware
const adminAuth = (req, res, next) => {
  const adminToken = req.headers.authorization?.replace('Bearer ', '');
  if (!ADMIN_TOKEN || adminToken !== ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

/* ── Routes ── */

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Ifeanyi Portfolio API is running 🚀' });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }

    const finalSubject = subject || 'Portfolio message';

    let emailSent = false;
    if (resend && NOTIFY_EMAIL && FROM_EMAIL) {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `Portfolio message: ${finalSubject}`,
        html:
          `<strong>Name:</strong> ${name}<br>` +
          `<strong>Email:</strong> <a href="mailto:${email}">${email}</a><br>` +
          `<strong>Phone:</strong> ${phone || 'N/A'}<br>` +
          `<strong>Subject:</strong> ${finalSubject}<br><br>` +
          `<p>${message.replace(/\n/g, '<br>')}</p>`,
      });
      if (error) {
        throw error;
      }
      emailSent = true;
    } else {
      console.warn('Resend not configured. Set RESEND_API_KEY, FROM_EMAIL, and NOTIFY_EMAIL to enable email sending.');
    }

    console.log(`📬 New message from ${name} <${email}>`);
    res.status(201).json({ success: true, message: 'Message received!', emailSent });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

/* ── Start Server ── */
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
