
'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Ahmed Umar Khemis",
};

const experience = [
  {
    role: "Independent Developer / Researcher",
    org: "Self-Directed",
    period: "2022 — Present",
    points: [
      "Designed and shipped 5+ production-ready projects spanning AI, embedded systems, and backend platforms.",
      "Built AI agents and research tools (PromptPilot, ScholarAI) integrating NLP and semantic search.",
      "Developed embedded automation systems (AutoBin) using C/C++, sensors, and microcontrollers.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science — Computer Science",
    institution: "Uganda",
    period: "Graduated 2023",
    note: "Focus: AI/ML, Embedded Systems, Software Engineering",
  },
];

const focusAreas = [
  { title: "AI / ML", desc: "Edge AI, agents, NLP, model integration", color: "#00e5a0" },
  { title: "Embedded Systems", desc: "C/C++, microcontrollers, sensors, automation", color: "#f5c542" },
  { title: "Backend Development", desc: "Django, Flask, FastAPI, REST APIs, PostgreSQL", color: "#0af0c8" },
  { title: "DevOps", desc: "Docker, Kubernetes, Linux, Git, CI/CD, deployment", color: "#5b8dee" },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ─── Hero ──────────────────────────────── */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 50% -10%, rgba(0,229,160,0.07) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-2">
            <div>
              <div className="section-label mb-4">Resume</div>
              <h1
                className="text-4xl md:text-6xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.03em",
                  color: "#f0ede8",
                }}
              >
                Ahmed Umar Khemis
              </h1>
              <p className="text-base text-[#7a8492] mt-3">
                Backend-focused Full-Stack Developer & AI/ML Engineer
              </p>
            </div>
            <a
              href="/resume.pdf"
              className="btn-primary"
              download
            >
              Download PDF
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v7M4 7l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Main Content ──────────────────────── */}
      <section className="pb-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Left sidebar */}
            <div className="md:col-span-1 flex flex-col gap-6">
              {/* Contact */}
              <div
                className="rounded-2xl p-6"
                style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(14,19,24,0.7)" }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7a8492] mb-4">
                  Contact
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Email", value: "umarkhemis9@gmail.com", href: "mailto:umarkhemis9@gmail.com" },
                    { label: "GitHub", value: "github.com/umarkhemis", href: "https://github.com/umarkhemis" },
                    { label: "LinkedIn", value: "linkedin.com/in/ahmed-umar-khemis", href: "https://linkedin.com/in/ahmed-umar-khemis" },
                    { label: "Location", value: "Kampala, Uganda" },
                  ].map(({ label, value, href }) => (
                    <div key={label}>
                      <p className="text-[10px] uppercase tracking-wider text-[#7a8492] mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-xs text-[#f0ede8] hover:text-[#00e5a0] transition-colors break-all" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                          {value}
                        </a>
                      ) : (
                        <p className="text-xs text-[#f0ede8]">{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus areas */}
              <div
                className="rounded-2xl p-6"
                style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(14,19,24,0.7)" }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7a8492] mb-4">
                  Focus Areas
                </h3>
                <div className="space-y-4">
                  {focusAreas.map(({ title, desc, color }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: color }}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-medium text-[#f0ede8]" style={{ fontFamily: "var(--font-display)" }}>{title}</p>
                        <p className="text-xs text-[#7a8492]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right main */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Summary */}
              <div
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid rgba(0,229,160,0.12)",
                  background: "linear-gradient(135deg, rgba(0,229,160,0.04) 0%, rgba(14,19,24,0.85) 100%)",
                }}
              >
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#00e5a0] mb-4">
                  Summary
                </h2>
                <p className="text-sm text-[#7a8492] leading-relaxed">
                  Backend-focused Full-Stack Developer and AI/ML Engineer specialising in Edge AI,
                  intelligent systems, and scalable backend architectures. I build practical
                  products that solve real-world problems - with a particular focus on African
                  tech contexts.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#7a8492] mb-6">
                  Experience
                </h2>
                <div className="space-y-6">
                  {experience.map(({ role, org, period, points }) => (
                    <div
                      key={role}
                      className="rounded-2xl p-6"
                      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(14,19,24,0.5)" }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-base font-semibold text-[#f0ede8]" style={{ fontFamily: "var(--font-display)" }}>
                            {role}
                          </h3>
                          <p className="text-sm text-[#7a8492]">{org}</p>
                        </div>
                        <span className="tag">{period}</span>
                      </div>
                      <ul className="space-y-2">
                        {points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#7a8492]">
                            <span className="mt-2 w-1 h-1 rounded-full bg-[#00e5a0] shrink-0" aria-hidden="true" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#7a8492] mb-6">
                  Education
                </h2>
                {education.map(({ degree, institution, period, note }) => (
                  <div
                    key={degree}
                    className="rounded-2xl p-6"
                    style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(14,19,24,0.5)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-[#f0ede8]" style={{ fontFamily: "var(--font-display)" }}>
                          {degree}
                        </h3>
                        <p className="text-sm text-[#7a8492]">{institution}</p>
                      </div>
                      <span className="tag">{period}</span>
                    </div>
                    <p className="text-xs text-[#7a8492] mt-2">{note}</p>
                  </div>
                ))}
              </div>
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
// import Section from "@/components/Section";

// export default function ResumePage() {
//   return (
//     <main className="min-h-screen bg-neutral-950 text-white">
//       <Navbar />
//       <Section title="Resume">
//         <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
//           <p className="leading-8 text-neutral-300">
//             Backend-focused Full-Stack Developer and AI/ML Engineer specializing
//             in Edge AI, intelligent systems, and scalable backend architectures.
//           </p>

//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold">Education</h2>
//             <p className="mt-3 text-neutral-300">
//               Bachelor of Science in Computer Science
//             </p>
//           </div>

//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold">Focus Areas</h2>
//             <ul className="mt-3 space-y-2 text-neutral-300">
//               <li>AI/ML (Edge AI)</li>
//               <li>Embedded Systems</li>
//               <li>Backend-Focused Fullstack Development</li>
//               <li>DevOps</li>
//             </ul>
//           </div>

//           <a
//             href="/resume.pdf"
//             className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-black"
//           >
//             Download Resume
//           </a>
//         </div>
//       </Section>
//       <Footer />
//     </main>
//   );
// }
