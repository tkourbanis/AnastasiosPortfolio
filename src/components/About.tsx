import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiDownload, HiExternalLink } from "react-icons/hi";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="technical-label mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-blue-700" />
            About Me
          </p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Background &amp; Interests
          </h2>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* Left – bio */}
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                I'm a final-year Mechanical Engineering student at the <strong className="text-slate-800">University of Toronto</strong> interested in mechanical design, energy systems, and solving real engineering problems. I enjoy taking ideas from concept to working hardware using CAD, simulation, and prototyping, with a focus on designs that are efficient, manufacturable, and practical.
              </p>

              {/* Skill tags */}
              <div className="pt-4">
                <p className="technical-label mb-3">Core Competencies</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SOLIDWORKS", "Autodesk Inventor", "CATIA", "ANSYS",
                    "MATLAB", "Python", "Onshape", "Energy2D",
                    "Visio", "Primavera P6", "Microsoft Office",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-blue-900 border border-blue-200 bg-blue-50 px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – resume card */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 20px 56px rgba(30,64,175,0.10)" }}
              transition={{ duration: 0.25 }}
              className="border border-slate-200 p-8 bg-white relative"
            >
              <span aria-hidden="true" className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-900/40" />
              <span aria-hidden="true" className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-900/40" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-900/40" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-900/40" />

              <p className="technical-label mb-4">Resume Summary</p>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Anastasios Kourbanis</h3>
              <p className="text-sm text-blue-800 font-medium mb-5">Mechanical Engineering Student</p>

              <div className="space-y-3 mb-8">
                {/* Education — special layout */}
                <div className="flex gap-3 text-sm">
                  <span className="technical-label min-w-[80px] pt-0.5">Education</span>
                  <div className="leading-snug">
                    <p className="text-slate-800 font-medium">B.Sc. Mechanical Engineering</p>
                    <p className="text-slate-500 text-xs mt-0.5">University of Toronto</p>
                    <span className="inline-block mt-1.5 text-[10px] font-mono font-semibold text-blue-800 border border-blue-200 bg-blue-50 px-2 py-0.5 tracking-wide">
                      Expected 2026
                    </span>
                  </div>
                </div>

                {[
                  { label: "Key Skills", value: "Design & CAD, Simulation & Analysis, Prototyping, Energy Systems" },
                  { label: "Interests",  value: "Nuclear Systems, Renewable Energy, Mechanical Design, Thermal Systems" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 text-sm">
                    <span className="technical-label min-w-[80px] pt-0.5">{item.label}</span>
                    <span className="text-slate-600 leading-snug">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-slate-200 pt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/Anastasios_Kourbanis_Resume.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-blue-800 transition-colors duration-150"
                  aria-label="Download resume PDF"
                >
                  <HiDownload size={15} />
                  Download
                </a>
                <a
                  href="/Anastasios_Kourbanis_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 text-sm font-semibold px-4 py-2.5 hover:border-blue-900 hover:text-blue-900 transition-colors duration-150"
                  aria-label="View resume in new tab"
                >
                  <HiExternalLink size={15} />
                  View
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
