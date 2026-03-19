export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-emerald-400">
          AI • Embedded • Backend • DevOps
        </p>
        <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Building intelligent systems and real-world software solutions.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
          I am Ahmed Umar Khemis, a Computer Science graduate focused on AI/ML,
          Edge AI, embedded systems, backend engineering, and DevOps.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/projects"
            className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-900 transition hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          "AI/ML (Edge AI)",
          "Embedded Systems",
          "Backend-Focused Full-Stack Development",
          "DevOps",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
          >
            <h3 className="text-lg font-semibold text-white">{item}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Focused on building practical systems with strong technical
              foundations and real-world relevance.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
