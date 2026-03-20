
"use client";

type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300"
      style={{
        background: "rgba(14,19,24,0.85)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,160,0.25)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,229,160,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Accent glow on top */}
      <div
        className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,229,160,0.6), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Header bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background: project.featured
            ? "linear-gradient(90deg, #00e5a0, #0af0c8)"
            : "rgba(255,255,255,0.06)",
        }}
      />

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-base font-semibold text-[#f0ede8] leading-snug group-hover:text-[#00e5a0] transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.name}
          </h3>
          <svg
            className="shrink-0 mt-0.5 text-[#7a8492] group-hover:text-[#00e5a0] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Description */}
        <p className="text-sm text-[#7a8492] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#7a8492] hover:text-[#f0ede8] transition-colors duration-200"
            aria-label={`${project.name} on GitHub`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            Source
          </a>
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
              style={{ color: "#00e5a0" }}
              aria-label={`${project.name} live demo`}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00e5a0" }} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}










































// import Link from "next/link";
// import type { Project } from "@/data/projects";

// export default function ProjectCard({ project }: { project: Project }) {
//   return (
//     <article className="rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30">
//       <h3 className="text-xl font-semibold text-white">{project.name}</h3>
//       <p className="mt-3 text-sm leading-6 text-neutral-400">{project.description}</p>

//       <div className="mt-5 flex flex-wrap gap-2">
//         {project.stack.map((tech) => (
//           <span
//             key={tech}
//             className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       <div className="mt-6 flex flex-wrap gap-3">
//         <Link
//           href={`/projects/${project.slug}`}
//           className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black"
//         >
//           View Details
//         </Link>
//         <a
//           href={project.github}
//           target="_blank"
//           rel="noreferrer"
//           className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
//         >
//           GitHub
//         </a>
//       </div>
//     </article>
//   );
// }
