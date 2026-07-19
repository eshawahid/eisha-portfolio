"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import StylishWordmark from "./StylishWordmark";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 200);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
          scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        )}
      >
        <a href="#home" data-cursor-hover className="inline-flex items-center">
          <StylishWordmark compact className="text-2xl text-white transition hover:text-secondary" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor-hover
                className={cn(
                  "relative px-3 py-2 text-sm text-muted transition-colors hover:text-white",
                  active === l.href && "text-white"
                )}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-primary to-secondary"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume-eisha-wahid.pdf"
            download
            data-cursor-hover
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white transition hover:border-secondary hover:text-secondary md:flex"
          >
            <Download size={14} /> Resume
          </a>
          {mounted && (
            <button
              aria-label="Toggle theme"
              data-cursor-hover
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="focus-ring rounded-full border border-white/10 p-2 text-white transition hover:border-secondary hover:text-secondary"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            aria-label="Toggle menu"
            data-cursor-hover
            onClick={() => setMobileOpen((o) => !o)}
            className="focus-ring rounded-full border border-white/10 p-2 text-white lg:hidden"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute left-4 right-4 top-20 flex flex-col gap-1 rounded-2xl p-4 lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/90 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
