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
