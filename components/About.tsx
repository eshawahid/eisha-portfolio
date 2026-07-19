import { profile, education, languages } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Languages as LangIcon, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About Me" title="From curiosity to production AI" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-lg leading-relaxed text-white/85">
              I&apos;m a final-year Artificial Intelligence student at Air University,
              Islamabad, who got tired of AI staying in notebooks. What pulls me in isn&apos;t
              the model — it&apos;s the moment a model actually ships: a facial recognition
              system securing a real building, a phishing detector catching real malicious
              links, a chatbot holding a real, careful conversation.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              That curiosity took me from coursework into an AI &amp; Automation internship
              at NexGen Guards, then on-site at Siberkoza building enterprise-grade
              recognition and cybersecurity systems. Along the way I taught myself to care
              as much about latency, reliability, and false-positive rates as I do about
              accuracy — because production AI has to be trusted, not just clever.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Outside the codebase, I lead. I&apos;ve organized national hackathons and AI
              competitions as an Event Manager, co-founded an AI automotive startup, and
              I&apos;m most energized when I&apos;m explaining a hard idea simply — whether
              that&apos;s to a teammate, a judge, or a user.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Curiosity", "Ownership", "Clarity", "Rigor", "Leadership"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-5">
            <div className="glass rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <GraduationCap size={18} />
                <span className="font-display text-sm font-semibold">Education</span>
              </div>
              <p className="font-semibold text-white">{education.school}</p>
              <p className="text-sm text-muted">
                {education.degree} · {education.period}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <MapPin size={18} />
                <span className="font-display text-sm font-semibold">Based in</span>
              </div>
              <p className="text-white/80">{profile.location}</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <LangIcon size={18} />
                <span className="font-display text-sm font-semibold">Languages</span>
              </div>
              <div className="space-y-2">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between text-sm">
                    <span className="text-white/80">{l.name}</span>
                    <span className="text-muted">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
