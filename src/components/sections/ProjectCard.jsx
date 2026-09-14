import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaStar } from 'react-icons/fa';

const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Image Box */}
      <div>
        <div className="relative h-52 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            onError={(e) => {
              // Fallback if third-party image fails
              e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop';
            }}
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Badges in header */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-indigo-300 border border-slate-700/80 backdrop-blur-md">
              {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                <FaStar className="text-amber-400 text-[10px]" />
                Featured
              </span>
            )}
          </div>

          {/* Hover Action Overlay on Image */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <button
              onClick={() => onOpenDetails(project)}
              className="px-4 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-semibold hover:bg-indigo-600 transition-colors flex items-center gap-2 border border-slate-700 shadow-lg cursor-pointer"
            >
              <FaInfoCircle size={13} />
              <span>Details</span>
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/40 cursor-pointer"
            >
              <FaExternalLinkAlt size={11} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 4).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="text-xs font-semibold text-slate-300 hover:text-indigo-400 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <FaInfoCircle size={13} className="text-indigo-400" />
          <span>View Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub for ${project.title}`}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <FaGithub size={14} />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 text-xs font-semibold transition-all shadow-sm"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
