import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaArrowRight, 
  FaGithub, 
  FaLinkedin,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiStripe,
  SiSocketdotio
} from 'react-icons/si';
import { personalInfo } from '../../data/personalInfo';
import Button from '../common/Button';

const Hero = ({ scrollToSection }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.statusText}</span>
            </div>

            {/* Intro Greeting */}
            <div>
              <p className="text-indigo-400 font-mono text-sm sm:text-base tracking-wide font-medium mb-2">
                Hi, I'm {personalInfo.name}
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                MERN Stack &{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h1>
            </div>

            {/* Dynamic Role Badge */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-300 h-8">
              <span className="text-slate-400">Specializing in</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-semibold text-cyan-400 border-b-2 border-cyan-400/50 pb-0.5"
              >
                {personalInfo.roles[roleIndex]}
              </motion.span>
            </div>

            {/* Supporting Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('projects')}
                icon={FaArrowRight}
              >
                View My Projects
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => scrollToSection('contact')}
              >
                Let's Work Together
              </Button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Minhaj's GitHub"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Minhaj's LinkedIn"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Technologies snippet badges - full 8 stack */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-3">
                Core Production Tech Stack
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-cyan-500/20 text-cyan-200">
                  <FaReact className="text-cyan-400" /> React.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-emerald-500/20 text-emerald-200">
                  <SiNodedotjs className="text-emerald-400" /> Node.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-slate-700 text-slate-200">
                  <SiExpress className="text-slate-100" /> Express.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-green-500/20 text-green-200">
                  <SiMongodb className="text-green-500" /> MongoDB
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-pink-500/20 text-pink-200">
                  <SiJsonwebtokens className="text-pink-400" /> JWT
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-indigo-500/20 text-indigo-200">
                  <SiStripe className="text-indigo-400" /> Stripe
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-sky-500/20 text-sky-200">
                  <SiSocketdotio className="text-sky-300" /> Socket.IO
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-slate-900/90 border border-teal-500/20 text-teal-200">
                  <SiTailwindcss className="text-teal-400" /> Tailwind CSS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Column: Interactive Code Card + Profile Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Developer Window Card */}
            <div className="relative rounded-2xl bg-[#090e1a]/90 backdrop-blur-xl border border-slate-800/90 shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <FaTerminal className="text-slate-500 text-[10px]" />
                    mern-developer.config.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-1">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">'{personalInfo.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">title:</span>{' '}
                  <span className="text-emerald-300">'MERN Stack & Full-Stack Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-cyan-300">'React.js'</span>,{' '}
                  <span className="text-emerald-300">'Node.js'</span>,{' '}
                  <span className="text-slate-300">'Express.js'</span>,{' '}
                  <span className="text-green-400">'MongoDB'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">integrations:</span> [
                  <span className="text-pink-300">'JWT'</span>,{' '}
                  <span className="text-indigo-300">'Stripe'</span>,{' '}
                  <span className="text-sky-300">'Socket.IO'</span>,{' '}
                  <span className="text-teal-300">'Tailwind CSS'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">degree:</span>{' '}
                  <span className="text-emerald-300">'BS Software Engineering'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">location:</span>{' '}
                  <span className="text-emerald-300">'Hyderabad, Pakistan'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">availableForHire:</span>{' '}
                  <span className="text-cyan-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-indigo-400">buildSolution</span>: () =&gt; &#123;
                </div>
                <div className="pl-8 text-cyan-300">
                  return <span className="text-emerald-300">'Scalable, real-time & secure'</span>;
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;;</div>
              </div>

              {/* Card Footer with Quick Profile Card */}
              <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {personalInfo.name}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      MERN Stack Developer (2023-2027)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Floating technology badge: MERN Stack (React + Node) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 p-3 rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-xl shadow-cyan-500/10 backdrop-blur-md hidden sm:flex items-center gap-2.5"
            >
              <div className="flex -space-x-1">
                <FaReact className="text-cyan-400 text-lg" />
                <SiNodedotjs className="text-emerald-400 text-lg" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase font-mono">MERN Core</span>
                <span className="block text-xs font-bold text-white">React & Node.js</span>
              </div>
            </motion.div>

            {/* Floating technology badge: Real-time & DB (MongoDB + Socket.IO) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-4 p-3 rounded-2xl bg-slate-900/90 border border-indigo-500/30 shadow-xl shadow-indigo-500/10 backdrop-blur-md hidden sm:flex items-center gap-2.5"
            >
              <div className="flex -space-x-1">
                <SiMongodb className="text-green-500 text-lg" />
                <SiSocketdotio className="text-sky-300 text-lg" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase font-mono">Real-Time & DB</span>
                <span className="block text-xs font-bold text-white">MongoDB & Socket.IO</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
