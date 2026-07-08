import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <div className="page">
      <nav className="topbar">
        <span className="topbar__mark">RK</span>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </nav>

      <Hero />
      <About />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  );
}
