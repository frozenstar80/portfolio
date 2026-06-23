import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  activeSection: string;
  isDark: boolean;
  onThemeToggle: () => void;
  onBookCall: () => void;
};

export const Navbar = ({ activeSection, isDark, onThemeToggle, onBookCall }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/78">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#" className="group flex items-center gap-3" aria-label="Go to homepage">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-premium dark:bg-blue-600 dark:text-white">
            TS
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-950 dark:text-white">{siteConfig.name}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{siteConfig.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                activeSection === link.section && "bg-slate-950 text-white hover:bg-slate-950 hover:text-white dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          <button
            type="button"
            onClick={onBookCall}
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:inline-flex"
          >
            Book a Call
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/8 dark:text-slate-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-premium lg:hidden dark:border-white/10 dark:bg-navy-950">
          <div className="mx-auto grid max-w-7xl gap-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
