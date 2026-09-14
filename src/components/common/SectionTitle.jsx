import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, badge, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
      >
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`text-slate-400 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
