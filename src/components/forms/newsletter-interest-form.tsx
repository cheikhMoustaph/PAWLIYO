"use client";

import * as React from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NewsletterInterestFormProps = {
  /**
   * Optional product slug + name to attach to the interest submission.
   * Used on the product detail page to register product-specific interest.
   */
  product?: { slug: string; name: string };
  /** CTA copy. */
  submitLabel?: string;
  /** Render the disclosure text under the submit button. */
  showDisclosure?: boolean;
  /** Compact layout for inline use (e.g. product page sidebar). */
  compact?: boolean;
  className?: string;
};

/**
 * NewsletterInterestForm
 *
 * A LOCAL-ONLY prototype form. It validates input client-side and shows a
 * success message — but it does NOT transmit, store, or email any data. This
 * is intentional: Pawliyo has no backend yet. The disclosure text makes this
 * clear to the visitor.
 *
 * When a backend is added later, swap `handleSubmit` to call an API route.
 */
export function NewsletterInterestForm({
  product,
  submitLabel = "Notify me when available",
  showDisclosure = true,
  compact = false,
  className,
}: NewsletterInterestFormProps) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);
  const [consent, setConsent] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email address.");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("That email doesn't look quite right.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setError("Please confirm you understand this is a prototype form.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Simulate a network round-trip purely for UX feedback. No data leaves
    // the browser.
    window.setTimeout(() => {
      setStatus("success");
      setEmail("");
      setName("");
      setConsent(false);
    }, 700);
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 sm:p-6",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className="size-6 text-taupe"
          aria-hidden
        />
        <div>
          <p className="font-display text-base font-semibold tracking-tight text-foreground">
            Thank you — your interest is noted.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {product
              ? `We'll let you know when "${product.name}" moves closer to launch.`
              : "We'll be in touch when there's something worth sharing."}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Prototype notice: this confirmation is shown locally in your browser.
          Pawliyo did not save or transmit your details — no email was sent and
          no mailing list was updated.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStatus("idle")}
        >
          Submit another response
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-border bg-card p-5 sm:p-6",
        compact && "p-4 sm:p-5",
        className
      )}
      aria-label={
        product
          ? `Register interest in ${product.name}`
          : "Register interest in Pawliyo"
      }
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
          {product ? "Notify me when available" : "Stay in the loop"}
        </h3>
        <p className="text-sm text-muted-foreground">
          {product
            ? "This product is still a research prototype. Share your email to be first to know if it becomes available."
            : "Sign up for occasional updates as Pawliyo grows. No spam, ever."}
        </p>
      </div>

      {!compact ? (
        <div className="grid gap-2">
          <Label htmlFor={`interest-name-${product?.slug ?? "general"}`}>
            Name <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id={`interest-name-${product?.slug ?? "general"}`}
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jordan Rivera"
            disabled={status === "submitting"}
          />
        </div>
      ) : null}

      <div className="grid gap-2">
        <Label htmlFor={`interest-email-${product?.slug ?? "general"}`}>
          Email
        </Label>
        <Input
          id={`interest-email-${product?.slug ?? "general"}`}
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@example.com"
          aria-invalid={status === "error"}
          disabled={status === "submitting"}
        />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          disabled={status === "submitting"}
          className="mt-0.5 size-4 rounded border-border text-taupe focus-brand"
        />
        <span>
          I understand this is a prototype form and that my details are not
          transmitted or stored on a server.
        </span>
      </label>

      {status === "error" && error ? (
        <p
          className="flex items-center gap-2 text-sm text-destructive"
          role="alert"
        >
          <AlertCircle className="size-4" aria-hidden />
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Noting your interest…
          </>
        ) : (
          submitLabel
        )}
      </Button>

      {showDisclosure ? (
        <p className="text-xs text-muted-foreground">
          Prototype disclosure: this form does not send or save any data. It
          exists to gauge demand only. When Pawliyo launches a real
          subscription, this form will be replaced with a properly secured
          backend and a clear privacy disclosure.
        </p>
      ) : null}
    </form>
  );
}

export default NewsletterInterestForm;
