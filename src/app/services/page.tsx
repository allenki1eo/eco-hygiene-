import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { CtaBand, PageHero, PartnerStrip } from "@/components/sections";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { IconArrowRight, serviceIcons } from "@/components/icons";
import { cx } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Factory general cleaning, pest control management, hygiene mixing units and waste water stewardship for beverage and manufacturing plants in Tanzania.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Industrial hygiene, delivered as a programme — not a call-out."
        lead="Four disciplines that hold a factory to standard: what gets cleaned, what gets kept out, what it gets cleaned with, and what leaves the site afterwards."
      />

      {/* Index of all four services, each as a full-width record row. */}
      <section className="relative py-20 sm:py-24">
        <div aria-hidden className="absolute inset-0 bg-blueprint-light opacity-60" />
        <Container className="relative">
          <ul className="space-y-5">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.slug];
              const accent =
                service.accent === "moss"
                  ? { text: "text-moss-600", chip: "bg-moss-500/10 text-moss-600", hover: "hover:border-moss-400/60" }
                  : { text: "text-hydro-600", chip: "bg-hydro-500/10 text-hydro-600", hover: "hover:border-hydro-400/60" };

              return (
                <Reveal as="li" key={service.slug} delay={i * 80}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={cx(
                      "group grid gap-8 rounded-3xl border border-carbon-900/10 bg-white p-7 transition duration-500 ease-out hover:-translate-y-1 hover:shadow-lift-lg sm:p-10 lg:grid-cols-12 lg:items-center",
                      accent.hover,
                    )}
                  >
                    <div className="flex items-center gap-5 lg:col-span-4">
                      <span
                        className={cx(
                          "inline-flex size-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500 group-hover:bg-carbon-950 group-hover:text-white",
                          accent.chip,
                        )}
                      >
                        <Icon className="size-7" />
                      </span>
                      <div>
                        <span className="font-mono text-xs tracking-[0.2em] text-carbon-500">
                          {service.index}
                        </span>
                        <h2 className="mt-1.5 text-xl leading-snug text-carbon-900">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <p className={cx("text-sm font-medium", accent.text)}>{service.tagline}</p>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-carbon-600">
                        {service.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-2 lg:justify-self-end">
                      <span
                        className={cx(
                          "inline-flex items-center gap-2 text-sm font-medium",
                          accent.text,
                        )}
                      >
                        Read more
                        <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* How an engagement runs, regardless of which service it starts with. */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we engage"
            title="The same four steps, whichever service you start with."
            lead="No programme is quoted from a phone call. We look at the plant first, because the price of getting the scope wrong is paid on your production line, not ours."
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Site survey",
                body: "We walk the plant with your team, photograph the risk points and understand the shift pattern before proposing anything.",
              },
              {
                step: "02",
                title: "Written scope",
                body: "Areas, methods, frequencies, chemicals, equipment, crew size and price — documented so both sides know what is included.",
              },
              {
                step: "03",
                title: "Mobilisation",
                body: "Induction, permits, PPE, equipment staging and a named supervisor before the first shift starts.",
              },
              {
                step: "04",
                title: "Verification & review",
                body: "Records issued each visit, results reviewed monthly, scope adjusted as your plant and its pressures change.",
              },
            ].map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 90}
                className="relative rounded-3xl border border-carbon-900/10 bg-carbon-50 p-7"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-moss-600">{item.step}</span>
                <h3 className="mt-5 text-lg leading-snug text-carbon-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-carbon-600">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <PartnerStrip />
        </Container>
      </section>

      <CtaBand
        eyebrow="Next step"
        title="Book a site survey."
        body="An hour on site tells us more than a week of emails. We will walk your plant, agree the scope with your quality team and come back with a written programme and price."
      />
    </>
  );
}
