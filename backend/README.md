# Portfolio Backend

Express.js backend for the portfolio website with email-based contact form submission (no database).

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

This will install:
- **express** - Web framework
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **nodemailer** - Email sending
- **nodemon** - Auto-restart on file changes (dev)

### 2. Environment Configuration
Create a `.env` file in the backend directory with:
```
PORT=5000
FRONTEND_URL=http://localhost:5173
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=onboarding@resend.dev
NOTIFY_EMAIL=your-email@gmail.com
ADMIN_TOKEN=your-secret-token
```

**Get your Resend API Key:**
1. Sign up free at [resend.com](https://resend.com)
2. Go to **API Keys** in your dashboard
3. Create a new API key (or copy the default one)
4. Paste it as `RESEND_API_KEY`

**Set `FROM_EMAIL`:**
- For testing: Use `onboarding@resend.dev` (Resend's test email)
- For production: Add a custom domain in Resend dashboard and use that email

**`NOTIFY_EMAIL`:**
- This is where contact form submissions will be sent

### 3. Start the Server

**Production mode:**
```bash
npm start
```

**Development mode (with auto-restart):**
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

- `GET /` - Health check
- `POST /api/contact` - Submit contact form (sends email to NOTIFY_EMAIL)

## Email Configuration

SQLite database is automatically created as `portfolio.db` when the server starts.

### Contact Table Schema
```
- id (Integer, Primary Key)
- name (String, Required)
- email (String, Required, Valid Email)
- phone (String, Optional)
- subject (String, Required)
- message (Text, Required)
- createdAt (Timestamp)
- updatedAt (Timestamp)
```

## Notes

- The backend runs on PORT 5000
- Frontend should run on PORT 5173 (Vite default)
- CORS is configured to accept requests from `http://localhost:5173`
