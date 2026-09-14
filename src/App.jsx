import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'home',
  'about',
  'services',
  'skills',
  'experience',
  'projects',
  'certificates',
  'testimonials',
  'contact',
];

function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 100);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Sections Flow */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Stats />
        <About scrollToSection={scrollToSection} />
        <Services scrollToSection={scrollToSection} />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Testimonials />
        <CTA scrollToSection={scrollToSection} />
        <Contact />
      </main>

      {/* Modern Dark Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Back to Top floating button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
