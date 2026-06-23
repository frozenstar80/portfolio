import { CalendarDays, Mail, MessageCircle, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { siteConfig } from "../data/siteConfig";

type BookCallModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const callSlots = ["This week", "Next week", "Weekend", "Flexible"];

export const BookCallModal = ({ isOpen, onClose }: BookCallModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState(callSlots[0]);
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const message = useMemo(
    () =>
      [
        "Hi Tanmaysingh,",
        "",
        "I would like to book a call for an app project.",
        "",
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Preferred time: ${slot}`,
        "",
        "Project details:",
        details || "-",
      ].join("\n"),
    [details, email, name, slot],
  );

  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Book a call for an app project")}&body=${encodeURIComponent(message)}`;
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailHref;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-5 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="book-call-title">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close booking modal" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-navy-900 dark:shadow-premium-dark sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
              <CalendarDays size={14} /> Interactive call request
            </p>
            <h2 id="book-call-title" className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Book a project discussion
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Share a few details and this will open a ready-to-send email. You can also continue on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:text-slate-200"
            aria-label="Close booking modal"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-field">
              Name
              <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Your name" required />
            </label>
            <label className="form-field">
              Email
              <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@company.com" required />
            </label>
          </div>

          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">Preferred time</legend>
            <div className="grid gap-2 sm:grid-cols-4">
              {callSlots.map((callSlot) => (
                <label
                  key={callSlot}
                  className="flex cursor-pointer items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white dark:border-white/10 dark:text-slate-300 dark:has-[:checked]:border-blue-500 dark:has-[:checked]:bg-blue-600"
                >
                  <input className="sr-only" type="radio" name="slot" value={callSlot} checked={slot === callSlot} onChange={() => setSlot(callSlot)} />
                  {callSlot}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="form-field">
            What should we discuss?
            <textarea value={details} onChange={(event) => setDetails(event.target.value)} rows={4} placeholder="App idea, current stage, platform, backend/API needs, and timeline." required />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
              <Mail size={16} /> Create Email
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-300"
            >
              <MessageCircle size={16} /> Continue on WhatsApp
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
