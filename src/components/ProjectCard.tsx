import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../data/projects";

/* ─── Category-specific SVG illustrations ─── */
function RoboticsSVG() {
  return (
    <svg viewBox="0 0 240 148" fill="none" className="w-full h-full" aria-hidden="true">
      <rect x="88" y="118" width="64" height="9" rx="1" stroke="rgba(30,64,175,0.5)" strokeWidth="1.5" />
      <rect x="100" y="109" width="40" height="10" rx="1" stroke="rgba(30,64,175,0.45)" strokeWidth="1.5" />
      <rect x="108" y="68" width="24" height="42" rx="1" stroke="rgba(30,64,175,0.5)" strokeWidth="1.5" />
      <rect x="103" y="56" width="34" height="14" rx="2" stroke="rgba(30,64,175,0.6)" strokeWidth="1.5" />
      <circle cx="112" cy="63" r="2.5" fill="rgba(30,64,175,0.5)" />
      <circle cx="128" cy="63" r="2.5" fill="rgba(30,64,175,0.5)" />
      <rect x="85" y="70" width="18" height="8" rx="1" stroke="rgba(30,64,175,0.4)" strokeWidth="1.2" />
      <rect x="137" y="70" width="18" height="8" rx="1" stroke="rgba(30,64,175,0.4)" strokeWidth="1.2" />
      <line x1="85" y1="74" x2="70" y2="82" stroke="rgba(30,64,175,0.35)" strokeWidth="1.2" />
      <circle cx="67" cy="83" r="4" stroke="rgba(30,64,175,0.5)" strokeWidth="1.2" />
      <line x1="155" y1="74" x2="170" y2="82" stroke="rgba(30,64,175,0.35)" strokeWidth="1.2" />
      <circle cx="173" cy="83" r="4" stroke="rgba(30,64,175,0.5)" strokeWidth="1.2" />
      <line x1="120" y1="22" x2="120" y2="56" stroke="rgba(30,64,175,0.3)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="120" cy="20" r="5" stroke="rgba(30,64,175,0.4)" strokeWidth="1.2" />
      <circle cx="120" cy="20" r="2" fill="rgba(30,64,175,0.4)" />
    </svg>
  );
}

function CFDSvg() {
  return (
    <svg viewBox="0 0 240 148" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M30 74 Q80 30 120 74 Q160 118 210 74" stroke="rgba(14,116,144,0.55)" strokeWidth="1.5" />
      <path d="M30 74 Q80 40 120 74 Q160 108 210 74" stroke="rgba(14,116,144,0.35)" strokeWidth="1" />
      <path d="M30 74 Q80 50 120 74 Q160 98 210 74" stroke="rgba(14,116,144,0.2)" strokeWidth="1" />
      {[40,65,90,115,140,165,190].map((x) => (
        <g key={x} transform={`translate(${x},${74 + 20*Math.sin((x-30)*Math.PI/90)})`}>
          <line x1="-6" y1="0" x2="6" y2="0" stroke="rgba(14,116,144,0.45)" strokeWidth="1" />
          <polygon points="6,0 3,-2.5 3,2.5" fill="rgba(14,116,144,0.45)" />
        </g>
      ))}
      <rect x="24" y="30" width="8" height="88" rx="1" fill="rgba(14,116,144,0.2)" stroke="rgba(14,116,144,0.4)" strokeWidth="1" />
      <rect x="208" y="30" width="8" height="88" rx="1" fill="rgba(14,116,144,0.2)" stroke="rgba(14,116,144,0.4)" strokeWidth="1" />
      <text x="22" y="28" fontSize="8" fill="rgba(14,116,144,0.6)" fontFamily="monospace">inlet</text>
      <text x="198" y="28" fontSize="8" fill="rgba(14,116,144,0.6)" fontFamily="monospace">outlet</text>
    </svg>
  );
}

function GearSVG() {
  const teeth = 10;
  const r = 34, ri = 24;
  const pts = Array.from({ length: teeth * 4 }, (_, i) => {
    const angle = (i / (teeth * 4)) * Math.PI * 2;
    const radius = i % 4 < 2 ? r : ri;
    return `${120 + radius * Math.cos(angle)},${74 + radius * Math.sin(angle)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 240 148" fill="none" className="w-full h-full" aria-hidden="true">
      <polygon points={pts} stroke="rgba(120,53,15,0.55)" strokeWidth="1.5" fill="rgba(120,53,15,0.08)" strokeLinejoin="round" />
      <circle cx="120" cy="74" r="10" stroke="rgba(120,53,15,0.5)" strokeWidth="1.5" />
      <circle cx="120" cy="74" r="3" fill="rgba(120,53,15,0.4)" />
      <line x1="120" y1="44" x2="120" y2="36" stroke="rgba(120,53,15,0.3)" strokeWidth="1" />
      <line x1="148" y1="58" x2="153" y2="51" stroke="rgba(120,53,15,0.3)" strokeWidth="1" />
      <line x1="148" y1="90" x2="153" y2="97" stroke="rgba(120,53,15,0.3)" strokeWidth="1" />
      <line x1="92" y1="58" x2="87" y2="51" stroke="rgba(120,53,15,0.3)" strokeWidth="1" />
      <circle cx="170" cy="74" r="14" stroke="rgba(120,53,15,0.35)" strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="70" cy="74" r="14" stroke="rgba(120,53,15,0.35)" strokeWidth="1.2" strokeDasharray="3 2" />
    </svg>
  );
}

function RoverSVG() {
  return (
    <svg viewBox="0 0 240 148" fill="none" className="w-full h-full" aria-hidden="true">
      <rect x="60" y="58" width="120" height="36" rx="3" stroke="rgba(88,28,135,0.5)" strokeWidth="1.5" />
      <rect x="80" y="40" width="80" height="19" rx="2" stroke="rgba(88,28,135,0.4)" strokeWidth="1.2" />
      <rect x="110" y="28" width="20" height="13" rx="1" stroke="rgba(88,28,135,0.35)" strokeWidth="1" />
      <circle cx="82" cy="104" r="14" stroke="rgba(88,28,135,0.5)" strokeWidth="1.5" />
      <circle cx="82" cy="104" r="5" stroke="rgba(88,28,135,0.4)" strokeWidth="1" />
      <circle cx="158" cy="104" r="14" stroke="rgba(88,28,135,0.5)" strokeWidth="1.5" />
      <circle cx="158" cy="104" r="5" stroke="rgba(88,28,135,0.4)" strokeWidth="1" />
      <line x1="60" y1="94" x2="82" y2="90" stroke="rgba(88,28,135,0.3)" strokeWidth="1" />
      <line x1="180" y1="94" x2="158" y2="90" stroke="rgba(88,28,135,0.3)" strokeWidth="1" />
      <circle cx="120" cy="46" r="3" fill="rgba(88,28,135,0.4)" />
      <rect x="88" y="65" width="20" height="10" rx="1" stroke="rgba(88,28,135,0.35)" strokeWidth="1" />
      <rect x="132" y="65" width="20" height="10" rx="1" stroke="rgba(88,28,135,0.35)" strokeWidth="1" />
    </svg>
  );
}

const categoryIllustration: Record<string, React.FC> = {
  "Robotics":        RoboticsSVG,
  "Fluid Mechanics": CFDSvg,
  "Manufacturing":   GearSVG,
  "Systems":         RoverSVG,
};

const categoryAccent: Record<string, string> = {
  "Robotics":        "bg-blue-50",
  "Fluid Mechanics": "bg-cyan-50",
  "Manufacturing":   "bg-amber-50",
  "Systems":         "bg-violet-50",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Illustration = categoryIllustration[project.category];
  const accentBg = categoryAccent[project.category] ?? "bg-slate-50";

  return (
    <motion.article
      role="listitem"
      className="group border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      aria-label={project.title}
    >
      {/* Illustration */}
      <div className={`relative h-44 overflow-hidden ${accentBg} flex items-center justify-center`}>
        <div className="absolute inset-0 blueprint-grid-fine opacity-60" aria-hidden="true" />
        <span aria-hidden="true" className="absolute top-2 left-2 w-3 h-3 border-t border-l border-blue-900/25" />
        <span aria-hidden="true" className="absolute top-2 right-2 w-3 h-3 border-t border-r border-blue-900/25" />
        <span aria-hidden="true" className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-blue-900/25" />
        <span aria-hidden="true" className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-blue-900/25" />

        <div className="relative z-10 w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.03]">
          {Illustration ? <Illustration /> : null}
        </div>

        <div className="absolute top-3 left-3 z-20">
          <span className="text-[10px] font-mono text-slate-500 bg-white/80 border border-slate-200 px-2 py-0.5">
            {project.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="font-semibold text-slate-900 text-base mb-1.5">{project.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2 border-t border-dashed border-slate-100 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-900 transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FiGithub size={13} /> GitHub
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-900 transition-colors"
              aria-label={`Case study for ${project.title}`}
            >
              <FiExternalLink size={13} /> Case Study
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
