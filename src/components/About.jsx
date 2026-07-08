const skills = [
  "React",
  "Node.js / Express",
  "MySQL",
  "Supabase",
  "Machine Learning",
  "System Design",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <span className="section-head__code">MANIFEST</span>
        <h2 className="section-head__title">About</h2>
      </div>

      <div className="about__grid">
        <p className="about__bio">
          I'm an AI-major CS student who'd rather point a project at a real
          problem in Tagum City than build another to-do app. That's meant
          revenue tracking for a transport terminal, a management system for
          a gym, and a weather model tuned to one specific city instead of
          the whole region. I like systems where the data has to be
          defensible — real fleet counts, real cooperative figures, real
          forecasts — not just aspirational numbers on a slide.
        </p>

        <div className="about__skills">
          <span className="about__skills-label">Stack on file</span>
          <ul className="ticket-tags">
            {skills.map((skill) => (
              <li key={skill} className="ticket-tag">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
