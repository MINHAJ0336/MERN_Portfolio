import { motion } from 'framer-motion';
import { 
  FaCheck, 
  FaGraduationCap, 
  FaWhatsapp, 
  FaReact
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiNodedotjs 
} from 'react-icons/si';
import { personalInfo } from '../../data/personalInfo';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const highlights = [
  'MERN Stack architecture (React, Node, Express, MongoDB)',
  'Secure authentication & role authorization with JWT',
  'Payment gateway integration with Stripe API',
  'Real-time websockets & live communication with Socket.IO',
  'Pixel-perfect responsive design using Tailwind CSS',
  'Clean code, REST API optimization & scalable databases'
];

const About = ({ scrollToSection }) => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="About Me"
          title="Transforming Ideas Into Scalable MERN & Web Realities"
          subtitle="MERN Stack & Full-Stack Developer with hands-on experience building scalable architectures, real-time engines, and responsive user experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with glass frame & badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing gradient background border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-25"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900/80 border border-slate-700/80 p-3 shadow-2xl backdrop-blur-xl">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Bottom glass banner inside image card */}
                <div className="mt-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">{personalInfo.name}</h4>
                    <p className="text-xs text-cyan-400 font-mono">MERN Stack Developer</p>
                  </div>
                  <span className="text-[11px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-medium">
                    Available for Projects
                  </span>
                </div>
              </div>

              {/* Floating tech badge: Frontend */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-indigo-500/30 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-cyan-400">
                  <FaReact size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Frontend</p>
                  <p className="text-xs font-bold text-white">React.js & Tailwind</p>
                </div>
              </div>

              {/* Floating tech badge: Backend */}
              <div className="absolute -top-4 -left-2 sm:-left-4 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-cyan-500/30 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <SiNodedotjs size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Backend & DB</p>
                  <p className="text-xs font-bold text-white">Node, Express & Mongo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Highlights & Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                MERN Stack & Full-Stack Expertise
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1.5 leading-snug">
                Building scalable web apps that perform reliably and deliver real value.
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.detailedBio}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              I specialize in creating end-to-end applications powered by modern JavaScript frameworks. From responsive client interfaces in React.js and Tailwind CSS to performant Node.js/Express.js servers, MongoDB document databases, real-time Socket.IO streams, and automated Stripe billing workflows, I ensure each project is production-grade and maintainable.
            </p>

            {/* Highlights Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Production Strengths
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5 text-indigo-400">
                      <FaCheck size={9} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal credentials info row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <FaGraduationCap size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-mono">Degree & University</p>
                  <p className="text-xs font-semibold text-white">
                    {personalInfo.degree}, {personalInfo.university}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <SiMongodb size={16} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-mono">Location & Focus</p>
                  <p className="text-xs font-semibold text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                onClick={() => scrollToSection('contact')}
              >
                Discuss a Project
              </Button>

              <Button
                variant="whatsapp"
                href={personalInfo.whatsappLink}
                target="_blank"
                icon={FaWhatsapp}
              >
                Chat on WhatsApp
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
