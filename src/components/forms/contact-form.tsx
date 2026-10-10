"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string | null>(null);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    topic: "general",
    message: "",
  });
  const [consent, setConsent] = React.useState(false);

  function update<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (status === "error") setStatus("idle");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) {
      setError("Please tell us your name.");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(form.email)) {
      setError("Please enter a valid email so we can reply.");
      setStatus("error");
      return;
    }
    if (form.message.trim().length < 10) {
      setError("Please share a little more detail in your message.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setError("Please confirm you understand this is a prototype form.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Prototype only — no network call. When a backend exists, this is where
    // we'd POST to an API route.
    window.setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", topic: "general", message: "" });
      setConsent(false);
    }, 800);
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-7 text-taupe" aria-hidden />
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
            Thank you for reaching out.
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ve shown this confirmation locally. Pawliyo is a prototype
            store, so this message was not actually sent to a mailbox.
          </p>
        </div>
        <p className="rounded-md bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
          When a real contact backend is configured, your message will be
          routed to the right person and you&apos;ll receive a reply within
          two business days.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-xl border border-border bg-card p-5 sm:p-6"
      aria-label="Contact Pawliyo"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            disabled={status === "submitting"}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            disabled={status === "submitting"}
            aria-invalid={status === "error"}
            required
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-topic">Topic</Label>
        <Select
          value={form.topic}
          onValueChange={(v) => update("topic", v)}
          disabled={status === "submitting"}
        >
          <SelectTrigger id="contact-topic" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General question</SelectItem>
            <SelectItem value="product">Product inquiry</SelectItem>
            <SelectItem value="supplier">Supplier / partnership</SelectItem>
            <SelectItem value="press">Press</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          disabled={status === "submitting"}
          rows={5}
          placeholder="Tell us what you're thinking about — the more specific, the better."
          required
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
          I understand this is a prototype form and that my message is not
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
        className="self-start"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        Prototype disclosure: this form does not currently send or save any
        data. When a real backend is added, this notice will be replaced with
        a privacy disclosure and a clear data-handling policy.
      </p>

      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Mail className="size-4" aria-hidden />
        Prefer email? Contact details will appear here once a mailbox is
        configured.
      </p>
    </form>
  );
}

export default ContactForm;
