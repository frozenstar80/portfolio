import { siteConfig } from "../data/siteConfig";

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-navy-950">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <p className="text-lg font-semibold text-slate-950 dark:text-white">{siteConfig.name}</p>
        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">{siteConfig.footerTagline}</p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
        {siteConfig.navLinks.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-blue-700 dark:hover:text-blue-300">
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-500">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </div>
  </footer>
);
