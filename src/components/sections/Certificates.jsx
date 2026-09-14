import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaCalendarAlt, FaTimes, FaShieldAlt } from 'react-icons/fa';
import { certificates } from '../../data/certificates';
import SectionTitle from '../common/SectionTitle';

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="Credentials & Certifications"
          title="Verified Technical Certifications"
          subtitle="Accredited diplomas and technical credentials acquired throughout my continuous software engineering path."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveCert(cert)}
                className="group relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top category & year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/80 text-indigo-300 border border-slate-700/60">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <FaCalendarAlt size={10} className="text-slate-500" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Footer preview button */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-indigo-400 transition-colors">
                  <span className="flex items-center gap-1.5 font-medium">
                    <FaAward size={12} className="text-indigo-400" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-[11px] underline underline-offset-2">Inspect Details</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Inspection Modal */}
        <AnimatePresence>
          {activeCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveCert(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-[#0a0f1e] border border-slate-700 rounded-2xl p-6 shadow-2xl z-10 space-y-5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
                    <FaShieldAlt />
                    <span>Credential Verification</span>
                  </div>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mx-auto flex items-center justify-center text-3xl mb-4">
                    <FaAward />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{activeCert.title}</h3>
                  <p className="text-sm text-slate-300 font-medium">{activeCert.issuer}</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">Conferred Year: {activeCert.year}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  {activeCert.description}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setActiveCert(null)}
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Certificates;
