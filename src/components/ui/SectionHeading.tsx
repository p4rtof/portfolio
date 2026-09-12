type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-2 text-sm text-ink-muted">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
