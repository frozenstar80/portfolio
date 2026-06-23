import { siteConfig } from "../data/siteConfig";

export const TrustBar = () => (
  <section className="border-y border-slate-200 bg-white/78 py-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
    <div className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {siteConfig.proof.map((item) => (
        <div key={item} className="rounded-lg bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-200">
          {item}
        </div>
      ))}
    </div>
  </section>
);
