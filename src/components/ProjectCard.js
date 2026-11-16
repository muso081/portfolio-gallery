const ICONS = { React: '⚛️', Node: '🟢', CSS: '🎨', JavaScript: '⚡' };

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <article className="card">
      <div className="banner" data-tech={tech[0]}>
        <span>{ICONS[tech[0]] || '💻'}</span>
      </div>

      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="tech">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="links">
          <a className="btn small" href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn small ghost" href={demo} target="_blank" rel="noreferrer">Live demo</a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;