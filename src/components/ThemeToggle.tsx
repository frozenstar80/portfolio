import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/15 dark:border-white dark:bg-white dark:text-slate-950 dark:shadow-lg dark:shadow-black/20 dark:hover:border-blue-200 dark:hover:bg-blue-50 dark:hover:text-blue-700"
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    {isDark ? <Sun size={18} /> : <Moon size={18} />}
  </button>
);
