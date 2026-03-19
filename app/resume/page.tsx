import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="mt-6 leading-8 text-neutral-300">
          Backend-focused Full-Stack Developer and AI/ML Engineer specializing
          in Edge AI, intelligent systems, and scalable backend architectures.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-3 text-neutral-300">
            Bachelor of Science in Computer Science
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Focus Areas</h2>
          <ul className="mt-3 space-y-2 text-neutral-300">
            <li>AI/ML (Edge AI)</li>
            <li>Embedded Systems</li>
            <li>Backend-Focused Fullstack Development</li>
            <li>DevOps</li>
          </ul>

          <a
            href="/resume.pdf"
            className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-black"
          >
            Download Resume
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
