import { motion } from "framer-motion";
import type { Experience as ExperienceItem } from "../data/experience";

interface Props {
  item: ExperienceItem;
  index: number;
}

export default function TimelineItem({ item, index }: Props) {
  return (
    <motion.div
      role="listitem"
      className="relative pl-10"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Bolt marker */}
      <div
        className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-blue-900/30 bg-white flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full border border-blue-900 block" />
      </div>

      <div className="flex flex-col gap-0.5 mb-2">
        <div>
          <h3 className="font-semibold text-slate-900 text-base">{item.role}</h3>
          <p className="text-blue-800 text-sm font-medium">{item.company}</p>
        </div>
        <span className="text-xs font-mono text-slate-400">{item.dateRange}</span>
      </div>

      <p className="text-sm text-slate-500 leading-relaxed mb-3">{item.description}</p>

      {item.bullets && item.bullets.length > 0 && (
        <ul className="space-y-1.5" aria-label={`Details for ${item.role}`}>
          {item.bullets.map((b: string, i: number) => (
            <li key={i} className="flex gap-2 text-sm text-slate-500">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-900/40 shrink-0" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
