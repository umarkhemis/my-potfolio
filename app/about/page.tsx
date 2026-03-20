

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "About — Ahmed Umar Khemis",
};

const timeline = [
  { year: "2026", title: "Actively Building", desc: "Focusing on AI agents, Edge AI, and scalable backend systems. Open to opportunities." },
  { year: "2025", title: "AutoBin Project", desc: "Built an autonomous smart waste system with embedded sensors and real-time detection." },
  { year: "2024", title: "CulturalHub", desc: "Launched a platform connecting cultural providers to tourists in Uganda and Kigezi." },
  { year: "2023", title: "BSc Computer Science", desc: "Graduated with a focus on AI/ML, software engineering, and embedded systems." },
  { year: "2022", title: "Early Projects", desc: "Explored backend systems, research tools, and prompt engineering workflows." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ─── Hero ──────────────────────────────── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 30% -5%, rgba(0,229,160,0.07) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <div className="section-label mb-4">About</div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.03em",
              color: "#f0ede8",
              maxWidth: "28ch",
            }}
          >
            I build things that{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#00e5a0,#0af0c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              matter.
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#7a8492] leading-relaxed max-w-2xl">
            I&apos;m Ahmed Umar Khemis - a CS student from Uganda with a deep interest in
            AI/ML, embedded systems, backend engineering, and DevOps. My work lives at the
            intersection of cutting-edge technology and practical, real-world impact.
          </p>
        </div>
      </section>

      {/* ─── Bio + Values ──────────────────────── */}
      <section className="py-16 border-t border-[rgba(255,255,255,0.06)]">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Long bio */}
            <div className="md:col-span-3 space-y-5 text-[#7a8492] leading-relaxed">
              <p>
                My journey in tech started with a curiosity about how things work at their
                most fundamental level - from microcontrollers and sensors to the abstractions
                of machine learning and language models.
              </p>
              <p>
                I believe the most impactful technology is built close to the problem.
                That&apos;s why I focus heavily on African contexts - whether building
                infrastructure for African language models (AfriLang), boosting cultural
                tourism visibility (CulturalHub), or designing smart embedded systems for
                campus environments (AutoBin).
              </p>
              <p>
                Outside of shipping code, I spend time reading research, exploring the latest
                developments in Edge AI, and thinking about how to make powerful AI tools
                accessible and useful in low-resource settings.
              </p>
            </div>

            {/* Quick facts */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {[
                { label: "Location", value: "Kampala, Uganda" },
                { label: "Degree", value: "BSc Computer Science" },
                { label: "Primary Domain", value: "AI / ML" },
                { label: "Email", value: "umarkhemis9@gmail.com", href: "mailto:umarkhemis9@gmail.com" },
                { label: "GitHub", value: "github.com/umarkhemis", href: "https://github.com/umarkhemis" },
                { label: "Status", value: "Open to opportunities" },
              ].map(({ label, value, href }) => (
                <div
                  key={label}
                  className="flex justify-between items-start gap-4 py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs text-[#7a8492] shrink-0">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-[#f0ede8] text-right hover:text-[#00e5a0] transition-colors"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-[#f0ede8] text-right">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Timeline ──────────────────────────── */}
      <section className="py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="container">
          <div className="section-label mb-4">Journey</div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.02em",
              color: "#f0ede8",
            }}
          >
            Timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[60px] top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(0,229,160,0.3), transparent)" }}
              aria-hidden="true"
            />
            <div className="space-y-8">
              {timeline.map(({ year, title, desc }, i) => (
                <div key={year} className="flex gap-6 sm:gap-10 items-start">
                  {/* Year badge */}
                  <div
                    className="shrink-0 text-xs font-bold w-[52px] text-right"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: i === 0 ? "#00e5a0" : "#7a8492",
                      paddingTop: "2px",
                    }}
                  >
                    {year}
                  </div>
                  {/* Dot */}
                  <div
                    className="shrink-0 mt-[6px] w-2 h-2 rounded-full hidden sm:block"
                    style={{
                      background: i === 0 ? "#00e5a0" : "rgba(255,255,255,0.2)",
                      boxShadow: i === 0 ? "0 0 8px rgba(0,229,160,0.5)" : "none",
                    }}
                    aria-hidden="true"
                  />
                  {/* Content */}
                  <div
                    className="flex-1 rounded-xl p-5 transition-all duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(14,19,24,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,160,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    <p className="text-sm font-semibold text-[#f0ede8] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {title}
                    </p>
                    <p className="text-sm text-[#7a8492]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills ─────────────────────────────── */}
      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <Skills />
      </div>

      <Footer />
    </main>
  );
}