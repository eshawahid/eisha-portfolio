"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { projects } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [open, setOpen] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that shipped"
          description="From computer vision to Generative AI — click any project for the full story."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <motion.button
                onClick={() => setOpen(p)}
                data-cursor-hover
                whileHover={{ y: -6 }}
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border p-6 text-left transition-colors ${
                  p.featured
                    ? "border-secondary/30 bg-gradient-to-br from-primary/10 to-secondary/5"
                    : "border-white/10 bg-bg-card hover:border-secondary/40"
                }`}
              >
                {p.featured && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-secondary/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary">
                    Featured
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-secondary">{p.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.hero}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-secondary">
                  View case study <ExternalLink size={14} />
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-secondary">{open.status}</span>
                  <h3 className="section-heading mt-1 text-2xl font-bold text-white">
                    {open.name}
                  </h3>
                  <p className="text-sm text-muted">{open.subtitle}</p>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  data-cursor-hover
                  className="focus-ring rounded-full border border-white/10 p-2 text-white hover:border-secondary"
                >
                  <X size={16} />
                </button>
              </div>

              {[
                ["Problem", open.problem],
                ["Solution", open.solution],
                ["Architecture", open.architecture],
                ["Challenges", open.challenges],
                ["Results", open.results],
              ].map(([label, text]) => (
                <div key={label} className="mb-5">
                  <h4 className="mb-1.5 font-display text-sm font-semibold text-secondary">
                    {label}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/80">{text}</p>
                </div>
              ))}

              <div className="mb-5">
                <h4 className="mb-2 font-display text-sm font-semibold text-secondary">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {open.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {open.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={open.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="focus-ring flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white hover:border-secondary"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
