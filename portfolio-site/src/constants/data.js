/* ══ UPDATE YOUR SOCIAL HANDLES HERE ══ */
export const SOCIAL = {
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
  { role: "Learning Experience",   company: "",  period: "2021 – 2022", desc: "I have over 4 years of hands-on experience working with modern web development technologies, including HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and other modern development tools and deployment platforms. Throughout my journey, I have focused on writing clean, maintainable, and scalable code while continuously learning new technologies, best practices, and modern software development principles.", skills: ["React"] },
  { role: "Development Experience", company: "", period: "2022 – 2023",    desc: "I have over 3 years of experience building and developing full-stack web applications from concept to deployment. I built a modern and sophisticated electronics and fashion e-commerce platform featuring secure authentication and authorization, RESTful APIs, responsive design, and a scalable, maintainable architecture. I also developed a fully functional skincare and body cream e-commerce platform, where I gained valuable experience in software architecture, application security, scalability, performance optimization, and modern development practices. I am currently working on multiple projects that continue to expand my knowledge and expertise in building reliable, production-ready web applications.", skills: ["HTML5","CSS3","JavaScript"] },
  { role: "Personality",  company: "",       period: "2024 – Present",    desc: "I enjoy working with people, sharing knowledge, and contributing to the success of every project I am involved in. I value collaboration, clear communication, and building strong relationships based on trust. I am a logical thinker, a problem solver, and someone who is always committed to delivering high-quality work while continuously learning and improving as a developer.", skills: ["HTML","CSS","React"] },
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

/* Visual skill cards used in the Experience section (images live in public/) */
export const TECH_ICONS = [
  { label: 'HTML', img: '/html.png' },
  { label: 'CSS', img: '/css.png' },
  { label: 'JavaScript', img: '/javascript.png' },
  { label: 'React', img: '/react.png' },
  { label: 'Tailwind', img: '/tailwind.png' },
  { label: 'Node.js', img: '/nodejs.png' },
  { label: 'Express', img: '/express.png' },
  { label: 'MongoDB', img: '/mongodb.png' },
  { label: 'Git', img: '/git.png' },
  { label: 'GitHub', img: '/github.png' },
];

/* ═══════════ PROJECTS ═══════════ */
export const PROJECTS = [
  {
    title: "Ifeco",
    category: "E-commerce",
    desc: "A modern e-commerce platform for electronics and lifestyle products with product browsing, category discovery, cart flow, and a responsive storefront experience.",
    tech: ["React","CSS","JavaScript","E-commerce"],
    image: "/brandbird1.png",
    live: "https://ecommerce-site-six-psi.vercel.app",
    github: "https://github.com/samuelintegrity2004-ui/Ecommerce-site",
  },
  {
    title: "Ifeco Luxe",
    category: "E-commerce",
    desc: "A premium skincare storefront designed with an elegant product experience, responsive pages, smooth browsing, and a polished luxury brand feel.",
    tech: ["React","CSS","JavaScript","Skincare"],
    image: "/brandbird2.png",
    live: "https://ifeco-luxe-topaz.vercel.app/",
    github: "https://github.com/samuelintegrity2004-ui",
  },
  {
    title: "School Website",
    category: "Website",
    desc: "A responsive education website for programs, admissions, campus information, testimonials, and school communication across desktop and mobile.",
    tech: ["React","CSS","JavaScript","Responsive UI"],
    image: "/brandbird3.png",
    status: "Project still in progress",
  },
  {
    title: "Premium Store",
    category: "E-commerce",
    desc: "A clean shopping experience for premium products with product discovery, search-led navigation, cart access, and a conversion-focused homepage.",
    tech: ["React","CSS","JavaScript","Shopping Cart"],
    image: "/brandbird4.png",
    status: "Project still in progress",
  },
];

/* ═══════════ EDUCATION ═══════════ */
export const EDUCATION = [
  { icon: "🎓", degree: "B.Sc. Computer Science",              institution: "University of Nigeria",  period: "2018 – 2022", desc: "Studied software engineering, data structures, algorithms, and web technologies. Graduated Second Class Upper Honours." },
  { icon: "📜", degree: "Meta Frontend Developer Certificate", institution: "Coursera / Meta",         period: "2022",        desc: "Professional certificate covering React, UI/UX design principles, version control, and modern frontend development." },
  { icon: "🏆", degree: "AWS Cloud Practitioner",              institution: "Amazon Web Services",     period: "2023",        desc: "Certified in cloud fundamentals including EC2, S3, Lambda and deployment of web applications on AWS infrastructure." },
  { icon: "⚡", degree: "Advanced JavaScript Bootcamp",        institution: "Udemy",                   period: "2021",        desc: "Deep dive into modern JavaScript, ES6+, async/await, design patterns, closures, and advanced DOM manipulation." },
];
