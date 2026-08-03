"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contact, nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { IconClose, IconMenu, IconPhone, serviceIcons } from "@/components/icons";
import { ButtonLink, Container, cx } from "@/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open drawer.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Send focus into the drawer when it opens, and back to the toggle after it
  // closes, so keyboard users are never left behind an invisible overlay.
  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
    else if (document.activeElement === document.body) toggleRef.current?.focus();
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-carbon-900 focus:shadow-lift-lg"
      >
        Skip to content
      </a>

      {/* Utility strip — phone and hours, the two things a plant manager needs. */}
      <div className="hidden bg-carbon-950 text-carbon-300 lg:block">
        <Container className="flex h-10 items-center justify-between text-xs">
          <p className="font-mono tracking-wide uppercase">
            {site.tagline} · {contact.address.city}, {contact.address.country}
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span aria-hidden className="size-1.5 rounded-full bg-moss-400" />
              {contact.hours}
            </span>
            <a
              href={`tel:${contact.phoneIntl}`}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <IconPhone className="size-3.5" />
              {contact.phone}
            </a>
          </div>
        </Container>
      </div>

      <header
        className={cx(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-carbon-900/10 bg-white/95 shadow-lift backdrop-blur-xl"
            : "border-b border-transparent bg-white",
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-6">
          <Link href="/" className="flex items-center" aria-label={`${site.name} — home`}>
            <Image
              src="/logos/logo.png"
              alt=""
              aria-hidden
              width={234}
              height={231}
              priority
              className="size-12 shrink-0 object-contain"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cx(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive(item.href)
                    ? "text-moss-600"
                    : "text-carbon-600 hover:bg-carbon-50 hover:text-carbon-900",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    aria-hidden
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-moss-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="/contact#quote"
              className="max-sm:hidden px-5 py-2.5"
              withArrow
            >
              Request a Quote
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex size-11 items-center justify-center rounded-full border border-carbon-900/10 text-carbon-900 transition hover:bg-carbon-50 lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-[60] lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-carbon-950/60 backdrop-blur-sm"
        />
        <div
          className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-carbon-950 text-white"
          // Any navigation from inside the drawer dismisses it.
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <div className="flex h-18 items-center justify-between px-6">
            <span className="font-display text-lg font-semibold">Menu</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
            >
              <span className="sr-only">Close menu</span>
              <IconClose className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pb-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-2xl px-4 py-3.5 font-display text-xl font-medium transition",
                  isActive(item.href) ? "bg-white/10 text-moss-300" : "hover:bg-white/5",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 px-4 py-5">
            <p className="eyebrow px-4 text-carbon-300">Services</p>
            <div className="mt-2 flex flex-col">
              {services.map((service) => {
                const Icon = serviceIcons[service.slug];
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-carbon-200 transition hover:bg-white/5 hover:text-white"
                  >
                    <Icon className="size-5 text-moss-300" />
                    {service.shortName}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-auto border-t border-white/10 p-6">
            <ButtonLink href="/contact#quote" className="w-full" withArrow>
              Request a Quote
            </ButtonLink>
            <a
              href={`tel:${contact.phoneIntl}`}
              className="mt-4 flex items-center justify-center gap-2 text-sm text-carbon-300 transition hover:text-white"
            >
              <IconPhone className="size-4" />
              {contact.phone} · {contact.hoursShort}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
