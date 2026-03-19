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
