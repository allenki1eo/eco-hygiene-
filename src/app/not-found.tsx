import Link from "next/link";
import { services } from "@/lib/services";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-carbon-950 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-aurora opacity-70" />
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
      <Container className="relative">
        <div className="max-w-2xl">
          <Eyebrow tone="moss" className="text-moss-300">
            Error 404
          </Eyebrow>
          <h1 className="mt-6 text-4xl leading-tight text-white sm:text-5xl">
            This page has been cleaned away.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-carbon-300">
            The address you followed does not exist on our site. Try one of the pages below, or call
            us and we will point you to what you need.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" withArrow className="w-full sm:w-auto">
              Back to home
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost" className="w-full sm:w-auto">
              Contact us
            </ButtonLink>
          </div>

          <ul className="mt-14 space-y-3 border-t border-white/10 pt-8">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-3 text-carbon-300 transition hover:text-white"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-moss-400">
                    {service.index}
                  </span>
                  {service.name}
                  <IconArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
