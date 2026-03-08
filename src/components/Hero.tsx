import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import profileImg from "../assets/IMG_0753.jpg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(30,64,175,0.05) 0%, transparent 70%)" }}
      />

      {/* Corner marks */}
      <div aria-hidden="true" className="absolute top-20 left-6 w-8 h-8 border-t-2 border-l-2 border-blue-900/15" />
      <div aria-hidden="true" className="absolute top-20 right-6 w-8 h-8 border-t-2 border-r-2 border-blue-900/15" />
      <div aria-hidden="true" className="absolute bottom-14 left-6 w-8 h-8 border-b-2 border-l-2 border-blue-900/15" />
      <div aria-hidden="true" className="absolute bottom-14 right-6 w-8 h-8 border-b-2 border-r-2 border-blue-900/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 items-center">

          {/* ── Left: text ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-xl">

            <motion.p variants={itemVariants} className="technical-label mb-6">
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-px bg-blue-700" />
                Portfolio / v1.0
              </span>
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
            >
              Anastasios
              <br />
              <span className="text-blue-900">Kourbanis</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-blue-900" />
              <p className="text-lg font-medium text-blue-800 tracking-wide">
                Mechanical Engineering Student
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base text-slate-500 leading-relaxed mb-10">
              Passionate about mechanical design, energy systems, and building
              innovative solutions to real-world engineering challenges.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-800 active:scale-[0.98] transition-all duration-200"
              >
                View My Work
                <HiArrowDown size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 text-sm font-semibold hover:border-blue-900 hover:text-blue-900 active:scale-[0.98] transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Spec row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-dashed border-slate-200 pt-7"
            >
              {[
                { label: "Focus Area", value: "Energy Systems & Solid Mechanics" },
                { label: "Degree",     value: "B.Sc. Mechanical Eng." },
                { label: "Status",     value: "Open to Opportunities" },
              ].map((spec) => (
                <div key={spec.label}>
                  <p className="technical-label mb-1">{spec.label}</p>
                  <p className="text-sm font-medium text-slate-700">{spec.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          >
            <div className="relative">
              <span aria-hidden="true" className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-900/35" />
              <span aria-hidden="true" className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-blue-900/35" />
              <span aria-hidden="true" className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-blue-900/35" />
              <span aria-hidden="true" className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-900/35" />

              <div className="absolute -inset-6 bg-blue-900/5 blur-2xl rounded-full" aria-hidden="true" />

              <div className="relative w-72 h-96 xl:w-80 xl:h-[420px] border-2 border-slate-200 bg-slate-50 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Anastasios Kourbanis"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="technical-label text-[10px]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <HiArrowDown size={13} className="text-blue-900/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
