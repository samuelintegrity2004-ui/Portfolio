# Ifeanyi Portfolio Website

A full-stack portfolio website built with React, Express, and SQLite.

## Project Structure

```
porfolio2/
├── backend/                 # Express.js API server
│   ├── models/
│   │   └── Contact.js       # Contact form model
│   ├── database.js          # SQLite database config
│   ├── server.js            # Main server file
│   ├── package.json         # Backend dependencies
│   ├── .env                 # Environment variables
│   └── README.md            # Backend docs
│
└── portfolio-site/          # React frontend
    ├── src/
    │   ├── App.jsx          # Main portfolio component
    │   ├── main.jsx         # Entry point
    │   ├── index.css        # Global styles
    │   └── assets/          # Static assets
    ├── public/              # Static files
    ├── package.json         # Frontend dependencies
    ├── vite.config.js       # Vite configuration
    └── index.html           # HTML template
```

## Installation & Setup

### Option 1: Quick Setup (Recommended)

Open two terminal windows/tabs:

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd portfolio-site
npm install
npm run dev
```

The frontend will open at `http://localhost:5173`

### Option 2: Manual Setup

#### Backend Setup
```bash
cd backend
npm install
npm start              # Production
# OR
npm run dev            # Development with auto-reload
```

#### Frontend Setup
```bash
cd portfolio-site
npm install
npm run dev
```

## Technology Stack

### Backend
- **Express.js** - Web framework
- **Sequelize** - ORM
- **SQLite3** - Database
- **CORS** - Cross-origin support
- **Dotenv** - Environment variables
- **Nodemon** - Development server auto-reload

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling (no framework, pure CSS)

## Key Features

✅ Fully responsive portfolio website  
✅ Smooth scroll navigation  
✅ Contact form with backend persistence  
✅ Skills proficiency bars with animations  
✅ Project showcase with tech stacks  
✅ Experience timeline  
✅ Education credentials  
✅ Social media links  
✅ Dark mode design  

## Customization

### Update Your Information

Edit [portfolio-site/src/App.jsx](portfolio-site/src/App.jsx):

1. **Social Links** (Top of file):
```javascript
const SOCIAL = {
  facebook:  "https://facebook.com/YOUR_HANDLE",
  twitter:   "https://twitter.com/YOUR_HANDLE",
  linkedin:  "https://linkedin.com/in/YOUR_HANDLE",
  instagram: "https://instagram.com/YOUR_HANDLE",
  github:    "https://github.com/YOUR_HANDLE",
};
```

2. **Portfolio Items, Services, Experience, etc.** - Modify the constant arrays below

3. **Colors** - Update CSS variables in the `CSS` constant:
```css
--g: #00e676;           /* Primary green color */
--bg: #080808;          /* Background color */
```

### Avatar Image

Replace the `.avatar` div in the Home section with:
```jsx
<img src="your-photo.jpg" alt="Your name" />
```

## API Reference

### Post Contact Message
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+234 800 000 0000",
  "subject": "Project Inquiry",
  "message": "Your message here..."
}
```

Response (Success):
```json
{
  "success": true,
  "message": "Message received!",
  "id": 1
}
```

## Environment Variables

Backend `.env`:
```
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Frontend uses `http://localhost:5000` by default in the contact form.

## Troubleshooting

### npm install fails
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Port already in use
- Backend: Change `PORT` in `.env`
- Frontend: Vite will automatically use next available port

### CORS errors
Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL.

### sqlite3 compilation issues (Windows)
```bash
npm install -g windows-build-tools
npm install
```

## Deployment

### Recommended Platforms

**Frontend (Static):**
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

**Backend (Node.js):**
- Heroku
- Railway
- Render
- AWS Elastic Beanstalk

### Production Build

Frontend:
```bash
cd portfolio-site
npm run build
# Output in 'dist' folder
```

## License

MIT - Feel free to use this as your portfolio!

## Support

For issues or questions, check the individual README files in `backend/` and `portfolio-site/` folders.
