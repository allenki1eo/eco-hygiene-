"use client";

import { useId, useRef, useState } from "react";
import { services } from "@/lib/services";
import { IconAlert, IconArrowRight, IconCheck } from "@/components/icons";
import { cx } from "@/components/ui";

type Field = "name" | "company" | "email" | "phone" | "service" | "message";

type Values = Record<Field, string>;

const initialValues: Values = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

/** Deliberately permissive — enough to catch typos, not to reject real addresses. */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Tanzanian numbers arrive as 0685…, +255685… or with spaces; accept all. */
const phonePattern = /^[+0-9][0-9\s()-]{6,19}$/;

function validate(values: Values): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};

  if (!values.name.trim()) errors.name = "Please tell us your name.";
  else if (values.name.trim().length < 2) errors.name = "Please enter your full name.";

  if (!values.company.trim()) errors.company = "Please tell us which company or site you are with.";

  if (!values.email.trim()) errors.email = "We need an email address to reply to.";
  else if (!emailPattern.test(values.email.trim()))
    errors.email = "That does not look like a valid email address.";

  if (values.phone.trim() && !phonePattern.test(values.phone.trim()))
    errors.phone = "Please enter a reachable phone number, or leave this blank.";

  if (!values.message.trim()) errors.message = "Tell us briefly what you need.";
  else if (values.message.trim().length < 20)
    errors.message = "A little more detail helps us respond usefully (20 characters minimum).";

  return errors;
}

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);
  /** Bots fill hidden fields; humans do not. */
  const honeypot = useRef<HTMLInputElement>(null);

  const fieldId = (field: Field) => `${uid}-${field}`;
  const errorId = (field: Field) => `${uid}-${field}-error`;

  const update = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...values, [field]: value }));
    }
  };

  const blur = (field: Field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, company: true, email: true, phone: true, service: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      // Move the user to the summary so screen readers announce the problems.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    if (honeypot.current?.value) {
      // Silently accept and drop.
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Request failed");
      }

      setStatus("success");
      setValues(initialValues);
      setTouched({});
    } catch {
      setStatus("error");
      setServerMessage(
        "We could not send your message just now. Please call 0685325766 or email directors@ecohygiene.co.tz and we will pick it up straight away.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-3xl border border-moss-500/25 bg-moss-50 p-8 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-moss-600 text-white">
          <IconCheck className="size-6" strokeWidth={2.2} />
        </span>
        <h3 className="mt-6 text-2xl text-carbon-900">Message received.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-carbon-600">
          Thank you — a member of the Ecohygiene team will respond within one working day. If it is
          urgent, call <strong className="font-medium text-carbon-900">0685325766</strong>; the line
          is answered 24 hours a day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-moss-700 underline underline-offset-4 transition hover:text-moss-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  const errorList = (Object.keys(errors) as Field[]).filter((field) => touched[field]);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Error summary — focused on failed submit. */}
      <div ref={summaryRef} tabIndex={-1} aria-live="assertive" className="focus:outline-none">
        {errorList.length > 0 && (
          <div className="flex gap-3 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
            <IconAlert className="mt-0.5 size-4 shrink-0" />
            <div>
              <p className="font-medium">
                Please check {errorList.length} {errorList.length === 1 ? "field" : "fields"} below.
              </p>
              <ul className="mt-1.5 list-inside list-disc space-y-0.5">
                {errorList.map((field) => (
                  <li key={field}>{errors[field]}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="flex gap-3 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
            <IconAlert className="mt-0.5 size-4 shrink-0" />
            <p>{serverMessage}</p>
          </div>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id={fieldId("name")}
          label="Your name"
          required
          autoComplete="name"
          value={values.name}
          error={touched.name ? errors.name : undefined}
          errorId={errorId("name")}
          onChange={(v) => update("name", v)}
          onBlur={() => blur("name")}
        />
        <TextField
          id={fieldId("company")}
          label="Company or site"
          required
          autoComplete="organization"
          value={values.company}
          error={touched.company ? errors.company : undefined}
          errorId={errorId("company")}
          onChange={(v) => update("company", v)}
          onBlur={() => blur("company")}
        />
        <TextField
          id={fieldId("email")}
          label="Email address"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={values.email}
          error={touched.email ? errors.email : undefined}
          errorId={errorId("email")}
          onChange={(v) => update("email", v)}
          onBlur={() => blur("email")}
        />
        <TextField
          id={fieldId("phone")}
          label="Phone number"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          hint="optional"
          value={values.phone}
          error={touched.phone ? errors.phone : undefined}
          errorId={errorId("phone")}
          onChange={(v) => update("phone", v)}
          onBlur={() => blur("phone")}
        />
      </div>

      <div>
        <label htmlFor={fieldId("service")} className="block text-sm font-medium text-carbon-800">
          Service of interest{" "}
          <span className="font-normal text-carbon-500">(optional)</span>
        </label>
        <select
          id={fieldId("service")}
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          className="mt-2 w-full appearance-none rounded-xl border border-carbon-900/15 bg-white px-4 py-3 text-[0.9375rem] text-carbon-900 transition focus:border-moss-400"
        >
          <option value="">Not sure yet — advise me</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Multiple services">Multiple services</option>
        </select>
      </div>

      <div>
        <label htmlFor={fieldId("message")} className="block text-sm font-medium text-carbon-800">
          How can we help? <span aria-hidden className="text-moss-600">*</span>
        </label>
        <textarea
          id={fieldId("message")}
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={touched.message && Boolean(errors.message)}
          aria-describedby={touched.message && errors.message ? errorId("message") : undefined}
          placeholder="Tell us about the plant, the areas involved, your shift pattern and what is prompting the enquiry."
          className={cx(
            "mt-2 w-full resize-y rounded-xl border bg-white px-4 py-3 text-[0.9375rem] leading-relaxed text-carbon-900 transition placeholder:text-carbon-500",
            touched.message && errors.message
              ? "border-red-400"
              : "border-carbon-900/15 focus:border-moss-400",
          )}
        />
        {touched.message && errors.message && (
          <p id={errorId("message")} className="mt-2 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from users and assistive tech, visible to bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} ref={honeypot} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-moss-600 px-7 py-3.5 text-sm font-medium text-white shadow-lift transition duration-300 hover:-translate-y-0.5 hover:bg-moss-700 hover:shadow-lift-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          {status !== "submitting" && (
            <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
        <p className="text-xs leading-relaxed text-carbon-600 sm:max-w-xs">
          We reply within one working day. Your details are used only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  errorId,
  required,
  hint,
  type = "text",
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  errorId: string;
  required?: boolean;
  hint?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-carbon-800">
        {label}{" "}
        {required ? (
          <span aria-hidden className="text-moss-600">
            *
          </span>
        ) : (
          hint && <span className="font-normal text-carbon-500">({hint})</span>
        )}
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cx(
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-[0.9375rem] text-carbon-900 transition placeholder:text-carbon-500",
          error ? "border-red-400" : "border-carbon-900/15 focus:border-moss-400",
        )}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
