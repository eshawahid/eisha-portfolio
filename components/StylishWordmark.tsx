type StylishWordmarkProps = {
  className?: string;
  compact?: boolean;
};

export default function StylishWordmark({ className = "", compact = false }: StylishWordmarkProps) {
  return (
    <span
      className={`stylish-wordmark inline-flex ${compact ? "items-center" : "items-start"} ${className}`}
    >
      {compact ? (
        <span className="whitespace-nowrap">EW</span>
      ) : (
        <span className="flex flex-col items-center gap-1.5 text-center leading-none tracking-[0.02em]">
          <span className="block whitespace-nowrap">I build</span>
          <span className="block whitespace-nowrap text-secondary">AI</span>
          <span className="block whitespace-nowrap">products</span>
        </span>
      )}
    </span>
  );
}