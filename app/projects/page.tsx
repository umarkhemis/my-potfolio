import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          A selection of projects across AI agents, embedded systems, backend
          platforms, and developer infrastructure.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
