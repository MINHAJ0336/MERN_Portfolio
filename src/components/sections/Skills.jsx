import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiJsonwebtokens, 
  SiStripe, 
  SiSocketdotio, 
  SiTailwindcss 
} from 'react-icons/si';
import { skillsCategories } from '../../data/skills';
import SectionTitle from '../common/SectionTitle';
import SkillBar from '../common/SkillBar';

const mernHighlights = [
  { name: 'React.js', role: 'Frontend UI', icon: FaReact, color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
  { name: 'Node.js', role: 'Runtime Env', icon: SiNodedotjs, color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
  { name: 'Express.js', role: 'Backend API', icon: SiExpress, color: 'text-slate-100', border: 'border-slate-500/30', bg: 'bg-slate-500/10' },
  { name: 'MongoDB', role: 'NoSQL Database', icon: SiMongodb, color: 'text-green-500', border: 'border-green-500/30', bg: 'bg-green-500/10' },
  { name: 'JWT', role: 'Auth & Tokens', icon: SiJsonwebtokens, color: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-500/10' },
  { name: 'Stripe', role: 'Payments', icon: SiStripe, color: 'text-indigo-400', border: 'border-indigo-500/30', bg: 'bg-indigo-500/10' },
  { name: 'Socket.IO', role: 'Real-Time Web', icon: SiSocketdotio, color: 'text-sky-300', border: 'border-sky-500/30', bg: 'bg-sky-500/10' },
  { name: 'Tailwind CSS', role: 'Modern Styling', icon: SiTailwindcss, color: 'text-teal-400', border: 'border-teal-500/30', bg: 'bg-teal-500/10' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="Technical Proficiency"
          title="MERN Stack & Tech Arsenal"
          subtitle="Real, practical tools and frameworks I use every day to build modern, scalable full-stack web applications."
        />

        {/* Featured MERN Stack Tech Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-indigo-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                Specialized Stack
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                MERN Stack & Core Production Technologies
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-medium text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {mernHighlights.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl bg-slate-950/60 border ${tech.border} hover:bg-slate-900 transition-all flex flex-col items-center text-center group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${tech.bg} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-xl ${tech.color}`} />
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono mt-1">
                    {tech.role}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/60">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <SkillBar
                      key={sIdx}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      color={skill.color}
                      bg={skill.bg}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
