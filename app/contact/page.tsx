import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-neutral-300">
          Interested in collaborating, hiring, or building something impactful?
        </p>

        <div className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <a href="mailto:umarkhemis9@gmail.com" className="block text-neutral-200">
            Email: umarkhemis9@gmail.com
          </a>
          <a
            href="https://github.com/umarkhemis"
            target="_blank"
            rel="noreferrer"
            className="block text-neutral-200"
          >
            GitHub: github.com/umarkhemis
          </a>
          <a
            href="https://linkedin.com/in/ahmed-umar-khemis"
            target="_blank"
            rel="noreferrer"
            className="block text-neutral-200"
          >
            LinkedIn: linkedin.com/in/ahmed-umar-khemis
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
