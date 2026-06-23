import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/8 dark:text-slate-200 dark:hover:border-blue-300"
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    {isDark ? <Sun size={18} /> : <Moon size={18} />}
  </button>
);
