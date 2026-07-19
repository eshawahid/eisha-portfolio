"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const categories = Object.keys(skills) as (keyof typeof skills)[];

export default function Skills() {
  const [active, setActive] = useState<keyof typeof skills>(categories[0]);

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skill Constellation"
          title="What I build with"
          description="Hover any skill to see it come alive."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor-hover
              className={`focus-ring rounded-full border px-4 py-2 text-sm transition-all ${
                active === cat
                  ? "border-secondary bg-secondary/10 text-secondary"
                  : "border-white/10 text-muted hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills[active].map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                data-cursor-hover
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-card p-5 transition-colors hover:border-secondary/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-secondary/0 blur-2xl transition-all duration-300 group-hover:bg-secondary/20" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
