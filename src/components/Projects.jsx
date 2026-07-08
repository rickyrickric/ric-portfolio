import { projects } from "../data/projects";
import ProjectStop from "./ProjectStop";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <span className="section-head__code">DEPARTURES</span>
        <h2 className="section-head__title">Featured projects</h2>
      </div>

      <div className="stops">
        {projects.map((project, i) => (
          <ProjectStop
            key={project.code}
            project={project}
            index={i}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
