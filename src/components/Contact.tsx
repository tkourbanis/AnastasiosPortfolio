import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiLinkedin, FiMail, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState { name: string; email: string; message: string; }
type Errors = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Name is required.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email.";
  if (!f.message.trim()) e.message = "Message is required.";
  return e;
}

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef   = useRef<HTMLFormElement>(null);
  const inView    = useInView(sectionRef, { once: true, margin: "-80px" });

  const [form, setForm]     = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-4 py-3 text-sm border bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors duration-150";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="technical-label mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-blue-700" />
            Contact
          </p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">
            {/* Form */}
            <div className="relative border border-slate-200 p-8 bg-white">
              <span aria-hidden="true" className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-900/35" />
              <span aria-hidden="true" className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-900/35" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-900/35" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-900/35" />

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-14 gap-4 text-center bg-green-50 border border-green-200">
                  <span className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <FiCheck size={22} className="text-green-700" />
                  </span>
                  <p className="text-green-800 font-semibold">Message sent!</p>
                  <p className="text-sm text-green-700">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-green-700 underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-blue-700 mb-1.5 tracking-widest uppercase">
                      Name
                    </label>
                    <input
                      id="name" name="name" type="text"
                      value={form.name} onChange={handleChange}
                      className={`${inputBase} ${errors.name ? "border-red-400" : "border-slate-200"}`}
                      placeholder="Your name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600" role="alert">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-blue-700 mb-1.5 tracking-widest uppercase">
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email"
                      value={form.email} onChange={handleChange}
                      className={`${inputBase} ${errors.email ? "border-red-400" : "border-slate-200"}`}
                      placeholder="your@email.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600" role="alert">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-blue-700 mb-1.5 tracking-widest uppercase">
                      Message
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={form.message} onChange={handleChange}
                      className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-slate-200"}`}
                      placeholder="Tell me about your project or opportunity…"
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600" role="alert">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-900 text-white text-sm font-semibold px-6 py-3 hover:bg-blue-800 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-busy={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <FiSend size={15} />
                    )}
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </button>

                  {status === "error" && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3" role="alert">
                      <FiAlertCircle size={15} className="shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Social links */}
            <div className="space-y-6">
              <p className="technical-label">Connect</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Open to new graduate and entry-level full-time opportunities. Feel free to reach out through the form or any of the links below.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    icon: FiLinkedin,
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/anastasios-kourbanis",
                    display: "/in/anastasios-kourbanis",
                  },
                  {
                    icon: FiMail,
                    label: "Email",
                    href: "mailto:anastasios.kourbanis@mail.utoronto.ca",
                    display: "anastasios.kourbanis@mail.utoronto.ca",
                  },
                ].map(({ icon: Icon, label, href, display }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-900 transition-colors duration-150 group"
                    aria-label={label}
                  >
                    <span className="w-9 h-9 border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-150">
                      <Icon size={16} />
                    </span>
                    <span className="font-mono text-xs text-slate-400 group-hover:text-blue-900 transition-colors">{display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
