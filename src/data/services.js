import { 
  FaLaptopCode, 
  FaReact, 
  FaPhp, 
  FaServer, 
  FaRocket 
} from 'react-icons/fa';
import {
  SiMongodb,
  SiSocketdotio,
  SiStripe
} from 'react-icons/si';

export const services = [
  {
    id: 'mern-stack',
    title: 'MERN Stack Web Apps',
    description: 'Scalable, custom full-stack web applications architected end-to-end with MongoDB, Express.js, React.js, and Node.js with JWT authentication.',
    icon: SiMongodb,
    badge: 'Specialized',
    highlights: ['MongoDB NoSQL design', 'Express REST API backend', 'React modern UI components', 'JWT authentication']
  },
  {
    id: 'react-development',
    title: 'React.js & Tailwind SPAs',
    description: 'High-performance single-page web applications (SPAs) built with modern React, fluid animations, robust state management, and Tailwind CSS utility styling.',
    icon: FaReact,
    badge: 'Frontend',
    highlights: ['Component modularity', 'Tailwind responsive UI', 'Framer Motion animations', 'Interactive dashboards']
  },
  {
    id: 'realtime-socket',
    title: 'Real-Time Apps (Socket.IO)',
    description: 'Bi-directional, low-latency live web apps including real-time chat, live notifications, collaborative panels, and instant event updates.',
    icon: SiSocketdotio,
    badge: 'Real-Time',
    highlights: ['Socket.IO websockets', 'Event-driven architecture', 'Live data synchronization', 'Instant notifications']
  },
  {
    id: 'ecommerce-stripe',
    title: 'E-commerce & Stripe Integration',
    description: 'Conversion-ready online stores with dynamic product catalogs, shopping carts, secure checkout sessions, and automated Stripe billing workflows.',
    icon: SiStripe,
    badge: 'Payments',
    highlights: ['Stripe payment gateways', 'Shopping cart systems', 'Order management flows', 'Webhook processing']
  },
  {
    id: 'api-backend',
    title: 'Node.js & Express REST APIs',
    description: 'Secure, reliable RESTful APIs engineered for lightning-fast JSON data synchronization, token verification, third-party integrations, and high uptime.',
    icon: FaServer,
    badge: 'Backend & APIs',
    highlights: ['RESTful API endpoints', 'JWT token verification', 'Third-party integrations', 'Database connectivity']
  },
  {
    id: 'php-laravel',
    title: 'PHP & Laravel Development',
    description: 'Scalable web applications and dynamic business management portals powered by modern PHP and Laravel’s elegant MVC architecture.',
    icon: FaPhp,
    badge: 'Backend MVC',
    highlights: ['MVC architecture', 'CRUD operations', 'MySQL database design', 'Session & security handling']
  },
  {
    id: 'web-development',
    title: 'Custom Website Development',
    description: 'Custom, mobile-first business websites crafted to establish an authoritative online presence, load rapidly, and turn visitors into paying customers.',
    icon: FaLaptopCode,
    badge: 'Core Service',
    highlights: ['Tailored layouts', 'Mobile & tablet responsiveness', 'Cross-browser compatibility', 'Clean semantic code']
  },
  {
    id: 'redesign-optimization',
    title: 'Website Redesign & Optimization',
    description: 'Transform outdated, slow websites into sleek, modern, mobile-friendly powerhouses with improved Core Web Vitals and polished aesthetics.',
    icon: FaRocket,
    badge: 'Performance',
    highlights: ['Modern visual upgrade', 'Page speed optimization', 'Mobile responsiveness fixes', 'Better UX conversion']
  }
];
