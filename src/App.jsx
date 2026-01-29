import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from "./components/CustomCursor";


function App() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            const children = Array.from(entry.target.querySelectorAll('.reveal-child'));
            children.forEach((child, i) => {
              const attr = child.getAttribute('data-reveal-delay');
              const attrDelay = attr ? parseInt(attr, 10) : NaN;
              const delay = Number.isFinite(attrDelay) ? attrDelay : i * 80;
              child.style.transitionDelay = `${delay}ms`;
              child.classList.add('is-visible');
            });

            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const nodes = Array.from(document.querySelectorAll('.reveal'));
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);

  return (

    <div className="min-h-screen bg-gray-900">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;

