const skills = {
  Backend: ["Django", "Flask", "FastAPI", "REST APIs"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  "AI/ML": ["Python", "NLP", "AI Agents", "Model Integration"],
  Embedded: ["C/C++", "Sensors", "Microcontrollers", "Automation"],
  DevOps: ["Docker", "Linux", "Git", "Deployment"],
};

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
        Tech Stack
      </p>
      <h3 className="mt-2 text-3xl font-semibold text-white">
        Skills & Tools
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h4 className="text-lg font-semibold text-white">{category}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
