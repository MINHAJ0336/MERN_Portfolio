import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPhp, 
  FaLaravel, 
  FaBootstrap, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiJquery, 
  SiPostman, 
  SiMysql, 
  SiNextdotjs, 
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiStripe,
  SiSocketdotio
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const skillsCategories = [
  {
    id: 'mern',
    title: 'MERN Stack Core',
    description: 'Modern full-stack JavaScript architecture, scalable API layers, real-time engines, and secure payment processing.',
    skills: [
      { name: 'React.js', level: 85, icon: FaReact, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
      { name: 'Node.js', level: 82, icon: SiNodedotjs, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
      { name: 'Express.js', level: 80, icon: SiExpress, color: 'text-slate-100', bg: 'bg-slate-100/10' },
      { name: 'MongoDB', level: 78, icon: SiMongodb, color: 'text-green-500', bg: 'bg-green-500/10' },
      { name: 'JWT (Auth)', level: 85, icon: SiJsonwebtokens, color: 'text-pink-400', bg: 'bg-pink-400/10' },
      { name: 'Stripe Payments', level: 75, icon: SiStripe, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
      { name: 'Socket.IO (Real-Time)', level: 75, icon: SiSocketdotio, color: 'text-slate-200', bg: 'bg-slate-200/10' },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: 'text-teal-400', bg: 'bg-teal-400/10' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building pixel-perfect, interactive, and responsive web interfaces with modern styling and frameworks.',
    skills: [
      { name: 'React.js', level: 85, icon: FaReact, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: 'text-teal-400', bg: 'bg-teal-400/10' },
      { name: 'JavaScript (ES6+)', level: 82, icon: FaJs, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
      { name: 'HTML5', level: 92, icon: FaHtml5, color: 'text-orange-500', bg: 'bg-orange-500/10' },
      { name: 'CSS3', level: 88, icon: FaCss3Alt, color: 'text-blue-500', bg: 'bg-blue-500/10' },
      { name: 'Bootstrap', level: 85, icon: FaBootstrap, color: 'text-purple-400', bg: 'bg-purple-400/10' },
      { name: 'jQuery', level: 65, icon: SiJquery, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    description: 'Developing server-side architecture, RESTful endpoints, relational & NoSQL databases, and authentication.',
    skills: [
      { name: 'Node.js', level: 82, icon: SiNodedotjs, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
      { name: 'Express.js', level: 80, icon: SiExpress, color: 'text-slate-100', bg: 'bg-slate-100/10' },
      { name: 'MongoDB', level: 78, icon: SiMongodb, color: 'text-green-500', bg: 'bg-green-500/10' },
      { name: 'PHP', level: 75, icon: FaPhp, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
      { name: 'Laravel', level: 65, icon: FaLaravel, color: 'text-red-500', bg: 'bg-red-500/10' },
      { name: 'MySQL', level: 70, icon: SiMysql, color: 'text-blue-300', bg: 'bg-blue-300/10' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Integrations',
    description: 'Version control, API test suites, payment gateways, and real-time event mechanisms.',
    skills: [
      { name: 'JWT Security', level: 85, icon: SiJsonwebtokens, color: 'text-pink-400', bg: 'bg-pink-400/10' },
      { name: 'Stripe API', level: 75, icon: SiStripe, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
      { name: 'Socket.IO', level: 75, icon: SiSocketdotio, color: 'text-slate-200', bg: 'bg-slate-200/10' },
      { name: 'Git', level: 80, icon: FaGitAlt, color: 'text-orange-600', bg: 'bg-orange-600/10' },
      { name: 'GitHub', level: 80, icon: FaGithub, color: 'text-slate-200', bg: 'bg-slate-200/10' },
      { name: 'Postman & REST APIs', level: 80, icon: SiPostman, color: 'text-amber-500', bg: 'bg-amber-500/10' },
      { name: 'VS Code', level: 90, icon: VscVscode, color: 'text-sky-400', bg: 'bg-sky-400/10' },
    ]
  },
  {
    id: 'learning',
    title: 'Currently Exploring',
    description: 'Continuously expanding my engineering toolkit with emerging industry standards.',
    skills: [
      { name: 'Next.js', level: 60, icon: SiNextdotjs, color: 'text-slate-100', bg: 'bg-slate-100/10' },
      { name: 'TypeScript', level: 55, icon: SiTypescript, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    ]
  }
];
