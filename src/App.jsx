import Starfield from './components/Starfield.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhyMe from './components/WhyMe.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main className="relative">
        <Hero />
        <WhyMe />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
