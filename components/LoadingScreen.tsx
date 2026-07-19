"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 350);
          return 100;
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    [40, 40], [40, 90], [40, 140],
    [100, 25], [100, 75], [100, 125], [100, 165],
    [160, 40], [160, 90], [160, 140],
  ];
  const edges: [number, number][] = [
    [0, 3], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6],
    [3, 7], [3, 8], [4, 7], [4, 8], [5, 8], [5, 9], [6, 9],
  ];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
        >
          <svg width="200" height="180" viewBox="0 0 200 180" className="mb-8">
            {edges.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={nodes[a][0]}
                y1={nodes[a][1]}
                x2={nodes[b][0]}
                y2={nodes[b][1]}
                stroke="#2563EB"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.2, delay: i * 0.05, ease: "easeInOut" }}
              />
            ))}
            {nodes.map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="5"
                fill="#3B82F6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.4, 1] }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                style={{ filter: "drop-shadow(0 0 6px #3B82F6)" }}
              />
            ))}
          </svg>
          <div className="font-display text-sm tracking-[0.3em] text-muted">
            INITIALIZING PORTFOLIO
          </div>
          <div className="mt-4 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="mt-2 font-mono text-xs text-muted">{Math.floor(Math.min(progress, 100))}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
