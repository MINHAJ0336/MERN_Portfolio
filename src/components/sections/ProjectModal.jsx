import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLayerGroup } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative w-full max-w-3xl bg-[#090d18] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Featured
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="overflow-y-auto p-6 space-y-6">
            {/* Image Preview Banner */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950 border border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop';
                }}
              />
            </div>

            {/* Title & Overview */}
            <div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 flex items-center gap-2">
                  <FaCheckCircle size={12} />
                  <span>Key Project Highlights & Features</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 flex items-center gap-2">
                <FaLayerGroup size={12} className="text-indigo-400" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>

            <div className="flex items-center gap-3">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <FaGithub size={15} />
                  <span>Source Code</span>
                </a>
              )}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Launch Live Site</span>
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
