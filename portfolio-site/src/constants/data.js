/* ══ UPDATE YOUR SOCIAL HANDLES HERE ══ */
export const SOCIAL = {
  facebook:  "https://facebook.com/YOUR_HANDLE",
  twitter:   "https://twitter.com/IfeanyiSam39950",
  linkedin:  "https://linkedin.com/in/ifeanyi-samuel-436a31276",
  whatsapp:  "https://wa.me/2348108882001",
  github:    "https://github.com/samuelintegrity2004-ui",
};

/* ═══════════ NAVIGATION ═══════════ */
export const NAV_LINKS = [
  { id: "home",       label: "Home"       },
  { id: "services",   label: "Services"   },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects"   },
  // Education removed per request
];

/* ═══════════ SERVICES ═══════════ */
export const SERVICES = [
  { icon: "/web-development.png", title: "Web Development",          desc: "Fast, scalable, accessible websites and web apps using modern frameworks.",      features: ["React","HTML5 / CSS3","JavaScript","REST APIs integration"] },
  { icon: "/responsive-design.png", title: "Responsive Design",        desc: "Pixel-perfect experiences on every screen — mobile, tablet and desktop.",        features: ["Mobile-first approach","Cross-browser support","Fluid grid layouts","Touch-friendly UI"] },
  { icon: "/performance-optimization.png", title: "Performance Optimisation", desc: "Blazing-fast apps via optimised assets, lazy-loading and caching strategies.",   features: ["Core Web Vitals","Code splitting","Image optimisation","SEO best practices"] },
  { icon: "/Api-integration.png", title: "API Integration",          desc: "Connecting your frontend to third-party services, payment gateways and backends.",features: ["REST & GraphQL","Payment gateways","Social auth","Real-time data"] },
  { icon: "/maintenance-support.png", title: "Maintenance & Support",    desc: "Ongoing bug fixes and feature enhancements to keep your product running smoothly.",features: ["Bug fixing","Feature updates","Security patches","Performance monitoring"] },
];

/* ═══════════ EXPERIENCES ═══════════ */
export const EXPERIENCES = [
  { role: "Frontend Developer",   company: "",  period: "2021 – 2022", desc: "Crafting responsive, modern, and user-friendly web interfaces using React, JavaScript, and contemporary frontend technologies to deliver smooth digital experiences.", skills: ["React"] },
  { role: "Backend Developer", company: "", period: "2022 – 2023",    desc: "Building secure, scalable, and efficient server-side applications with Node.js, Express, and database integration to power reliable web solutions.", skills: ["HTML5","CSS3","JavaScript"] },
  { role: "Full Stack Developer",  company: "",       period: "2026 – Present",    desc: "Combining frontend creativity with backend logic to design and develop complete web applications from concept to deployment, ensuring performance and scalability.", skills: ["HTML","CSS","React"] },
];

/* ═══════════ SKILLS ═══════════ */
export const SKILLS = [
  { name: "HTML & CSS",    level: 100 },
  { name: "JavaScript",   level: 100 },
  { name: "React.js",     level: 100 },
  { name: "Node.js",      level: 100 },
  { name: "Express.js",   level: 100 },
  { name: "MongoDB",      level: 100 },
  { name: "Git & GitHub", level: 100 },
];

/* ═══════════ PROJECTS ═══════════ */
export const PROJECTS = [
  { title: "ShopEase",     category: "Full Stack", desc: "Complete e-commerce solution with product management, shopping cart, Paystack payments integration, and full order tracking dashboard.", tech: ["React","Node.js","MongoDB","Paystack"],   gradient: "linear-gradient(135deg,#00e676,#00897b)", live: "#", github: SOCIAL.github },
  { title: "DataViz",      category: "Frontend",   desc: "Real-time analytics dashboard monitoring business KPIs, user behaviour, and sales metrics with fully interactive Chart.js visualisations.", tech: ["React","Chart.js","Tailwind CSS"],        gradient: "linear-gradient(135deg,#69f0ae,#00c853)", live: "#", github: SOCIAL.github },
  { title: "ChatterBox",   category: "Full Stack", desc: "Real-time messaging application featuring group rooms, private chats, media sharing, and live online-presence indicators.", tech: ["React","Socket.io","Express","MongoDB"],   gradient: "linear-gradient(135deg,#b9f6ca,#1b5e20)", live: "#", github: SOCIAL.github },
  { title: "NaijaWeather", category: "Web App",    desc: "Nigeria-focused weather application with real-time data from OpenWeatherAPI, 7-day forecasts, and automatic GPS location detection.", tech: ["React","OpenWeatherAPI","Geolocation"],  gradient: "linear-gradient(135deg,#ccff90,#33691e)", live: "#", github: SOCIAL.github },
];

/* ═══════════ EDUCATION ═══════════ */
export const EDUCATION = [
  { icon: "🎓", degree: "B.Sc. Computer Science",              institution: "University of Nigeria",  period: "2018 – 2022", desc: "Studied software engineering, data structures, algorithms, and web technologies. Graduated Second Class Upper Honours." },
  { icon: "📜", degree: "Meta Frontend Developer Certificate", institution: "Coursera / Meta",         period: "2022",        desc: "Professional certificate covering React, UI/UX design principles, version control, and modern frontend development." },
  { icon: "🏆", degree: "AWS Cloud Practitioner",              institution: "Amazon Web Services",     period: "2023",        desc: "Certified in cloud fundamentals including EC2, S3, Lambda and deployment of web applications on AWS infrastructure." },
  { icon: "⚡", degree: "Advanced JavaScript Bootcamp",        institution: "Udemy",                   period: "2021",        desc: "Deep dive into modern JavaScript, ES6+, async/await, design patterns, closures, and advanced DOM manipulation." },
];
