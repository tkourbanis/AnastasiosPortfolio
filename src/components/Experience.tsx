import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences as experience, type Experience as ExperienceItem } from "../data/experience";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="technical-label mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-blue-700" />
            Experience
          </p>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Work &amp; Research
          </h2>

          <div className="relative" role="list" aria-label="Work experience timeline">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {experience.map((item: ExperienceItem, i: number) => (
                <TimelineItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
