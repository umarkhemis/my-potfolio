
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(8,12,16,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-decoration-none"
            aria-label="Ahmed Umar Khemis — Home"
          >
            {/* Monogram mark */}
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-[#080c10] font-bold text-sm shrink-0 transition-transform duration-200 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#00e5a0 0%,#0af0c8 100%)",
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.02em",
              }}
            >
              AK
            </span>
            <div className="hidden sm:block">
              <p
                className="text-sm font-semibold leading-none text-[#f0ede8] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ahmed Umar
              </p>
              <p className="text-[11px] text-[#7a8492] leading-none mt-0.5">
                AI · Embedded · Backend
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative px-4 py-2 text-sm rounded-lg transition-colors duration-200"
                  style={{
                    color: active ? "#00e5a0" : "#7a8492",
                    fontFamily: "var(--font-body)",
                    fontWeight: active ? "500" : "400",
                  }}
                  onMouseEnter={(e) =>
                    !active && ((e.currentTarget as HTMLElement).style.color = "#f0ede8")
                  }
                  onMouseLeave={(e) =>
                    !active && ((e.currentTarget as HTMLElement).style.color = "#7a8492")
                  }
                >
                  {label}
                  {active && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#00e5a0" }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="/contact"
              className="ml-3 btn-primary text-xs"
              style={{ padding: "8px 20px" }}
            >
              Hire Me
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden hamburger flex flex-col justify-center gap-[5px] w-10 h-10 -mr-1 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-4 mx-auto"
                style={{
                  display: "block",
                  height: "1.5px",
                  background: "#f0ede8",
                  borderRadius: "2px",
                  transition: "transform 0.3s, opacity 0.3s",
                  ...(open && i === 0 ? { transform: "translateY(6.5px) rotate(45deg)" } : {}),
                  ...(open && i === 1 ? { opacity: 0, transform: "scaleX(0)" } : {}),
                  ...(open && i === 2 ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}),
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          background: "rgba(8,12,16,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-8"
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label }, idx) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold transition-all duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  color: active ? "#00e5a0" : "#f0ede8",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${idx * 0.06 + 0.1}s`,
                  letterSpacing: "-0.02em",
                }}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.3s, transform 0.3s",
              transitionDelay: "0.4s",
            }}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </>
  );
}


































// import Link from "next/link";

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/projects", label: "Projects" },
//   { href: "/resume", label: "Resume" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//         <Link href="/" className="block">
//           <h1 className="text-lg font-semibold tracking-wide text-white">
//             Ahmed Umar Khemis
//           </h1>
//           <p className="text-xs text-neutral-400">Portfolio</p>
//         </Link>

//         <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
//           {links.map((link) => (
//             <Link key={link.href} href={link.href} className="hover:text-white transition">
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
