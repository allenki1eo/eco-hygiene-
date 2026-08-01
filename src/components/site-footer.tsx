import Link from "next/link";
import { addressLines, contact, nav, site, social } from "@/lib/site";
import { services } from "@/lib/services";
import { IconClock, IconMail, IconPhone, IconPin, Logomark, socialIcons } from "@/components/icons";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-carbon-950 text-carbon-300">
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 rounded-full bg-moss-500/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3" aria-label={`${site.shortName} — home`}>
              <Logomark className="size-11 shrink-0" />
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold tracking-tight text-white">
                  ECOHYGIENE
                </span>
                <span className="block font-mono text-[0.625rem] tracking-[0.2em] text-carbon-300 uppercase">
                  Company Limited
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-carbon-300">
              {site.longDescription}
            </p>
            <ul className="mt-7 flex gap-3">
              {social.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-carbon-300 transition hover:border-moss-400/60 hover:bg-white/5 hover:text-white"
                    >
                      <span className="sr-only">{`${site.shortName} on ${item.label}`}</span>
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Footer services" className="lg:col-span-3">
            <h2 className="eyebrow text-carbon-300">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition hover:text-moss-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h2 className="eyebrow text-carbon-300">Company</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-moss-300">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact#quote" className="transition hover:text-moss-300">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-carbon-300">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <IconPin className="mt-0.5 size-4 shrink-0 text-moss-400" />
                <address className="not-italic text-carbon-300">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-3">
                <IconPhone className="mt-0.5 size-4 shrink-0 text-moss-400" />
                <a href={`tel:${contact.phoneIntl}`} className="transition hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <IconMail className="mt-0.5 size-4 shrink-0 text-moss-400" />
                <a href={`mailto:${contact.email}`} className="break-all transition hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <IconClock className="mt-0.5 size-4 shrink-0 text-moss-400" />
                <span className="text-carbon-300">{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-xs text-carbon-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono tracking-wide uppercase">
            Eco-friendly hygiene &amp; environmental solutions · {contact.address.city}, {contact.address.country}
          </p>
        </div>
      </Container>
    </footer>
  );
}
