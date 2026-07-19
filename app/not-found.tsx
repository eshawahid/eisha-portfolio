"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="grid-bg flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gradient font-display text-7xl font-bold"
      >
        404
      </motion.h1>
      <p className="mt-4 max-w-sm text-muted">
        This route wasn&apos;t found in the model&apos;s training data. Let&apos;s get you back.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30"
      >
        Back to Home
      </Link>
    </div>
  );
}
