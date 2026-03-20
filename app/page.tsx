
'use client';





import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* ─── About Snippet ─────────────────────────────────── */}
      <section className="py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-4">About Me</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                  color: "#f0ede8",
                }}
              >
                Where AI meets real-world impact
              </h2>
              <p className="text-[#7a8492] leading-relaxed mb-6">
                I&apos;m Ahmed Umar - a Computer Science student working at the intersection of
                AI/ML, embedded systems, and scalable backend development. My focus is on
                building products that solve practical problems, especially in African contexts.
              </p>
              <a href="/about" className="btn-outline" style={{ width: "fit-content" }}>
                Read More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Focus area grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "◈", title: "AI / ML", desc: "Edge AI, agents, NLP" },
                { icon: "◆", title: "Embedded", desc: "Sensors, microcontrollers" },
                { icon: "○", title: "Backend", desc: "Django, FastAPI, APIs" },
                { icon: "◇", title: "DevOps", desc: "Docker, Linux, CI/CD" },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-4 flex flex-col gap-2 transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(14,19,24,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,160,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <span className="text-[#00e5a0] text-lg">{icon}</span>
                  <p className="text-sm font-semibold text-[#f0ede8]" style={{ fontFamily: "var(--font-display)" }}>{title}</p>
                  <p className="text-xs text-[#7a8492]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ──────────────────────────────── */}
      <section className="py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="section-label mb-4">Work</div>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                  color: "#f0ede8",
                }}
              >
                Featured Projects
              </h2>
            </div>
            <a href="/projects" className="btn-outline text-sm" style={{ padding: "8px 20px" }}>
              All Projects →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skills ─────────────────────────────────────────── */}
      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <Skills />
      </div>

      {/* ─── CTA Band ───────────────────────────────────────── */}
      <section className="py-24 border-t border-[rgba(255,255,255,0.06)]">
        <div className="container">
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              border: "1px solid rgba(0,229,160,0.15)",
              background: "linear-gradient(135deg, rgba(0,229,160,0.06) 0%, rgba(14,19,24,0.95) 60%)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% -20%, rgba(0,229,160,0.12) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h2
                className="text-3xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.03em",
                  color: "#f0ede8",
                }}
              >
                Let&apos;s Build Something
                <span
                  style={{
                    display: "block",
                    background: "linear-gradient(135deg,#00e5a0,#0af0c8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Together
                </span>
              </h2>
              <p className="text-[#7a8492] mb-8 max-w-md mx-auto">
                Interested in collaborating, hiring, or just building something impactful? I&apos;d love to hear from you.
              </p>
              <a href="/contact" className="btn-primary text-sm">
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

































// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Skills from "@/components/Skills";
// import ProjectCard from "@/components/ProjectCard";
// import Section from "@/components/Section";
// import AnimatedReveal from "@/components/AnimatedReveal";
// import { projects } from "@/data/projects";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-neutral-950 text-white">
//       <Navbar />
//       <Hero />

//       <Section title="About">
//         <AnimatedReveal>
//           <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
//             <p className="max-w-4xl leading-7 text-neutral-300">
//               My work sits at the intersection of AI, embedded systems, and scalable
//               backend development. I enjoy building products that solve practical
//               problems, especially in African contexts, from cultural tourism visibility
//               to research automation and smart campus systems.
//             </p>
//           </div>
//         </AnimatedReveal>
//       </Section>

//       <Section eyebrow="Selected Work" title="Featured Projects">
//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {projects.map((project) => (
//             <AnimatedReveal key={project.slug}>
//               <ProjectCard project={project} />
//             </AnimatedReveal>
//           ))}
//         </div>
//       </Section>

//       <Section eyebrow="Tech Stack" title="Skills & Tools">
//         <AnimatedReveal>
//           <Skills />
//         </AnimatedReveal>
//       </Section>

//       <Section title="Contact">
//         <AnimatedReveal>
//           <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
//             <h3 className="text-2xl font-semibold text-white">
//               Let’s build something impactful.
//             </h3>
//             <p className="mt-3 max-w-2xl leading-7 text-neutral-200">
//               Interested in collaborating, hiring, or discussing AI, embedded systems,
//               backend platforms, or DevOps workflows?
//             </p>
//             <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-200">
//               <a href="mailto:umarkhemis9@gmail.com" className="rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/10">
//                 umarkhemis9@gmail.com
//               </a>
//               <a href="https://github.com/umarkhemis" className="rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/10">
//                 GitHub
//               </a>
//               <a href="https://linkedin.com/in/ahmed-umar-khemis" className="rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/10">
//                 LinkedIn
//               </a>
//             </div>
//           </div>
//         </AnimatedReveal>
//       </Section>

//       <Footer />
//     </main>
//   );
// }
