# Frontend Project Structure

The portfolio frontend has been reorganized into a modular component structure for better maintainability and scalability.

## 📁 Directory Structure

```
src/
├── components/               # React components
│   ├── Header.jsx           # Navigation header with mobile menu
│   ├── Footer.jsx           # Footer with social links
│   ├── icons/               # Icon components
│   │   └── index.jsx        # MenuIcon, CloseIcon
│   ├── common/              # Reusable components
│   │   ├── SecHead.jsx      # Section heading component
│   │   └── CIItem.jsx       # Contact info item component
│   ├── sections/            # Page sections
│   │   ├── Home.jsx         # Hero section
│   │   ├── Portfolio.jsx    # Portfolio showcase
│   │   ├── Services.jsx     # Services section
│   │   ├── Experience.jsx   # Experience timeline & skills
│   │   ├── Projects.jsx     # Featured projects
│   │   ├── (removed) Education.jsx    # section deleted by user
│   │   └── Contact.jsx      # Contact form
│
├── constants/               # Data and constants
│   └── data.js             # All portfolio data (portfolio items, services, etc.)
│
├── styles/                  # Stylesheet
│   └── styles.css          # Global styles (moved from App.jsx)
│
├── assets/                  # Static assets
├── App.jsx                  # Main App component
├── main.jsx                 # React entry point
└── index.css               # Basic reset styles
```

## 🔄 Component Flow

```
App.jsx (Main Component)
├── Header (Navigation)
├── Home (Hero section)
├── Portfolio
├── Services
├── Experience
├── Projects
# Education section has been removed from components
├── Contact (Form)
└── Footer
```

## 📝 Key Files

### **constants/data.js**
Centralized location for all portfolio data:
- `SOCIAL` - Social media links
- `NAV_LINKS` - Navigation menu items
- `PORTFOLIO_ITEMS` - Portfolio showcase items
- `SERVICES` - Services list
- `EXPERIENCES` - Work experience
- `SKILLS` - Technical skills & proficiency
- `PROJECTS` - Featured projects
- `EDUCATION` - (retained in constants but unused)

**To customize:** Edit this file with your information.

### **components/Header.jsx**
- Fixed navigation bar
- Mobile hamburger menu
- Active section highlighting
- Scroll animation

### **components/sections/**
Each section component is independent and reusable:
- Imports data from `constants/data.js`
- Imports common components from `components/common/`
- Handles its own rendering logic

### **components/common/**
Reusable components used across sections:
- `SecHead` - Styled section heading (title + accent + subtitle)
- `CIItem` - Contact information item

### **styles/styles.css**
All CSS moved from App.jsx into a single stylesheet for better organization and performance.

## ✏️ How to Customize

### 1. Update Your Data
Edit [constants/data.js](../constants/data.js):
```javascript
export const SOCIAL = {
  facebook:  "https://facebook.com/YOUR_HANDLE",
  twitter:   "https://twitter.com/YOUR_HANDLE",
  // ... etc
};

export const PORTFOLIO_ITEMS = [
  { title: "My Project", ... },
  // Add your projects
];
```

### 2. Modify a Section
Each section component can be independently modified. For example, to change the Portfolio section:

**Edit [components/sections/Portfolio.jsx](sections/Portfolio.jsx)**:
```jsx
import { PORTFOLIO_ITEMS } from '../../constants/data';
import { SecHead } from '../common/SecHead';

export function Portfolio() {
  // Your custom logic here
  return (
    <section id="portfolio" className="sec sec-alt">
      {/* Your custom JSX */}
    </section>
  );
}
```

### 3. Customize Styles
Edit [styles/styles.css](../styles/styles.css):
- Change colors in `:root` CSS variables
- Modify typography, spacing, animations
- All responsive breakpoints are at the bottom

### 4. Add New Components
Create a new component file:
```jsx
// components/sections/NewSection.jsx
export function NewSection() {
  return (
    <section id="new-section" className="sec">
      {/* Your content */}
    </section>
  );
}
```

Then import and use in [App.jsx](../App.jsx):
```jsx
import { NewSection } from './components/sections/NewSection';

export default function App() {
  return (
    <>
      {/* Other sections */}
      <NewSection />
      {/* Other sections */}
    </>
  );
}
```

## 🎨 CSS Variables

Available CSS variables for customization (in `styles/styles.css`):

```css
:root {
  --g: #00e676;           /* Primary color (green) */
  --g2: #00c853;          /* Secondary color */
  --bg: #080808;          /* Background */
  --bg2: #0d0d0d;         /* Secondary background */
  --bg3: #141414;         /* Tertiary background */
  --card: #111;           /* Card background */
  --border: #1e1e1e;      /* Border color */
  --text: #efefef;        /* Text color */
  --muted: #777;          /* Muted text */
  --hf: 'Syne', sans-serif;      /* Heading font */
  --bf: 'DM Sans', sans-serif;   /* Body font */
  --r: 14px;              /* Border radius */
  --tr: 0.3s ease;        /* Transition */
}
```

## 🚀 Benefits of This Structure

✅ **Modularity** - Each section is independent and reusable  
✅ **Maintainability** - Easy to find and update code  
✅ **Scalability** - Simple to add new features/sections  
✅ **Performance** - Better code organization for optimization  
✅ **Reusability** - Common components can be used anywhere  
✅ **Data Centralization** - Single source of truth for content  

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop:** Full layout (920px+)
- **Tablet:** Modified two-column layouts (520px - 920px)
- **Mobile:** Single column stacked layout (<520px)

Customize breakpoints in [styles/styles.css](../styles/styles.css) media queries section.

## 🔗 Parent Component Reference

**App.jsx** orchestrates all components:
- Manages scroll behavior and active section
- Handles contact form state and submission
- Manages mobile menu state
- Provides scroll detection for header animation

All state is centralized in `App.jsx` and passed down to components via props.

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
