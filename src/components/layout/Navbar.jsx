import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070a12]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/30 py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          {/* Logo & Subtitle */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-indigo-500 to-cyan-400 shrink-0">
              <div className="w-full h-full bg-[#070a12] rounded-[11px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                M
              </div>
            </div>
            <div>
              <span className="block font-bold text-white text-base tracking-wide group-hover:text-indigo-300 transition-colors">
                MINHAJ AHMED KHAN
              </span>
              <span className="block text-[11px] text-slate-400 font-medium tracking-wider uppercase">
                MERN & Full-Stack Developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-md shadow-indigo-500/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              <FaLinkedin size={18} />
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] border border-indigo-400/20"
            >
              <span>Let's Work Together</span>
              <FaArrowRight size={11} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden p-2.5 text-slate-300 hover:text-white rounded-xl bg-slate-900/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#0a0f1d] border-l border-slate-800 z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            >
              <div>
                {/* Header in drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
                      <div className="w-full h-full bg-[#070a12] rounded-[11px] flex items-center justify-center font-bold text-indigo-400">
                        M
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">MINHAJ AHMED KHAN</h3>
                      <p className="text-[11px] text-slate-400">MERN & Full-Stack Developer</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                    aria-label="Close menu"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Nav list */}
                <nav className="py-6 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Drawer info & CTA */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
                >
                  <span>Let's Work Together</span>
                  <FaArrowRight size={12} />
                </button>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>

                <p className="text-center text-[11px] text-slate-500">
                  Latifabad, Hyderabad, Pakistan
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
