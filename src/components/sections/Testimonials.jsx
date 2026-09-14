import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding relative bg-slate-950/40">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          badge="Sample Testimonials"
          title="Client Collaborations & Feedback"
          subtitle="Feedback structure ready for real client reviews upon project delivery."
        />

        {/* Carousel Card */}
        <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Decorative quote icon in background */}
          <FaQuoteLeft className="absolute -top-4 -left-4 text-indigo-500/10 text-9xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Star Rating */}
            <div className="flex items-center gap-1.5 text-amber-400 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} size={18} />
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[120px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-base sm:text-xl text-slate-200 font-light italic leading-relaxed max-w-3xl"
                >
                  "{currentTestimonial.review}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Client Info */}
            <div className="mt-8 flex flex-col items-center">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/40 mb-3 shadow-md"
              />
              <h4 className="text-base font-bold text-white">
                {currentTestimonial.name}
              </h4>
              <p className="text-xs text-indigo-400 font-medium">
                {currentTestimonial.role} • <span className="text-slate-400">{currentTestimonial.company}</span>
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <FaChevronLeft size={14} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === i
                        ? 'w-7 bg-indigo-500'
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
