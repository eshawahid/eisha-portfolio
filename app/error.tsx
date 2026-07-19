"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <h1 className="font-display text-3xl font-bold text-white">Something went wrong</h1>
      <p className="mt-3 text-muted">An unexpected error occurred while rendering this page.</p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white"
      >
        Try again
      </button>
    </div>
  );
}
