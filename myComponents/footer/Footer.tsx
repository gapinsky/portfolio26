import { ArrowUpRight } from "lucide-react";
import { contact } from "@/public/data/contact";
import Wrapper from "../wrapper/Wrapper";

const linkClassName =
  "inline-flex min-h-11 items-center rounded-sm text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900";

async function Timestamp() {
  "use cache";
  const date = new Date().getFullYear();
  return <span>{date}</span>;
}

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-32 bg-zinc-100 text-zinc-900">
      <Wrapper>
        

        <div className="mt-10 border-t border-zinc-200 pt-7 text-center sm:mt-12">
          <nav aria-label="Social links" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            {contact.linkedinUrl && (
              <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            <a href={`mailto:${contact.email}`} className={linkClassName}>
              Email
            </a>
          </nav>
          <p className="mt-3 text-sm text-zinc-500">
            © {Timestamp()} Antoni Gapiński
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
