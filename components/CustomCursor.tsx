"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setIsVisible(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-screen"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: isHovering ? 2.4 : 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="h-3 w-3 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: isHovering ? 1.8 : 1, opacity: isHovering ? 0.5 : 0.25 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="h-16 w-16 rounded-full blur-xl"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
        />
      </motion.div>
      <style jsx global>{`
        @media (pointer: fine) {
          a, button, [data-cursor-hover] { cursor: none; }
          body { cursor: none; }
        }
      `}</style>
    </>
  );
}
