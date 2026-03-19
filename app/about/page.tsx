import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-6 leading-8 text-neutral-300">
          I am Ahmed Umar Khemis, a BSc Computer Science graduate focused on
          AI/ML, Edge AI, embedded systems, backend engineering, and DevOps.
          I build practical, high-impact technology solutions ranging from AI
          agents and research tools to smart embedded systems and scalable
          platforms.
        </p>
      </section>
      <Footer />
    </main>
  );
}
