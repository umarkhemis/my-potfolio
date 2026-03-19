#!/bin/bash

# Ahmed Portfolio Scaffolder
# Run this inside the root of your Next.js project

set -e

echo "Creating folders..."
mkdir -p app/about
mkdir -p app/projects
mkdir -p app/resume
mkdir -p app/contact
mkdir -p components
mkdir -p data
mkdir -p public

echo "Creating data/projects.ts..."
cat > data/projects.ts <<'EOF'
export const projects = [
  {
    name: "PromptPilot",
    description:
      "AI-powered prompt engineering assistant that refines prompts, generates better ones from simple ideas, and recommends the right tools for execution.",
    stack: ["AI Agents", "Prompt Engineering", "React", "FastAPI"],
    github: "https://github.com/umarkhemis",
    demo: "#",
  },
  {
    name: "CulturalHub",
    description:
      "Platform connecting cultural providers to tourists to boost cultural tourism visibility in Kigezi and Uganda.",
    stack: ["Django", "React", "Platform Design"],
    github: "https://github.com/umarkhemis",
    demo: "#",
  },
  {
    name: "ScholarAI",
    description:
      "Research agent that retrieves relevant papers, summarizes topics, and generates literature reviews from academic sources.",
    stack: ["NLP", "Semantic Search", "arXiv"],
    github: "https://github.com/umarkhemis",
    demo: "#",
  },
  {
    name: "AfriLang",
    description:
      "Infrastructure for discovering, accessing, and routing African language models for real-world application integration.",
    stack: ["AI Infrastructure", "Language Models", "Developer Tools"],
    github: "https://github.com/umarkhemis",
    demo: "#",
  },
  {
    name: "AutoBin",
    description:
      "Autonomous smart waste system that moves around campus, detects nearby users, and opens automatically for disposal.",
    stack: ["Embedded Systems", "Sensors", "Automation", "Robotics"],
    github: "https://github.com/umarkhemis",
    demo: "#",
  },
];
EOF

echo "Creating components/Navbar.tsx..."
cat > components/Navbar.tsx <<'EOF'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Ahmed Umar Khemis
          </h1>
          <p className="text-xs text-neutral-400">Portfolio</p>
        </div>

        <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
EOF

echo "Creating components/Footer.tsx..."
cat > components/Footer.tsx <<'EOF'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
      © 2026 Ahmed Umar Khemis. Built with purpose.
    </footer>
  );
}
EOF

echo "Creating components/Hero.tsx..."
cat > components/Hero.tsx <<'EOF'
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
EOF

echo "Creating components/ProjectCard.tsx..."
cat > components/ProjectCard.tsx <<'EOF'
type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30">
      <h4 className="text-xl font-semibold text-white">{project.name}</h4>
      <p className="mt-3 text-sm leading-6 text-neutral-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}
EOF

echo "Creating components/Skills.tsx..."
cat > components/Skills.tsx <<'EOF'
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
EOF

echo "Creating app/layout.tsx..."
cat > app/layout.tsx <<'EOF'
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed Umar Khemis Portfolio",
  description: "AI/ML, Embedded Systems, Backend, and DevOps Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
EOF

echo "Creating app/page.tsx..."
cat > app/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="mt-4 max-w-4xl leading-7 text-neutral-300">
            My work sits at the intersection of AI, embedded systems, and
            scalable backend development. I enjoy building products that solve
            practical problems, especially in African contexts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
          Selected Work
        </p>
        <h3 className="mt-2 text-3xl font-semibold">Featured Projects</h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <Skills />
      <Footer />
    </main>
  );
}
EOF

echo "Creating app/about/page.tsx..."
cat > app/about/page.tsx <<'EOF'
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
EOF

echo "Creating app/projects/page.tsx..."
cat > app/projects/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          A selection of projects across AI agents, embedded systems, backend
          platforms, and developer infrastructure.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
EOF

echo "Creating app/resume/page.tsx..."
cat > app/resume/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="mt-6 leading-8 text-neutral-300">
          Backend-focused Full-Stack Developer and AI/ML Engineer specializing
          in Edge AI, intelligent systems, and scalable backend architectures.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-3 text-neutral-300">
            Bachelor of Science in Computer Science
          </p>

          <h2 className="mt-8 text-2xl font-semibold">Focus Areas</h2>
          <ul className="mt-3 space-y-2 text-neutral-300">
            <li>AI/ML (Edge AI)</li>
            <li>Embedded Systems</li>
            <li>Backend-Focused Fullstack Development</li>
            <li>DevOps</li>
          </ul>

          <a
            href="/resume.pdf"
            className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-black"
          >
            Download Resume
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
EOF

echo "Creating app/contact/page.tsx..."
cat > app/contact/page.tsx <<'EOF'
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
EOF

echo "Ensuring app/globals.css exists..."
if [ ! -f app/globals.css ]; then
cat > app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: #0a0a0a;
  color: white;
}
EOF
fi

echo "Done."
echo "Next:"
echo "1. Put your PDF resume in public/resume.pdf"
echo "2. Run: npm run dev"
