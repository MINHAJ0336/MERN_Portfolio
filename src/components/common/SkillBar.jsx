import { motion } from 'framer-motion';

const SkillBar = ({ name, level, icon: Icon, color, bg }) => {
  return (
    <div className="group p-3 rounded-xl bg-slate-800/30 border border-slate-800/60 hover:border-slate-700/80 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div className={`w-7 h-7 rounded-lg ${bg || 'bg-indigo-500/10'} flex items-center justify-center`}>
              <Icon className={`text-base ${color || 'text-indigo-400'}`} />
            </div>
          )}
          <span className="font-medium text-slate-200 text-sm group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400 font-semibold">{level}%</span>
      </div>

      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
