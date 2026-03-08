import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Coursework from "../components/Coursework";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Coursework />
      <Contact />
    </main>
  );
}
