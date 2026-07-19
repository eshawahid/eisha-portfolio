import { profile } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-display text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with intention.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: profile.github },
            { icon: Linkedin, href: profile.linkedin },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="text-muted transition hover:text-secondary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
