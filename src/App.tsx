import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8 bg-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 border-2 border-blue-900/30 flex items-center justify-center rotate-45">
            <span className="rotate-[-45deg] text-[9px] font-bold text-blue-900/40">AK</span>
          </span>
          <span className="text-xs text-slate-400 font-mono">
            Anastasios Kourbanis — ME Portfolio
          </span>
        </div>
        <p className="text-xs text-slate-400 font-mono">
          © {new Date().getFullYear()} · Built with React &amp; Vite
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 bg-blue-900 text-white px-4 py-2 text-sm font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
