import { Github, Linkedin, Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const projectTypes = [
  "MVP App Development",
  "Existing App Bug Fixing",
  "API/Firebase Integration",
  "App Store / Play Store Release",
  "Technical Consultation",
];

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const emailBody = useMemo(
    () =>
      [
        "Hi Tanmaysingh,",
        "",
        "I would like to discuss an app project.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    [email, message, name, projectType],
  );

  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${projectType} inquiry`)}&body=${encodeURIComponent(emailBody)}`;
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(emailBody)}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Opening your email app with a ready-to-send inquiry.");
    window.location.href = mailHref;
  };

  return (
    <AnimatedSection id="contact" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-navy-900/70 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Have an app idea or an unfinished app? Let’s discuss how I can help."
          description="Share the app goal, current stage, and timeline. This static form creates a complete email draft, and WhatsApp opens with your details pre-filled."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-navy-950">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                <ShieldCheck size={22} />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Trust-first communication</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Expect clear scope discussion, honest feasibility feedback, practical timelines, and written next steps before development starts.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              <a href={`mailto:${siteConfig.email}`} className="contact-link">
                <Mail size={18} /> {siteConfig.email}
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact-link">
                <Github size={18} /> GitHub
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-link">
                <MessageCircle size={18} /> WhatsApp: {siteConfig.phone}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-premium dark:border-white/10 dark:bg-navy-950 dark:shadow-premium-dark">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                Name
                <input value={name} onChange={(event) => setName(event.target.value)} name="name" type="text" placeholder="Your name" required />
              </label>
              <label className="form-field">
                Email
                <input value={email} onChange={(event) => setEmail(event.target.value)} name="email" type="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label className="form-field mt-5">
              Project type
              <select value={projectType} onChange={(event) => setProjectType(event.target.value)} name="projectType">
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label className="form-field mt-5">
              Message
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                name="message"
                rows={5}
                placeholder="Tell me about your app, stage, timeline, and what help you need."
                required
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
              >
                Send Inquiry <Send size={16} />
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-300 sm:w-auto"
              >
                <MessageCircle size={16} /> Send on WhatsApp
              </a>
            </div>
            {status ? <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-300">{status}</p> : null}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};
