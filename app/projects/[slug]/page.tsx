import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
          Project Details
        </p>
        <h1 className="mt-2 text-4xl font-bold">{project.name}</h1>
        <p className="mt-6 leading-8 text-neutral-300">{project.fullDescription}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 space-y-3 text-neutral-300">
            {project.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-5 py-3 font-medium text-black"
          >
            View GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 px-5 py-3 font-medium text-white"
          >
            Live Demo
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
