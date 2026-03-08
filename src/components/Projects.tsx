import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="technical-label mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-blue-700" />
            Projects
          </p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Selected Work
          </h2>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Projects"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
