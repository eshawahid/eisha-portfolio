import { leadership } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Users } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Leadership & Collaboration"
          title="Beyond the codebase"
        />

        {leadership.map((l) => (
          <Reveal key={l.role}>
            <div className="glass rounded-2xl p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-xl bg-primary/10 p-2 text-primary">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {l.role}
                    </h3>
                    <p className="text-sm text-secondary">{l.org}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted">{l.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {l.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-relaxed text-white/75">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
