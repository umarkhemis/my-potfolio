import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="mt-4 max-w-4xl leading-7 text-neutral-300">
            My work sits at the intersection of AI, embedded systems, and
            scalable backend development. I enjoy building products that solve
            practical problems, especially in African contexts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
          Selected Work
        </p>
        <h3 className="mt-2 text-3xl font-semibold">Featured Projects</h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <Skills />
      <Footer />
    </main>
  );
}
