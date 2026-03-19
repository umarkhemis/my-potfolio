type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30">
      <h4 className="text-xl font-semibold text-white">{project.name}</h4>
      <p className="mt-3 text-sm leading-6 text-neutral-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
