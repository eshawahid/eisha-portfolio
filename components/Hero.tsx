"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";
import StylishWordmark from "./StylishWordmark";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.typingWords);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-grid-glow" />
      <ParticleField density={70} />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 animate-glow rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 animate-glow rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1.5 font-mono text-xs text-secondary">
            Final-Year BS Artificial Intelligence · Air University
          </p>
          <h1 className="section-heading text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <div className="mt-4 h-10 font-display text-xl text-white/80 sm:text-2xl">
            <span className="text-muted">Building with </span>
            <span className="text-gradient font-semibold">{typed}</span>
            <span className="animate-pulse text-secondary">|</span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href="/resume-eisha-wahid.pdf" variant="ghost">
              Download Resume
            </MagneticButton>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor-hover
                className="focus-ring rounded-full border border-white/10 p-2.5 text-white/70 transition hover:border-secondary hover:text-secondary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-secondary/30" />
          <div className="absolute inset-6 animate-glow rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
          <div className="relative flex h-52 w-52 animate-float items-center justify-center rounded-full border-2 border-white/10 bg-bg-card p-6 sm:h-64 sm:w-64 sm:p-8">
            <StylishWordmark className="text-center text-[1.55rem] text-gradient sm:text-[2rem]" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
