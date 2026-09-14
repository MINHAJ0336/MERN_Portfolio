import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaSpinner
} from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import { sendContactMessage } from '../../utils/contactService';
import SectionTitle from '../common/SectionTitle';

const projectTypes = [
  'Custom Web Application',
  'React / Frontend Project',
  'PHP / Laravel Development',
  'E-commerce Storefront',
  'Website Redesign & Speed',
  'Other Inquiries'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Custom Web Application',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setErrors({});
    setLoading(true);

    try {
      await sendContactMessage(formData);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Custom Web Application',
        budget: '',
        message: '',
      });
    } catch (err) {
      if (err.validationErrors) {
        setErrors(err.validationErrors);
        setStatus({
          type: 'error',
          message: 'Please resolve the highlighted validation errors below.',
        });
      } else {
        setStatus({
          type: 'error',
          message: err.message || 'Something went wrong. Please try again or reach out on WhatsApp.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="Get in Touch"
          title="Let's Discuss Your Next Project"
          subtitle="Whether you have an inquiry, need a website built, or want to explore collaboration opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out directly via email, phone, or WhatsApp. I usually respond within a few hours.
              </p>
            </div>

            {/* Availability pill */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-xs font-bold text-emerald-400">Available For New Projects</p>
                <p className="text-[11px] text-emerald-200/80">Taking on freelance & full-time opportunities</p>
              </div>
            </div>

            {/* Contact details list */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400 font-mono">Email Address</p>
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
                  <FaPhone size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Direct Phone Call</p>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Instant WhatsApp Chat</p>
                  <p className="text-sm font-semibold text-emerald-400 group-hover:underline">
                    {personalInfo.phone} (Quick Reply)
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Location</p>
                  <p className="text-sm font-medium text-slate-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 shrink-0">
                  <FaClock size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Working Hours & Availability</p>
                  <p className="text-sm font-medium text-slate-200">
                    Mon - Sat: 9:00 AM - 10:00 PM (PKT)
                  </p>
                </div>
              </div>
            </div>

            {/* Socials row */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Social Profiles
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs font-semibold"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs font-semibold"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-9 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and I will get back to you with a proposal or consultation.
              </p>

              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs sm:text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <FaCheckCircle className="shrink-0 mt-0.5 text-base" />
                  ) : (
                    <FaExclamationCircle className="shrink-0 mt-0.5 text-base" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/40'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone and Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone Number <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                    >
                      {projectTypes.map((type, i) => (
                        <option key={i} value={type} className="bg-slate-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Budget Range (Optional) */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Estimated Budget <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. $300 - $1,000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Message & Requirements <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, goals, key features, and desired timeline..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/40'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 active:scale-[0.99] shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed border border-indigo-400/20 text-sm"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin text-base" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <FaPaperPlane size={13} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
