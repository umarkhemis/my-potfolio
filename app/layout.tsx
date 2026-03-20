
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed Umar Khemis - AI · Embedded · Backend",
  description:
    "Portfolio of Ahmed Umar Khemis - CS graduate building AI/ML systems, embedded tech, and scalable backends.",
  openGraph: {
    title: "Ahmed Umar Khemis - AI · Embedded · Backend",
    description:
      "Portfolio of Ahmed Umar Khemis - CS graduate building AI/ML systems, embedded tech, and scalable backends.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Umar Khemis - AI · Embedded · Backend",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#080c10] text-[#f0ede8] antialiased overflow-x-hidden">
        {/* Ambient orbs */}
        <div className="bg-orb bg-orb-1" aria-hidden="true" />
        <div className="bg-orb bg-orb-2" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}







































// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Ahmed Umar Khemis Portfolio",
//   description: "AI/ML, Embedded Systems, Backend, and DevOps Portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="bg-neutral-950 text-white antialiased">{children}</body>
//     </html>
//   );
// }
