export default function ProjectStop({ project, index, total }) {
  return (
    <article className="stop">
      <div className="stop__rail" aria-hidden="true">
        <span className="stop__dot" />
        {index < total - 1 && <span className="stop__track" />}
      </div>

      <div className="stop__body">
        <div className="stop__meta">
          <span className="stop__code">{project.code}</span>
          <span className="stop__line">{project.line}</span>
          <span className="stop__status">{project.status}</span>
        </div>

        <h3 className="stop__name">{project.name}</h3>

        <dl className="stop__narrative">
          <div className="stop__row">
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div className="stop__row">
            <dt>Solution</dt>
            <dd>{project.solution}</dd>
          </div>
          <div className="stop__row">
            <dt>Impact</dt>
            <dd>{project.impact}</dd>
          </div>
        </dl>

        <ul className="ticket-tags">
          {project.tags.map((tag) => (
            <li key={tag} className="ticket-tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
