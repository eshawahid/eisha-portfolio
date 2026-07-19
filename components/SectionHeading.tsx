import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
        {eyebrow}
      </span>
      <h2 className="section-heading mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}
