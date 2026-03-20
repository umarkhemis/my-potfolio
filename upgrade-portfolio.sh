#!/bin/bash

set -e

echo "Installing framer-motion..."
npm install framer-motion

echo "Creating folders..."
mkdir -p app/projects/[slug]
mkdir -p components
mkdir -p data
mkdir -p public

echo "Writing data/projects.ts..."
cat > data/projects.ts <<'EOF'
export type Project = {
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  github: string;
  demo: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "promptpilot",
    name: "PromptPilot",
    description:
      "AI-powered prompt engineering assistant that improves prompts, generates better ones, and recommends the right tools.",
    fullDescription:
      "PromptPilot is an AI agent designed to help users transform simple ideas into strong, structured prompts. It can improve an existing prompt, generate a new prompt from a short explanation, and recommend the most suitable tools for execution. It is especially useful for marketers and students who want better output quality and faster workflow execution.",
    stack: ["AI Agents", "Prompt Engineering", "React", "FastAPI"],
    github: "https://github.com/umarkhemis",
    demo: "#",
    highlights: [
      "Improves and generates prompts from simple input",
      "Recommends the best tools for prompt execution",
      "Targets productivity for students and marketers",
    ],
  },
  {
    slug: "culturalhub",
    name: "CulturalHub",
    description:
      "Platform connecting cultural providers to tourists to improve cultural tourism visibility in Kigezi and Uganda.",
    fullDescription:
      "CulturalHub is a tourism and discovery platform built to give visibility to cultural providers and connect them directly with tourists. The project focuses on strengthening cultural tourism in Kigezi and Uganda by making local experiences more discoverable through technology.",
    stack: ["Django", "React", "Platform Design", "Tourism Tech"],
    github: "https://github.com/umarkhemis",
    demo: "#",
    highlights: [
      "Connects tourists with cultural providers",
      "Promotes local visibility and discovery",
      "Supports digital growth of cultural tourism",
    ],
  },
  {
    slug: "scholarai",
    name: "ScholarAI",
    description:
      "Research agent that retrieves relevant papers, summarizes topics, and generates literature reviews from scholarly sources.",
    fullDescription:
      "ScholarAI is a research automation system that takes a topic from a user, retrieves relevant papers from sources such as Semantic Scholar and arXiv, generates topic summaries from the retrieved work, and then produces a structured literature review. It is built to simplify early-stage academic research workflows.",
    stack: ["NLP", "Semantic Search", "arXiv", "Literature Review"],
    github: "https://github.com/umarkhemis",
    demo: "#",
    highlights: [
      "Retrieves papers related to a research topic",
      "Generates topic summaries from retrieved work",
      "Builds literature reviews automatically",
    ],
  },
  {
    slug: "afrilang",
    name: "AfriLang",
    description:
      "Infrastructure for discovering, accessing, and routing African language models for application integration.",
    fullDescription:
      "AfriLang is an infrastructure layer for African language AI. It gathers fragmented African language models into one place, helping developers discover, access, and integrate them more easily. It also supports model routing to help select the best model for a given task.",
    stack: ["AI Infrastructure", "Language Models", "Routing", "Developer Tools"],
    github: "https://github.com/umarkhemis",
    demo: "#",
    highlights: [
      "Centralizes fragmented African language models",
      "Makes integration easier for developers",
      "Routes the best model for a specific task",
    ],
  },
  {
    slug: "autobin",
    name: "AutoBin",
    description:
      "Autonomous smart waste system that moves through campus, detects people, and opens automatically for disposal.",
    fullDescription:
      "AutoBin is a smart moving dustbin designed for campus environments. It navigates around, detects people nearby, opens automatically for waste disposal, waits for a short time, then closes and continues moving if no further interaction is detected. It combines embedded systems, automation, and practical human interaction design.",
    stack: ["Embedded Systems", "Sensors", "Automation", "Robotics"],
    github: "https://github.com/umarkhemis",
    demo: "#",
    highlights: [
      "Moves autonomously through campus spaces",
      "Detects nearby users and opens automatically",
      "Combines mobility, sensing, and automation",
    ],
  },
];
EOF

echo "Writing components/Section.tsx..."
cat > components/Section.tsx <<'EOF'
import { ReactNode } from "react";

export default function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
          {eyebrow}
        </p>
      ) : null}
      {title ? <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
EOF

echo "Writing components/AnimatedReveal.tsx..."
cat > components/AnimatedReveal.tsx <<'EOF'
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
EOF

echo "Writing components/Navbar.tsx..."
cat > components/Navbar.tsx <<'EOF'
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="block">
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Ahmed Umar Khemis
          </h1>
          <p className="text-xs text-neutral-400">Portfolio</p>
        </Link>

        <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
EOF

echo "Writing components/Footer.tsx..."
cat > components/Footer.tsx <<'EOF'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
      © 2026 Ahmed Umar Khemis. Built with purpose.
    </footer>
  );
}
EOF

echo "Writing components/Hero.tsx..."
cat > components/Hero.tsx <<'EOF'
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const focusAreas = [
    "AI/ML (Edge AI)",
    "Embedded Systems",
    "Backend-Focused Full-Stack Development",
    "DevOps",
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center"
      >
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
            href="/resume"
            className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {focusAreas.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
          >
            <h3 className="text-lg font-semibold text-white">{item}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Focused on building practical systems with strong technical foundations and real-world relevance.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
EOF

echo "Writing components/ProjectCard.tsx..."
cat > components/ProjectCard.tsx <<'EOF'
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30">
      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-400">{project.description}</p>

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

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black"
        >
          View Details
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
EOF

echo "Writing components/Skills.tsx..."
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
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Object.entries(skills).map(([category, items]) => (
        <div
          key={category}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-lg font-semibold text-white">{category}</h3>
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
  );
}
EOF

echo "Writing components/ContactForm.tsx..."
cat > components/ContactForm.tsx <<'EOF'
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm text-neutral-300">Name</label>
          <input
            type="text"
            className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-300">Email</label>
          <input
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-300">Message</label>
          <textarea
            rows={6}
            className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
            placeholder="Tell me about your project or opportunity"
          />
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-white px-5 py-3 font-medium text-black"
        >
          Send Message
        </button>

        {submitted ? (
          <p className="text-sm text-emerald-400">
            Message captured. Next step: connect this form to Formspree, Getform, or your backend API.
          </p>
        ) : null}
      </form>
    </div>
  );
}
EOF

echo "Writing app/layout.tsx..."
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
      <body className="bg-neutral-950 text-white antialiased">{children}</body>
    </html>
  );
}
EOF

echo "Writing app/page.tsx..."
cat > app/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import AnimatedReveal from "@/components/AnimatedReveal";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />

      <Section title="About">
        <AnimatedReveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="max-w-4xl leading-7 text-neutral-300">
              My work sits at the intersection of AI, embedded systems, and scalable
              backend development. I enjoy building products that solve practical
              problems, especially in African contexts, from cultural tourism visibility
              to research automation and smart campus systems.
            </p>
          </div>
        </AnimatedReveal>
      </Section>

      <Section eyebrow="Selected Work" title="Featured Projects">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <AnimatedReveal key={project.slug}>
              <ProjectCard project={project} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Tech Stack" title="Skills & Tools">
        <AnimatedReveal>
          <Skills />
        </AnimatedReveal>
      </Section>

      <Section title="Contact">
        <AnimatedReveal>
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
            <h3 className="text-2xl font-semibold text-white">
              Let’s build something impactful.
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-200">
              Interested in collaborating, hiring, or discussing AI, embedded systems,
              backend platforms, or DevOps workflows?
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-200">
              <a href="mailto:umarkhemis9@gmail.com" className="rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/10">
                umarkhemis9@gmail.com
              </a>
              <a href="https://github.com/umarkhemis" className="rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/10">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ahmed-umar-khemis" className="rounded-2xl border border-white/10 px-4 py-2 hover:bg-white/10">
                LinkedIn
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </Section>

      <Footer />
    </main>
  );
}
EOF

echo "Writing app/about/page.tsx..."
cat > app/about/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Section title="About Me">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="leading-8 text-neutral-300">
            I am Ahmed Umar Khemis, a BSc Computer Science graduate focused on
            AI/ML, Edge AI, embedded systems, backend engineering, and DevOps.
            I build practical, high-impact solutions ranging from AI agents and
            research systems to tourism platforms and smart autonomous devices.
          </p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
EOF

echo "Writing app/projects/page.tsx..."
cat > app/projects/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Section title="Projects">
        <p className="max-w-2xl text-neutral-300">
          A selection of projects across AI agents, embedded systems, backend
          platforms, and developer infrastructure.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
EOF

echo "Writing app/projects/[slug]/page.tsx..."
cat > app/projects/[slug]/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
          Project Details
        </p>
        <h1 className="mt-2 text-4xl font-bold">{project.name}</h1>
        <p className="mt-6 leading-8 text-neutral-300">{project.fullDescription}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 space-y-3 text-neutral-300">
            {project.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-5 py-3 font-medium text-black"
          >
            View GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 px-5 py-3 font-medium text-white"
          >
            Live Demo
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
EOF

echo "Writing app/resume/page.tsx..."
cat > app/resume/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Section title="Resume">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="leading-8 text-neutral-300">
            Backend-focused Full-Stack Developer and AI/ML Engineer specializing
            in Edge AI, intelligent systems, and scalable backend architectures.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="mt-3 text-neutral-300">
              Bachelor of Science in Computer Science
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Focus Areas</h2>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>AI/ML (Edge AI)</li>
              <li>Embedded Systems</li>
              <li>Backend-Focused Fullstack Development</li>
              <li>DevOps</li>
            </ul>
          </div>

          <a
            href="/resume.pdf"
            className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-medium text-black"
          >
            Download Resume
          </a>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
EOF

echo "Writing app/contact/page.tsx..."
cat > app/contact/page.tsx <<'EOF'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Section title="Contact">
        <p className="max-w-2xl text-neutral-300">
          Interested in collaborating, hiring, or building something impactful?
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ContactForm />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Reach Me Directly</h2>
            <div className="mt-6 space-y-4 text-neutral-300">
              <a href="mailto:umarkhemis9@gmail.com" className="block">
                Email: umarkhemis9@gmail.com
              </a>
              <a href="https://github.com/umarkhemis" target="_blank" rel="noreferrer" className="block">
                GitHub: github.com/umarkhemis
              </a>
              <a href="https://linkedin.com/in/ahmed-umar-khemis" target="_blank" rel="noreferrer" className="block">
                LinkedIn: linkedin.com/in/ahmed-umar-khemis
              </a>
              <p>Phone: 0791018086 / 0784277802</p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
EOF

echo "Writing app/globals.css..."
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

* {
  box-sizing: border-box;
}
EOF

echo "Done."
echo "Next steps:"
echo "1. Put your resume PDF at public/resume.pdf"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"