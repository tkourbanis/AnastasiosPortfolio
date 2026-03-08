import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { courses as coursework, type Course } from "../data/coursework";

const categoryColors: Record<string, string> = {
  "Thermal & Fluids":       "border-orange-200 bg-orange-50   text-orange-800",
  "Energy Systems":         "border-blue-200   bg-blue-50     text-blue-800",
  "Design & Manufacturing": "border-slate-300  bg-slate-50    text-slate-700",
  "Solid Mechanics":        "border-violet-200 bg-violet-50   text-violet-800",
};

const defaultColor = "border-slate-200 bg-slate-50 text-slate-700";

const filterCategories = ["All", ...Object.keys(categoryColors)];

export default function Coursework() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? coursework
    : coursework.filter((c: Course) => c.category === activeFilter);

  return (
    <section id="coursework" aria-labelledby="coursework-heading" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="technical-label mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-blue-700" />
            Coursework
          </p>
          <h2 id="coursework-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Relevant Coursework
          </h2>

          {/* Category filter */}
          <div
            className="flex flex-wrap gap-2 mb-8"
            role="group"
            aria-label="Filter courses by category"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-medium px-3 py-1.5 border transition-all duration-150 ${
                  activeFilter === cat
                    ? "bg-blue-900 text-white border-blue-900"
                    : "bg-white text-slate-500 border-slate-200 hover:border-blue-900 hover:text-blue-900"
                }`}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-8" aria-label="Category legend">
            {Object.entries(categoryColors).map(([label, classes]) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 border ${classes.split(" ").slice(0, 2).join(" ")}`} aria-hidden="true" />
                <span className="text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </div>

          {/* Course tags */}
          <div className="flex flex-wrap gap-2.5" role="list" aria-label="Courses">
            {filtered.map((course: Course) => {
              const colorClass = categoryColors[course.category] ?? defaultColor;
              return (
                <motion.div
                  key={course.id}
                  role="listitem"
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`border px-3 py-2 text-sm font-medium cursor-default hover:-translate-y-0.5 transition-transform duration-150 ${colorClass}`}
                >
                  {course.code && (
                    <span className="font-mono text-[10px] opacity-60 block leading-tight">
                      {course.code}
                    </span>
                  )}
                  {course.name}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
