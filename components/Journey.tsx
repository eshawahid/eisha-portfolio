import { timeline } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="The AI Journey"
          title="Semester 1 to graduation"
          description="Every internship, launch, and competition that shaped how I build AI."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className={`relative flex flex-col gap-3 pl-12 sm:w-1/2 sm:pl-0 sm:pr-10 ${
                  i % 2 === 1 ? "sm:ml-auto sm:pl-10 sm:pr-0 sm:text-left" : "sm:text-right"
                }`}
              >
                <span
                  className={`absolute left-[9px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-secondary shadow-[0_0_12px_#06B6D4] sm:top-1.5 ${
                    i % 2 === 1 ? "sm:-left-[7px]" : "sm:-right-[7px] sm:left-auto"
                  }`}
                />
                <div className="glass rounded-2xl p-5">
                  <span className="font-mono text-xs text-secondary">{item.period}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
