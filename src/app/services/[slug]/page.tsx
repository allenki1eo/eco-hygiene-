import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceBySlug, services } from "@/lib/services";
import { site } from "@/lib/site";
import { CheckList, CtaBand } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, Reveal, SectionHeading, cx } from "@/components/ui";
import { IconArrowRight, IconLeaf, serviceIcons } from "@/components/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} — ${site.shortName}`,
      description: service.summary,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.slug];
  const others = services.filter((s) => s.slug !== service.slug);
  const isMoss = service.accent === "moss";
  const accent = {
    text: isMoss ? "text-moss-300" : "text-hydro-300",
    chip: isMoss ? "bg-moss-400/12 text-moss-300" : "bg-hydro-400/12 text-hydro-300",
    glow: isMoss ? "bg-moss-500/12" : "bg-hydro-500/12",
    rule: isMoss ? "bg-moss-500" : "bg-hydro-500",
  };

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-carbon-950 pt-10 pb-20 sm:pt-14 sm:pb-28">
        <div aria-hidden className="absolute inset-0 bg-aurora opacity-80" />
        <div aria-hidden className="absolute inset-0 bg-blueprint opacity-50" />
        <div
          aria-hidden
          className={cx("absolute -right-40 top-0 size-[32rem] rounded-full blur-3xl", accent.glow)}
        />

        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-carbon-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-carbon-200" aria-current="page">
                {service.shortName}
              </li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className={service.image ? "lg:col-span-6" : "lg:col-span-8"}>
              <div className="flex items-center gap-4">
                <span
                  className={cx(
                    "inline-flex size-14 items-center justify-center rounded-2xl",
                    accent.chip,
                  )}
                >
                  <Icon className="size-7" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-carbon-300">
                  SERVICE {service.index}
                </span>
              </div>

              <h1 className="mt-8 text-4xl leading-[1.06] text-white sm:text-5xl lg:text-[3.25rem]">
                {service.name}
              </h1>
              <p className={cx("mt-6 text-lg font-medium", accent.text)}>{service.tagline}</p>

              <div className="mt-8 space-y-5 border-l-2 border-white/10 pl-6">
                {service.intro.map((paragraph) => (
                  <p key={paragraph} className="text-[0.9375rem] leading-relaxed text-carbon-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ButtonLink href="/contact#quote" withArrow className="mt-9">
                Request a Quote
              </ButtonLink>
            </div>

            {service.image && (
              <Reveal delay={140} className="lg:col-span-6">
                <figure className="relative overflow-hidden rounded-3xl ring-1 ring-white/12">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {/* Ties the photo into the dark hero instead of leaving it
                      floating as a bright rectangle. */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-carbon-950/45 via-transparent to-transparent"
                  />
                </figure>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- Capabilities */}
      <section className="relative py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 bg-blueprint-light opacity-60" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Scope of work"
            tone={isMoss ? "moss" : "hydro"}
            title="What the service covers."
            lead="Scope is agreed in writing before mobilisation. These are the areas most plants include — yours is built from the site survey."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="rounded-3xl border border-carbon-900/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span aria-hidden className={cx("block h-0.5 w-8 rounded-full", accent.rule)} />
                <h3 className="mt-5 text-lg leading-snug text-carbon-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-carbon-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- Process */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our process"
                tone={isMoss ? "moss" : "hydro"}
                title="How the work actually runs."
                lead="Six steps from first walk-through to steady-state delivery, each with an output you receive."
              />
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ol className="relative space-y-8 border-l border-carbon-900/10 pl-8">
                {service.process.map((step, i) => (
                  <Reveal as="li" key={step.step} delay={i * 70} className="relative">
                    <span
                      aria-hidden
                      className={cx(
                        "absolute -left-[2.3125rem] top-1 flex size-6 items-center justify-center rounded-full border-4 border-white",
                        accent.rule,
                      )}
                    />
                    <span className="font-mono text-xs tracking-[0.2em] text-carbon-500">
                      {step.step}
                    </span>
                    <h3 className="mt-2 text-lg text-carbon-900">{step.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-carbon-600">
                      {step.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- Eco angle */}
      <section className="relative overflow-hidden bg-carbon-900 py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 bg-blueprint opacity-40" />
        <div
          aria-hidden
          className={cx("absolute -left-32 bottom-0 size-[30rem] rounded-full blur-3xl", accent.glow)}
        />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-moss-400/12 text-moss-300">
                  <IconLeaf className="size-6" />
                </span>
              </Reveal>
              <SectionHeading
                dark
                eyebrow="The eco-friendly angle"
                title={service.eco.headline}
                lead={service.eco.body}
              />
            </div>
            <Reveal delay={140} className="lg:col-span-5 lg:col-start-8 lg:self-center">
              <div className="rounded-3xl border border-white/10 bg-carbon-950/60 p-8 backdrop-blur">
                <CheckList dark items={service.eco.points} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Outcomes */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What you get"
                tone={isMoss ? "moss" : "hydro"}
                title="The outcomes this service is measured on."
              />
            </div>
            <Reveal delay={120} className="lg:col-span-6 lg:col-start-7 lg:self-center">
              <CheckList items={service.outcomes} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------------- Other pages */}
      <section className="border-t border-carbon-900/10 bg-white py-16 sm:py-20">
        <Container>
          <Eyebrow tone="muted">Other services</Eyebrow>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((other, i) => {
              const OtherIcon = serviceIcons[other.slug];
              return (
                <Reveal as="li" key={other.slug} delay={i * 80}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-carbon-900/10 p-6 transition duration-500 hover:-translate-y-1 hover:border-moss-400/50 hover:shadow-lift"
                  >
                    <OtherIcon
                      className={cx(
                        "size-6 shrink-0",
                        other.accent === "moss" ? "text-moss-500" : "text-hydro-500",
                      )}
                    />
                    <span>
                      <span className="block font-display font-medium text-carbon-900">
                        {other.name}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-carbon-600">
                        Read more
                        <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaBand
        eyebrow="Get a price"
        title={`Ready to scope ${service.shortName.toLowerCase()} for your plant?`}
        body="Send us your line layout, shift pattern and current arrangement. We will survey the site and come back with a written programme and a fixed price."
      />
    </>
  );
}
