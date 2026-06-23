import { Github, Linkedin, Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const projectStages = [
  "New app idea",
  "Existing app needs fixes",
  "MVP development",
  "Android + iOS app",
  "Backend/API required",
  "App store deployment",
  "Long-term maintenance",
];

const budgetRanges = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $7,000", "$7,000+", "Not sure yet"];

const timelines = ["ASAP", "This month", "1-3 months", "3+ months", "Flexible"];

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [projectStage, setProjectStage] = useState(projectStages[0]);
  const [budgetRange, setBudgetRange] = useState(budgetRanges[4]);
  const [timeline, setTimeline] = useState(timelines[4]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const emailBody = useMemo(
    () =>
      [
        "Hi Tanmay,",
        "",
        "I would like to discuss an app project.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Country: ${country || "-"}`,
        `Project stage: ${projectStage}`,
        `Budget range: ${budgetRange}`,
        `Timeline: ${timeline}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    [budgetRange, company, country, email, message, name, projectStage, timeline],
  );

  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${projectStage} inquiry`)}&body=${encodeURIComponent(emailBody)}`;
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
          eyebrow="Tell me about your app"
          title="Have an app idea, unfinished product, or backend-connected mobile workflow?"
          description="I usually start with a short discovery discussion to understand your app idea, current stage, backend needs, timeline, and launch goals."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-navy-950">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                <ShieldCheck size={22} />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">A safer way to start</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Share the current stage, backend needs, launch target, and budget comfort zone. I’ll respond with practical next steps, not vague promises.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              <a href={`mailto:${siteConfig.email}`} className="contact-link">
                <Mail size={18} /> Email: {siteConfig.email}
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
              <label className="form-field">
                Company
                <input value={company} onChange={(event) => setCompany(event.target.value)} name="company" type="text" placeholder="Company or project name" />
              </label>
              <label className="form-field">
                Country
                <input value={country} onChange={(event) => setCountry(event.target.value)} name="country" type="text" placeholder="Country / timezone" />
              </label>
              <label className="form-field">
                Project stage
                <select value={projectStage} onChange={(event) => setProjectStage(event.target.value)} name="projectStage">
                  {projectStages.map((stage) => (
                    <option key={stage}>{stage}</option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                Budget range
                <select value={budgetRange} onChange={(event) => setBudgetRange(event.target.value)} name="budgetRange">
                  {budgetRanges.map((range) => (
                    <option key={range}>{range}</option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                Timeline
                <select value={timeline} onChange={(event) => setTimeline(event.target.value)} name="timeline">
                  {timelines.map((timelineOption) => (
                    <option key={timelineOption}>{timelineOption}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="form-field mt-5">
              Message
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                name="message"
                rows={5}
                placeholder="Tell me about the app idea, platforms, backend/API needs, current blockers, and launch goals."
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
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={mailHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-300 sm:w-auto"
              >
                <Mail size={16} /> Email
              </a>
            </div>
            {status ? <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-300">{status}</p> : null}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};
