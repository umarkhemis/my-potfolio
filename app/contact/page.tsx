
'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ahmed Umar Khemis",
};

const channels = [
  {
    title: "Email",
    value: "umarkhemis9@gmail.com",
    href: "mailto:umarkhemis9@gmail.com",
    desc: "Best for project inquiries & collaborations",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
  },
  {
    title: "GitHub",
    value: "github.com/umarkhemis",
    href: "https://github.com/umarkhemis",
    desc: "Follow my open source work",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/ahmed-umar-khemis",
    href: "https://linkedin.com/in/ahmed-umar-khemis",
    desc: "Professional connections & networking",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ─── Hero ──────────────────────────────── */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 20% -5%, rgba(0,229,160,0.07) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <div className="section-label mb-4">Contact</div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.03em",
              color: "#f0ede8",
              maxWidth: "16ch",
            }}
          >
            Let&apos;s build something
            {" "}
            <span
              style={{
                background: "linear-gradient(135deg,#00e5a0,#0af0c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              together.
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#7a8492] max-w-md leading-relaxed">
            Whether you want to collaborate, hire, discuss an idea, or just say hello
            - my inbox is always open.
          </p>
        </div>
      </section>

      {/* ─── Channels ──────────────────────────── */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {channels.map(({ title, value, href, desc, icon }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(14,19,24,0.7)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,160,0.25)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#00e5a0]"
                  style={{ background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.15)" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f0ede8] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {title}
                  </p>
                  <p className="text-xs text-[#00e5a0] mb-1 break-all">{value}</p>
                  <p className="text-xs text-[#7a8492]">{desc}</p>
                </div>
                <svg
                  className="mt-auto self-end text-[#7a8492] group-hover:text-[#00e5a0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                >
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Availability note */}
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
            style={{
              border: "1px solid rgba(0,229,160,0.12)",
              background: "linear-gradient(135deg, rgba(0,229,160,0.04) 0%, rgba(14,19,24,0.9) 100%)",
            }}
          >
            <div
              className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: "rgba(0,229,160,0.1)",
                border: "1px solid rgba(0,229,160,0.2)",
              }}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: "#00e5a0",
                  boxShadow: "0 0 10px 3px rgba(0,229,160,0.5)",
                  animation: "glow-pulse 2s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-[#f0ede8] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Currently Available
              </p>
              <p className="text-sm text-[#7a8492]">
                I&apos;m actively looking for new opportunities - full-time, freelance, or
                collaborative research. If you have a project or role that matches my
                profile, let&apos;s talk.
              </p>
            </div>
            <a href="mailto:umarkhemis9@gmail.com" className="btn-primary shrink-0 whitespace-nowrap">
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}