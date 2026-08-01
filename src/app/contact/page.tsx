import type { Metadata } from "next";
import { addressLines, contact, site } from "@/lib/site";
import { services } from "@/lib/services";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { PageHero } from "@/components/sections";
import { Container, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import { IconClock, IconMail, IconPhone, IconPin, serviceIcons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Shinyanga, Tanzania. Call ${contact.phone}, email ${contact.email}, or request a quote for factory cleaning, pest control, mixing units and waste water stewardship.`,
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: IconPin,
    label: "Head office",
    lines: addressLines,
  },
  {
    icon: IconPhone,
    label: "Telephone",
    lines: [contact.phone],
    href: `tel:${contact.phoneIntl}`,
  },
  {
    icon: IconMail,
    label: "Email",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
  },
  {
    icon: IconClock,
    label: "Office hours",
    lines: [contact.hours, "Emergency response available on the same number"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your plant."
        lead="Whether it is a scheduled programme, a failed audit or an infestation that needs handling tonight — start here. We answer the phone at any hour."
      >
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <a
            href={`tel:${contact.phoneIntl}`}
            className="group inline-flex items-center gap-2.5 text-white transition hover:text-moss-300"
          >
            <IconPhone className="size-4 text-moss-400" />
            <span className="font-medium">{contact.phone}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-2.5 break-all text-white transition hover:text-moss-300"
          >
            <IconMail className="size-4 text-moss-400" />
            <span className="font-medium">{contact.email}</span>
          </a>
          <span className="inline-flex items-center gap-2.5 text-carbon-300">
            <IconClock className="size-4 text-moss-400" />
            {contact.hours}
          </span>
        </div>
      </PageHero>

      {/* ---------------------------------------------------------------- Form */}
      <section id="quote" className="relative scroll-mt-28 py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 bg-blueprint-light opacity-60" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-3xl border border-carbon-900/10 bg-white p-7 shadow-lift sm:p-10">
                  <Eyebrow>Request a quote</Eyebrow>
                  <h2 className="mt-5 text-2xl text-carbon-900 sm:text-3xl">
                    Send us the brief.
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-carbon-600">
                    The more you tell us about the site, the more useful our first reply will be.
                    Everything below takes about two minutes.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ------------------------------------------------------- Details */}
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={120}>
                <ul className="space-y-4">
                  {details.map((item) => (
                    <li
                      key={item.label}
                      className="flex gap-4 rounded-2xl border border-carbon-900/10 bg-white p-6"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-moss-500/10 text-moss-600">
                        <item.icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="eyebrow text-carbon-500">{item.label}</p>
                        <div className="mt-2 text-[0.9375rem] leading-relaxed text-carbon-700">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium break-all text-carbon-900 transition hover:text-moss-600"
                            >
                              {item.lines[0]}
                            </a>
                          ) : (
                            item.lines.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200} className="mt-4">
                <div className="rounded-2xl border border-carbon-900/10 bg-carbon-950 p-6 text-carbon-300">
                  <p className="eyebrow text-carbon-300">Enquiring about</p>
                  <ul className="mt-4 space-y-3">
                    {services.map((service) => {
                      const Icon = serviceIcons[service.slug];
                      return (
                        <li key={service.slug} className="flex items-center gap-3 text-sm">
                          <Icon className="size-4 shrink-0 text-moss-400" />
                          {service.name}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-relaxed text-carbon-300">
                    Not sure which applies? Say so in the form — most plants need a combination, and
                    the survey will tell us which.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------------- Map */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Find us"
            title="Sido Shinyanga, Tabora Road."
            lead="Our base is in the Ibinzamata area of Shinyanga, from which we cover the Lake and Central zones. Site visits are arranged by appointment — call ahead and we will meet you at the gate."
          />
          <Reveal delay={120} className="mt-12">
            <MapEmbed />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
