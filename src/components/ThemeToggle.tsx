import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="press relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-hairline bg-surface-elevated text-foreground transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-soft"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ease-out-soft ${
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ease-out-soft ${
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
};
