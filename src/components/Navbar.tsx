import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About",      href: "#about",      id: "about" },
  { label: "Projects",   href: "#projects",   id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Coursework", href: "#coursework", id: "coursework" },
  { label: "Contact",    href: "#contact",    id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-28% 0px -68% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      {/* Reading progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-blue-900 transition-all duration-100 origin-left"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page reading progress"
      />

      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group" aria-label="Home">
          <span className="w-7 h-7 border-2 border-blue-900 flex items-center justify-center rotate-45 group-hover:bg-blue-900 transition-colors duration-200">
            <span className="rotate-[-45deg] text-xs font-bold text-blue-900 group-hover:text-white transition-colors duration-200">
              AK
            </span>
          </span>
          <span className="font-semibold text-slate-800 text-sm tracking-wide hidden sm:block">
            Anastasios Kourbanis
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    isActive ? "text-blue-900" : "text-slate-500 hover:text-blue-900"
                  }`}
                >
                  {link.label}
                </a>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/Anastasios_Kourbanis_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 border border-blue-900 px-4 py-1.5 hover:bg-blue-900 hover:text-white transition-all duration-200"
            aria-label="Resume (opens in new tab)"
          >
            Resume
          </a>

          <button
            className="md:hidden p-1 text-slate-600 hover:text-blue-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white/96 backdrop-blur-md border-b border-slate-100 shadow-lg"
          >
            <ul className="flex flex-col px-6 py-4 gap-1" role="list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-2 py-2 font-medium text-sm transition-colors ${
                        isActive ? "text-blue-900" : "text-slate-600 hover:text-blue-900"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-blue-900" : ""}`} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-slate-100 mt-2">
                <a
                  href="/Anastasios_Kourbanis_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center text-sm font-semibold text-blue-900 border border-blue-900 px-4 py-1.5 hover:bg-blue-900 hover:text-white transition-all duration-200"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
