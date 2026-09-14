import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../../data/projects';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="Portfolio Showcase"
          title="Featured Works & Web Applications"
          subtitle="Explore real client platforms, e-commerce storefronts, and interactive web apps engineered with precision."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length;

            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={setActiveModalProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            No projects found in this category.
          </div>
        )}

        {/* Project Details Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
