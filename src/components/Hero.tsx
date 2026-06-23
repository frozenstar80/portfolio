import { ArrowRight, CalendarDays, CheckCircle2, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-workspace.png";
import profileImage from "../assets/profile-portrait.png";
import { siteConfig } from "../data/siteConfig";

type HeroProps = {
  onBookCall: () => void;
};

export const Hero = ({ onBookCall }: HeroProps) => (
  <section className="relative overflow-hidden pt-32 sm:pt-36">
    <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_34%),linear-gradient(180deg,rgba(248,250,252,0.96),rgba(248,250,252,0.72)_48%,transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),linear-gradient(180deg,rgba(7,17,31,0.98),rgba(7,17,31,0.82)_48%,transparent)]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-24">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.14)]" />
          Backend-connected mobile app delivery
        </div>
        <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
          {siteConfig.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{siteConfig.subheadline}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            View Client Projects <ArrowRight size={17} />
          </a>
          <button
            type="button"
            onClick={onBookCall}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white dark:bg-white dark:text-black dark:hover:border-blue-200 dark:hover:bg-blue-50 dark:hover:text-black"
          >
            <CalendarDays size={17} /> Discuss Your App
          </button>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-white/10"
          >
            Contact on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm font-semibold text-slate-500 dark:text-slate-400">{siteConfig.proofText}</p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.proof.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="text-blue-600 dark:text-blue-300" size={18} />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-premium dark:border-white/10 dark:bg-white/8 dark:shadow-premium-dark">
          <img
            src={heroImage}
            alt="Premium developer workspace with app dashboards"
            className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-slate-200 bg-white/92 p-5 shadow-premium backdrop-blur dark:border-white/10 dark:bg-navy-900/92">
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt={`${siteConfig.name} professional portrait`}
              className="h-14 w-14 shrink-0 rounded-full border-2 border-white object-cover shadow-lg dark:border-white/20"
            />
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
              <Globe2 size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Plan, build, launch, maintain</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Mobile apps with APIs, Firebase, release support.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
