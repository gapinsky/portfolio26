
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
        className="mx-auto flex min-h-20 w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 sm:px-10 lg:px-16"
      >
        <Link
          href="/"
          className="rounded-sm text-lg font-medium tracking-tight text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          <span className="hidden md:block">Antoni Gapiński.</span>
          <span className=" md:hidden">AG.</span>
        </Link>

        <Menubar
          role="presentation"
          className="ml-auto h-auto gap-5 rounded-none border-0 p-0 sm:gap-8"
        >
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex min-h-11 items-center rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              {label}
            </Link>
          ))}
          <Link key={"Resume"} href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-sm text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
            Resume
          </Link>
        </Menubar>
      </nav>
    </header>
  );
}
