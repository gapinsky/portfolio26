import { ArrowUpRight } from 'lucide-react'
import Wrapper from '../wrapper/Wrapper'


const Contact = () => {
  return (
<section>
    <Wrapper>
        <div className="text-center" aria-labelledby="contact-heading">
            <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something together.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                I&apos;m always up for a challenge. If you have something interesting in mind, let&apos;s make it happen.
            </p>
            <a
            href={`mailto:gapinski02@gmail.com`}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-zinc-100 transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
            >
                Get in touch
                <ArrowUpRight aria-hidden="true" className="size-5" />
            </a>
        </div>
     </Wrapper>
</section>
  )
}

export default Contact