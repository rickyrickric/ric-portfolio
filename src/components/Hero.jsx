export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__ticket">
        <span className="hero__eyebrow">Route Manifest — Tagum City, PH</span>
        <span className="hero__eyebrow hero__eyebrow--right">No. RK-2026</span>
      </div>

      <h1 className="hero__name">Rick</h1>

      <p className="hero__role">
        BS Computer Science, AI major — UM Tagum College
      </p>

      <p className="hero__lede">
        Three systems, three problems worth solving close to home: a transit
        terminal that needed a real dashboard, a gym that needed a proper
        backend, and a city that needed weather data built for it, not just
        near it.
      </p>

      <div className="hero__actions">
        <a href="#projects" className="btn btn--primary">
          Board the route
        </a>
        <a href="#contact" className="btn btn--ghost">
          Get in touch
        </a>
      </div>

      <div className="hero__strip" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className="hero__strip-tick" />
        ))}
      </div>
    </header>
  );
}
