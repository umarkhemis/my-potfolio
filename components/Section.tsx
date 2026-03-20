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
