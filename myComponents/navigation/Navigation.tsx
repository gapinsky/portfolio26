
import Link from "next/link";
import { Menubar } from "@/components/ui/menubar";

const links = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex flex-col items-start min-h-20 w-full max-w-7xl flex-wrap  gap-x-6 gap-y-2 px-6 py-4 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16"
      >
        <Link
          href="/"
          className="rounded-sm text-lg font-medium tracking-tight text-foreground outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-4"
        >
          Antoni Gapiński.
        </Link>

        <Menubar
          role="presentation"
          className="mx-auto h-auto min-w-0 max-w-full flex-wrap justify-center gap-x-3 gap-y-1 rounded-none border-0 p-0 sm:gap-x-8 md:mr-0"
        >
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex min-h-11 items-center rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-4"
            >
              {label}
            </Link>
          ))}
          <a
            href="/pdf/Antoni_Gapinski_Software_Developer_CV.pdf"
            download="Antoni_Gapinski_Software_Developer_CV.pdf"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
          >
            Resume
          </a>
        </Menubar>
      </nav>
    </header>
  );
}
