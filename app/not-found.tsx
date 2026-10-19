import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Wrapper from "@/myComponents/wrapper/Wrapper";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-zinc-100 text-zinc-900">
      <Wrapper className="text-center">
        <p className="text-7xl font-semibold tracking-tighter text-zinc-300 sm:text-9xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Nie znaleziono strony.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-600">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Wróć na stronę główną
        </Link>
      </Wrapper>
    </main>
  );
}
