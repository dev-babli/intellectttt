// Brand Colors
export const BRAND_COLORS = {
  primary: "#1e40af",
  secondary: "#be123c",
  accent: "#3b82f6",
  success: "#10b981",
  warning: "#f59e0b",
  info: "#06b6d4",
  white: "#ffffff",
  lightGray: "#f8fafc",
  darkGray: "#0f172a",
  slate: "#334155",
  gradient: {
    primary: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
    secondary: "linear-gradient(135deg, #be123c 0%, #9f1239 100%)",
    blueLight: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
    redLight: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
  },
};

// Navigation Menu
export const NAVIGATION_MENU = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Services', path: '/services' },
  { text: 'Global Presence', path: '/global-presence' },
  { text: 'Team', path: '/team' },
  { text: 'Blog', path: '/blog' },
  { text: 'Contact', path: '/contact' },
];

// Services Data
export const SERVICES_DATA = [
  {
    title: "AI & GenAI",
    description: "Advanced artificial intelligence and generative AI solutions",
    image: "/images/ai-and-gen-ai.webp",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Generative AI"],
  },
  {
    title: "Cloud & Application",
    description: "Scalable cloud infrastructure and application development",
    image: "/images/cloud-and-application.webp",
    features: ["Cloud Migration", "DevOps", "Microservices", "Containerization"],
  },
  {
    title: "Data & Analytics",
    description: "Comprehensive data analytics and business intelligence",
    image: "/images/Data-Analytics.webp",
    features: ["Big Data", "Business Intelligence", "Data Warehousing", "Predictive Analytics"],
  },
  {
    title: "Cybersecurity",
    description: "Robust security solutions for digital protection",
    image: "/images/cybersecurity.webp",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
  },
];

// Global Presence Data
export const GLOBAL_DATA = {
  totalCountries: 5,
  totalOffices: 15,
  totalEmployees: 1800,
  totalProjects: 500,
  countries: [
    {
      name: "United States",
      flag: "/flags/usa.png",
      offices: 6,
      employees: 450,
      cities: ["New York", "San Francisco", "Austin", "Boston", "Seattle", "Chicago"],
      specialties: ["AI/ML", "Cloud Services", "Digital Transformation"],
      timezone: "EST/PST",
      established: "2010"
    },
    {
      name: "India",
      flag: "/flags/india.png",
      offices: 4,
      employees: 800,
      cities: ["Bangalore", "Hyderabad", "Mumbai", "Chennai"],
      specialties: ["Software Development", "Data Analytics", "DevOps"],
      timezone: "IST",
      established: "2008"
    },
    {
      name: "Canada",
      flag: "/flags/canada.png",
      offices: 2,
      employees: 200,
      cities: ["Toronto", "Vancouver"],
      specialties: ["Healthcare IT", "FinTech", "E-commerce"],
      timezone: "EST/PST",
      established: "2012"
    },
    {
      name: "Mexico",
      flag: "/flags/mexico.png",
      offices: 2,
      employees: 150,
      cities: ["Mexico City", "Guadalajara"],
      specialties: ["Nearshore Development", "QA Services", "Support"],
      timezone: "CST",
      established: "2015"
    },
    {
      name: "Ireland",
      flag: "/flags/ireland.png",
      offices: 1,
      employees: 200,
      cities: ["Dublin"],
      specialties: ["European Operations", "Compliance", "Research"],
      timezone: "GMT",
      established: "2018"
    }
  ]
};

// Testimonials Data
export const TESTIMONIALS_DATA = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Intellectt delivered exceptional AI solutions that transformed our business processes. Their expertise and professionalism exceeded our expectations.',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'VP Engineering, DataFlow',
    content: 'The cloud migration project was executed flawlessly. Intellectt\'s team demonstrated deep technical knowledge and excellent project management.',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, HealthTech',
    content: 'Working with Intellectt has been a game-changer for our healthcare platform. Their cybersecurity solutions gave us peace of mind.',
    avatar: '/images/testimonial-3.jpg',
  },
];

// Company Information
export const COMPANY_INFO = {
  name: "Intellectt",
  tagline: "Delivering innovative solutions across specialized industries with expertise and precision",
  description: "We are a global technology company delivering innovative solutions across specialized industries. With 1,800+ professionals across 5 countries, we bring local expertise with global reach.",
  contact: {
    email: "info@intellectt.com",
    phone: "+1 (555) 123-4567",
    address: "Global Presence: 5 Countries",
  },
  social: {
    linkedin: "https://linkedin.com/company/intellectt",
    twitter: "https://twitter.com/intellectt",
    facebook: "https://facebook.com/intellectt",
  },
};

// Animation Configurations
export const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  slideIn: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  stagger: {
    staggerChildren: 0.1,
  },
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}; 