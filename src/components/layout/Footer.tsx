import { name, socials } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-4 text-sm text-ink-muted md:flex-row md:justify-between">
        <p>
          © {year} {name}. Built with Next.js.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
