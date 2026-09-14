import { motion } from 'framer-motion';
import { FaLaptopCode, FaTools, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const statsData = [
  {
    id: 'projects',
    value: '10+',
    label: 'Real Web Projects',
    subtext: 'Live applications & client websites',
    icon: FaLaptopCode,
    color: 'text-indigo-400',
    borderGlow: 'hover:border-indigo-500/40',
  },
  {
    id: 'tech',
    value: '10+',
    label: 'Technologies',
    subtext: 'Frontend, backend & tooling stack',
    icon: FaTools,
    color: 'text-cyan-400',
    borderGlow: 'hover:border-cyan-500/40',
  },
  {
    id: 'learning',
    value: '2+',
    label: 'Years Learning & Building',
    subtext: 'Continuous hands-on software development',
    icon: FaGraduationCap,
    color: 'text-purple-400',
    borderGlow: 'hover:border-purple-500/40',
  },
  {
    id: 'focus',
    value: '100%',
    label: 'Client & Quality Focus',
    subtext: 'Clean code & responsive UI commitment',
    icon: FaCheckCircle,
    color: 'text-emerald-400',
    borderGlow: 'hover:border-emerald-500/40',
  },
];

const Stats = () => {
  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 transition-all duration-300 hover:-translate-y-1 ${stat.borderGlow} group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-lg">
                    <Icon className={stat.color} />
                  </div>
                </div>
                <h3 className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
