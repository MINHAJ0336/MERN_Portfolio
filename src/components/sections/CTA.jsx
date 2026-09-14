import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import Button from '../common/Button';

const CTA = ({ scrollToSection }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#090e1c] border border-slate-700/80 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Immediate Booking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            Have a project in mind?{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent block sm:inline">
              Let's build something great together.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Available for freelance projects, full-time opportunities, and remote roles. I bring clean code, responsive design, and rapid turnaround to your vision.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact')}
              icon={FaEnvelope}
            >
              Get in Touch
            </Button>

            <Button
              variant="whatsapp"
              size="lg"
              href={personalInfo.whatsappLink}
              target="_blank"
              icon={FaWhatsapp}
            >
              WhatsApp Chat
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ Fast Turnaround</span>
            <span>✓ Clean Modern UI</span>
            <span>✓ Direct Communication</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
