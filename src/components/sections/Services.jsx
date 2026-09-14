import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../../data/services';
import SectionTitle from '../common/SectionTitle';

const Services = ({ scrollToSection }) => {
  return (
    <section id="services" className="section-padding relative bg-slate-950/40">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="Services Offered"
          title="Engineered Solutions For Your Digital Growth"
          subtitle="Delivering client-focused, responsive, and performant web services tailored to solve business challenges."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header with Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 mb-6">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card CTA */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-indigo-400 transition-colors"
                >
                  <span>Request This Service</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
