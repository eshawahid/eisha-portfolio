"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<FormState>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Wire this up to EmailJS, Resend, or a serverless route of your choice.
    window.location.href = `mailto:${profile.email}?subject=Portfolio contact from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    setStatus("sent");
  };

  const fields: { key: keyof FormState; label: string; type: string }[] = [
    { key: "name", label: "Your Name", type: "text" },
    { key: "email", label: "Your Email", type: "email" },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something intelligent"
          description="Open to full-time AI/ML roles, internships, and interesting collaborations."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {[
              { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
              { icon: MapPin, label: profile.location, href: undefined },
              { icon: Github, label: "github.com/" + profile.githubUsername, href: profile.github },
              { icon: Linkedin, label: "LinkedIn Profile", href: profile.linkedin },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="glass flex items-center gap-3 rounded-xl p-4">
                  <div className="rounded-lg bg-secondary/10 p-2 text-secondary">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-white/80">{item.label}</span>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="block transition-transform hover:translate-x-1"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-7">
              {fields.map((f) => (
                <div key={f.key} className="relative">
                  <input
                    type={f.type}
                    id={f.key}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder=" "
                    className="peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition focus:border-secondary"
                  />
                  <label
                    htmlFor={f.key}
                    className="pointer-events-none absolute left-4 top-3.5 text-sm text-muted transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-bg-card peer-focus:px-1 peer-focus:text-xs peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-bg-card peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    {f.label}
                  </label>
                  {errors[f.key] && (
                    <p className="mt-1 text-xs text-red-400">{errors[f.key]}</p>
                  )}
                </div>
              ))}

              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder=" "
                  className="peer w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition focus:border-secondary"
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-4 top-3.5 text-sm text-muted transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-bg-card peer-focus:px-1 peer-focus:text-xs peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-bg-card peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Your Message
                </label>
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <MagneticButton className="w-full">
                <span className="flex items-center gap-2">
                  Send Message <Send size={16} />
                </span>
              </MagneticButton>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-xs text-secondary"
                >
                  Opening your email client — thanks for reaching out!
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
