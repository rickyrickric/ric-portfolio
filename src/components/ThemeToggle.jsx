export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__label theme-toggle__label--day">DAY</span>
        <span className="theme-toggle__label theme-toggle__label--night">NIGHT</span>
        <span className="theme-toggle__knob" />
      </span>
    </button>
  );
}
