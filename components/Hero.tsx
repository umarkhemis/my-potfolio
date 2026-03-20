
"use client";

import { useEffect, useState } from "react";

const roles = ["AI/ML Engineer", "Embedded Systems", "Backend Developer", "DevOps Engineer"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Radial spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(0,229,160,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-xs animate-fade-up"
            style={{
              border: "1px solid rgba(0,229,160,0.25)",
              background: "rgba(0,229,160,0.06)",
              color: "#00e5a0",
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#00e5a0",
                boxShadow: "0 0 6px 2px rgba(0,229,160,0.6)",
                animation: "glow-pulse 2s ease-in-out infinite",
              }}
            />
            <span>Open to opportunities · Kampala, UG</span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold leading-none tracking-tight mb-6 animate-fade-up animate-delay-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="block text-[#f0ede8]">Building</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #00e5a0 0%, #0af0c8 40%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Intelligent
            </span>
            <span className="block text-[#f0ede8]">Systems.</span>
          </h1>

          {/* Rotating role */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up animate-delay-2">
            <span className="text-[#7a8492] text-base md:text-lg" style={{ fontFamily: "var(--font-body)" }}>
              Specialising in
            </span>
            <span
              className="text-base md:text-lg font-medium transition-all duration-300"
              style={{
                color: "#00e5a0",
                fontFamily: "var(--font-body)",
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {roles[roleIdx]}
            </span>
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg text-[#7a8492] leading-relaxed max-w-2xl mb-10 animate-fade-up animate-delay-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            CS graduate focused on Edge AI, embedded systems, backend engineering,
            and DevOps. I build practical, high-impact technology - especially in African contexts.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-4">
            <a href="/projects" className="btn-primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/about" className="btn-outline">
              About Me
            </a>
            <a
              href="mailto:umarkhemis9@gmail.com"
              className="btn-outline"
            >
              umarkhemis9@gmail.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 animate-fade-up animate-delay-5">
          {[
            { value: "5+", label: "Projects Built" },
            { value: "4", label: "Focus Areas" },
            { value: "AI", label: "Primary Domain" },
            { value: "UG", label: "Based In" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl px-5 py-4 flex flex-col gap-1"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(14,19,24,0.7)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#00e5a0",
                }}
              >
                {value}
              </span>
              <span className="text-xs text-[#7a8492]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up animate-delay-6"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase text-[#7a8492]">Scroll</span>
        <div
          className="w-px h-10 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="w-full rounded-full"
            style={{
              height: "40%",
              background: "#00e5a0",
              animation: "slideDown 1.8s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes slideDown {
            0%   { transform: translateY(-100%); opacity: 0; }
            20%  { opacity: 1; }
            80%  { opacity: 1; }
            100% { transform: translateY(250%); opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
}




































// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   const focusAreas = [
//     "AI/ML (Edge AI)",
//     "Embedded Systems",
//     "Backend-Focused Full-Stack Development",
//     "DevOps",
//   ];

//   return (
//     <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex flex-col justify-center"
//       >
//         <p className="mb-4 text-sm uppercase tracking-[0.25em] text-emerald-400">
//           AI • Embedded • Backend • DevOps
//         </p>
//         <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
//           Building intelligent systems and real-world software solutions.
//         </h2>
//         <p className="mt-6 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
//           I am Ahmed Umar Khemis, a Computer Science graduate focused on AI/ML,
//           Edge AI, embedded systems, backend engineering, and DevOps.
//         </p>

//         <div className="mt-8 flex flex-wrap gap-4">
//           <a
//             href="/projects"
//             className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-900 transition hover:scale-[1.02]"
//           >
//             View Projects
//           </a>
//           <a
//             href="/resume"
//             className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
//           >
//             View Resume
//           </a>
//         </div>
//       </motion.div>

//       <div className="grid gap-4 md:grid-cols-2">
//         {focusAreas.map((item, index) => (
//           <motion.div
//             key={item}
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45, delay: index * 0.08 }}
//             className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
//           >
//             <h3 className="text-lg font-semibold text-white">{item}</h3>
//             <p className="mt-2 text-sm leading-6 text-neutral-400">
//               Focused on building practical systems with strong technical foundations and real-world relevance.
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
