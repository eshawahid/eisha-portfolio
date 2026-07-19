import { experience } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Internships & industry systems"
          description="Real deployments for real companies."
        />

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-xl bg-secondary/10 p-2 text-secondary">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-secondary">
                        {exp.org} · {exp.location}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted">{exp.period}</span>
                </div>

                <ul className="mt-4 space-y-2 pl-1">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-white/75">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
