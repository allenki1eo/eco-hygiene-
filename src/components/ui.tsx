import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { IconArrowRight } from "@/components/icons";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "moss",
  className,
}: {
  children: ReactNode;
  tone?: "moss" | "hydro" | "muted";
  className?: string;
}) {
  const tones = {
    moss: "text-moss-600",
    hydro: "text-hydro-600",
    muted: "text-carbon-500",
  };
  return (
    <p className={cx("eyebrow flex items-center gap-2.5", tones[tone], className)}>
      <span aria-hidden className="h-px w-6 bg-current opacity-50" />
      {children}
    </p>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline" | "light";
  className?: string;
  withArrow?: boolean;
};

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-300 ease-out";

const buttonVariants = {
  primary:
    "bg-moss-600 text-white shadow-lift hover:bg-moss-700 hover:shadow-lift-lg hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-carbon-900/15 bg-white text-carbon-900 hover:border-moss-400 hover:text-moss-600 hover:-translate-y-0.5",
  ghost:
    "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5",
  light:
    "bg-white text-carbon-900 shadow-lift hover:bg-carbon-50 hover:-translate-y-0.5",
};

export function ButtonLink({
  children,
  variant = "primary",
  className,
  withArrow,
  ...props
}: ButtonProps & ComponentProps<typeof Link>) {
  return (
    <Link {...props} className={cx(buttonBase, buttonVariants[variant], className)}>
      {children}
      {withArrow && (
        <IconArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "moss",
  align = "left",
  dark,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "moss" | "hydro" | "muted";
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={cx(
        "reveal max-w-3xl",
        align === "center" && "mx-auto text-center [&_p.eyebrow]:justify-center",
      )}
    >
      {eyebrow && <Eyebrow tone={dark ? (tone === "hydro" ? "hydro" : "moss") : tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cx(
          "mt-5 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-carbon-900",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cx("mt-5 text-lg leading-relaxed", dark ? "text-carbon-300" : "text-carbon-600")}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** Wraps a block so the shared IntersectionObserver can stagger it in. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  return (
    <Tag className={cx("reveal", className)} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}
