import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zamad Hassan — Web Designer & Developer",
    template: "%s — Zamad Hassan",
  },
  description:
    "Zamad Hassan is a creative web designer and developer building modern websites, UI/UX interfaces, WordPress, Shopify, and responsive digital experiences for brands and businesses.",
  keywords: [
    "Zamad Hassan",
    "web designer",
    "web developer",
    "WordPress developer",
    "UI UX designer",
    "frontend developer",
    "website design",
    "portfolio",
    "Elementor",
    "Shopify developer",
  ],
  authors: [{ name: "Zamad Hassan", url: "https://zamadhassan.tech" }],
  metadataBase: new URL("https://zamadhassan.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zamad Hassan — Web Designer & Developer",
    description:
      "Portfolio showcasing modern website design, WordPress builds, UI/UX projects, and frontend development.",
    url: "https://zamadhassan.tech",
    siteName: "Zamad Hassan Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zamad Hassan — Web Designer & Developer",
    description:
      "Portfolio showcasing modern website design, WordPress builds, UI/UX projects, and frontend development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zamad Hassan",
    url: "https://zamadhassan.tech",
    jobTitle: "Web Designer & Developer",
    email: "zamadhassan@yahoo.com",
    telephone: "+923427197370",
    sameAs: [
      "https://www.facebook.com/zamad.hassan51",
      "https://www.linkedin.com/in/zamad-hassan/",
      "https://www.upwork.com/freelancers/~01400ee474af10f569",
    ],
    knowsAbout: [
      "WordPress",
      "Elementor",
      "Web Design",
      "UI/UX Design",
      "Shopify",
      "Wix",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Figma",
      "Photoshop",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
