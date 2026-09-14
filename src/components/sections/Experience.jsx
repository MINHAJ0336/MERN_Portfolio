import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { experience } from '../../data/experience';
import { education } from '../../data/education';
import SectionTitle from '../common/SectionTitle';

const Experience = () => {
  const [activeView, setActiveView] = useState('both'); // 'both', 'experience', 'education'

  return (
    <section id="experience" className="section-padding relative bg-slate-950/40">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="Journey & Background"
          title="Experience & Academic Foundation"
          subtitle="Real practical development track record combined with rigorous software engineering studies."
        />

        {/* Filter Toggle */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center">
            <button
              onClick={() => setActiveView('both')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'both'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveView('experience')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeView === 'experience'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaBriefcase size={12} />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveView('education')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeView === 'education'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaGraduationCap size={13} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Dual column timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Work Experience Column */}
          {(activeView === 'both' || activeView === 'experience') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <FaBriefcase size={18} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Work Experience</h3>
                  <p className="text-xs text-slate-400">Practical software engineering & freelance delivery</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-indigo-500/30 space-y-8 ml-3">
                {experience.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#070a12] border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/50" />

                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 group-hover:border-indigo-500/40 transition-all shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                          <FaMapMarkerAlt size={10} className="text-slate-500" />
                          {exp.location}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-slate-300 mb-3">{exp.company}</p>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                            <FaCheckCircle className="text-indigo-400 shrink-0 mt-0.5 text-[11px]" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {exp.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Education Column */}
          {(activeView === 'both' || activeView === 'education') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education & Academics</h3>
                  <p className="text-xs text-slate-400">Formal computer science & software engineering curriculum</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-8 ml-3">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#070a12] border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors shadow-md shadow-cyan-500/50" />

                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 group-hover:border-cyan-500/40 transition-all shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {edu.period}
                        </span>
                        <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          {edu.status}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-300 mb-3">{edu.institution}</p>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      <ul className="space-y-2">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Experience;
