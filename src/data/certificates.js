import { 
  FaGlobe, 
  FaCode, 
  FaReact, 
  FaJs, 
  FaNetworkWired, 
  FaMobileAlt 
} from 'react-icons/fa';

export const certificates = [
  {
    id: 'web-dev',
    title: 'Web Development Certificate',
    issuer: 'Professional Training Institute',
    year: '2024',
    category: 'Full-Stack & Frontend',
    icon: FaReact,
    color: 'from-emerald-500 to-teal-600',
    description: 'Comprehensive certification covering modern responsive design, DOM manipulation, component-driven UI, and full-stack integration.'
  },
  {
    id: 'js-essentials',
    title: 'JavaScript Essentials',
    issuer: 'Technical Certification Board',
    year: '2024',
    category: 'Programming & Logic',
    icon: FaJs,
    color: 'from-amber-500 to-orange-600',
    description: 'Deep dive into ECMAScript specifications, asynchronous operations, array manipulation methods, and client-side application logic.'
  },
  {
    id: 'dit-diploma',
    title: 'DIT Diploma in Information Technology',
    issuer: 'Sindh Board of Technical Education',
    year: '2024',
    category: 'Information Technology',
    icon: FaCode,
    color: 'from-blue-500 to-indigo-600',
    description: 'Government recognized diploma covering computing fundamentals, system operations, database architectures, and office automation.'
  },
  {
    id: 'frontend-internship',
    title: 'Frontend Internship Certificate',
    issuer: 'Gegistan Software House',
    year: '2024',
    category: 'Industry Experience',
    icon: FaMobileAlt,
    color: 'from-pink-500 to-rose-600',
    description: 'Practical industry experience certificate validating real-world contributions in responsive layout development and client template delivery.'
  },
  {
    id: 'ccna-networking',
    title: 'CCNA Networking Foundations',
    issuer: 'Networking Academy',
    year: '2024',
    category: 'Infrastructure & Protocols',
    icon: FaNetworkWired,
    color: 'from-cyan-500 to-blue-600',
    description: 'Core understanding of computer networks, TCP/IP protocol suite, subnetting, routing architectures, and web transport security.'
  },
  {
    id: 'english-language',
    title: 'English Language Proficiency',
    issuer: 'Language Academy',
    year: '2024',
    category: 'Communication',
    icon: FaGlobe,
    color: 'from-purple-500 to-violet-600',
    description: 'Professional communication skills certification enabling effective cross-cultural collaboration with global clients and distributed teams.'
  }
];
