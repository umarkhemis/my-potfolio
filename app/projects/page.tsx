
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Ahmed Umar Khemis",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ─── Hero ──────────────────────────────── */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 40% at 70% -5%, rgba(10,240,200,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <div className="section-label mb-4">Work</div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.03em",
              color: "#f0ede8",
            }}
          >
            Projects
          </h1>
          <p className="text-base md:text-lg text-[#7a8492] max-w-xl leading-relaxed">
            A selection of projects spanning AI agents, embedded systems, backend platforms,
            and developer infrastructure - mostly built with African problems in mind.
          </p>
        </div>
      </section>

      {/* ─── All Projects Grid ─────────────────── */}
      <section className="py-10 pb-24">
        <div className="container">
          {/* Stats row */}
          <div
            className="flex items-center gap-6 mb-10 py-4 px-5 rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(14,19,24,0.5)",
            }}
          >
            <div>
              <span
                className="text-2xl font-bold text-[#00e5a0]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {projects.length}
              </span>
              <span className="ml-2 text-sm text-[#7a8492]">Projects</span>
            </div>
            <div
              className="h-8 w-px"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
            <div>
              <span
                className="text-2xl font-bold text-[#0af0c8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {projects.filter(p => p.featured).length}
              </span>
              <span className="ml-2 text-sm text-[#7a8492]">Featured</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          {/* More coming soon banner */}
          <div
            className="mt-8 rounded-2xl p-6 text-center"
            style={{
              border: "1px dashed rgba(0,229,160,0.18)",
              background: "rgba(0,229,160,0.03)",
            }}
          >
            <p className="text-sm text-[#7a8492]">
              More projects in progress —{" "}
              <a
                href="https://github.com/umarkhemis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00e5a0] hover:underline"
              >
                follow on GitHub
              </a>{" "}
              for updates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}






























// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Section from "@/components/Section";
// import ProjectCard from "@/components/ProjectCard";
// import { projects } from "@/data/projects";

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-neutral-950 text-white">
//       <Navbar />
//       <Section title="Projects">
//         <p className="max-w-2xl text-neutral-300">
//           A selection of projects across AI agents, embedded systems, backend
//           platforms, and developer infrastructure.
//         </p>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {projects.map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </Section>
//       <Footer />
//     </main>
//   );
// }
