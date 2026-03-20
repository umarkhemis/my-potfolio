
const skillGroups = [
  {
    category: "AI / ML",
    icon: "⬡",
    color: "#00e5a0",
    skills: ["Python", "NLP", "AI Agents", "Edge AI", "Model Integration", "FastAPI"],
  },
  {
    category: "Backend",
    icon: "◈",
    color: "#0af0c8",
    skills: ["Django", "Flask", "FastAPI", "REST APIs", "PostgreSQL", "Redis"],
  },
  {
    category: "Frontend",
    icon: "◻",
    color: "#5b8dee",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Embedded",
    icon: "◆",
    color: "#f5c542",
    skills: ["C / C++", "Sensors", "Microcontrollers", "Automation", "Robotics"],
  },
  {
    category: "DevOps",
    icon: "○",
    color: "#f07050",
    skills: ["Docker", "Kubernetes","Linux", "Git", "CI/CD", "Deployment", "Bash"],
  },
  {
    category: "Tools",
    icon: "◇",
    color: "#a78bfa",
    skills: ["VS Code", "Postman", "Figma", "Jupyter", "Obsidian"],
  },
];

export default function Skills() {
  return (
    <section className="py-20" id="skills">
      <div className="container">
        {/* Label */}
        <div className="section-label mb-4 animate-fade-up">
          Tech Stack
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 animate-fade-up animate-delay-1"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.02em",
            color: "#f0ede8",
          }}
        >
          Skills &amp; Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map(({ category, icon, color, skills }, i) => (
            <div
              key={category}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 animate-fade-up"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(14,19,24,0.7)",
                animationDelay: `${i * 0.07}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${color}33`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${color}0d`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <span
                  className="text-xl"
                  style={{ color, fontFamily: "monospace" }}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <h3
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#f0ede8",
                    letterSpacing: "0.02em",
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full transition-colors duration-200 cursor-default"
                    style={{
                      background: `${color}12`,
                      color: `${color}cc`,
                      border: `1px solid ${color}22`,
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${color}22`;
                      (e.currentTarget as HTMLElement).style.color = color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${color}12`;
                      (e.currentTarget as HTMLElement).style.color = `${color}cc`;
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



































// const skills = {
//   Backend: ["Django", "Flask", "FastAPI", "REST APIs"],
//   Frontend: ["React", "Next.js", "Tailwind CSS"],
//   "AI/ML": ["Python", "NLP", "AI Agents", "Model Integration"],
//   Embedded: ["C/C++", "Sensors", "Microcontrollers", "Automation"],
//   DevOps: ["Docker", "Linux", "Git", "Deployment"],
// };

// export default function Skills() {
//   return (
//     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//       {Object.entries(skills).map(([category, items]) => (
//         <div
//           key={category}
//           className="rounded-3xl border border-white/10 bg-white/5 p-6"
//         >
//           <h3 className="text-lg font-semibold text-white">{category}</h3>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {items.map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full bg-white/10 px-3 py-1 text-sm text-neutral-200"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
