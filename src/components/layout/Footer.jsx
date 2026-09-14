import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

const footerNav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#070a12] rounded-[11px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  M
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-wider">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              MERN Stack & Full-Stack Developer building modern, scalable, real-time web applications with React.js, Node.js, Express.js, and MongoDB.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-medium">Available for freelance & full-time roles</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Connect Directly
            </h4>
            <p className="text-xs text-slate-400">
              Have questions or an opportunity? Reach out via WhatsApp or email.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React & <FaHeart className="text-rose-500 inline text-xs" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
