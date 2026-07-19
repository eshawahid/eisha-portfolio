"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-ring",
    variant === "primary"
      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
      : "border border-white/15 text-white hover:border-secondary",
    className
  );

  const Comp = (href ? motion.a : motion.button) as typeof motion.a;

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      data-cursor-hover
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={base}
    >
      {children}
    </Comp>
  );
}
