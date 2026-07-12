import type { StaticImageData } from "next/image";
import aldaStudio from "../portfolio/screencapture-davideo73-sg-host-2026-02-19-00_16_20.png";
import catholicWork from "../portfolio/screencapture-make-catholic-work-new-home-2025-10-20-10_59_11.png";
import gamerInsights from "../portfolio/screencapture-gamerinsightshub-2024-03-17-00_52_19.webp";
import premiumBets from "../portfolio/screencapture-dev-premiumzam-pantheonsite-io-2023-08-25-04_30_01.png";
import protectionProgram from "../portfolio/Home Page (1).png";
import queenDoq from "../portfolio/screencapture-queendoq-2024-11-08-22_14_03 1.png";

export type PortfolioItem = {
  title: string;
  category: string;
  year: string;
  image: StaticImageData;
  description: string;
  tags: string[];
  focus: string;
  role: string;
  scope: string[];
  outcome: string;
  previewHeight: string;
  scrollDuration: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "QueenDoq",
    category: "Event Services Website",
    year: "2024",
    image: queenDoq,
    description:
      "A bold entertainment website for a wedding DJ brand with immersive visuals, service storytelling, and social proof sections.",
    tags: ["WordPress", "Event Website", "Responsive Design"],
    focus: "High-energy brand presentation for wedding and event entertainment.",
    role: "Website redesign, content layout, responsive page structure",
    scope: ["Hero experience", "Service storytelling", "Social proof", "Mobile optimization"],
    outcome: "A more immersive service page that makes the entertainment brand feel premium and action-focused.",
    previewHeight: "640px",
    scrollDuration: "10s",
  },
  {
    title: "Make.Catholic.Work",
    category: "Community Platform",
    year: "2025",
    image: catholicWork,
    description:
      "A structured freelance and mission-based marketplace experience with categories, professionals, articles, FAQs, and onboarding flows.",
    tags: ["Marketplace", "UI Systems", "Content Architecture"],
    focus: "A large platform-style homepage with trust, category discovery, and education paths.",
    role: "Homepage architecture, UI system planning, section hierarchy",
    scope: ["Category grids", "Professional cards", "Article blocks", "FAQ structure"],
    outcome: "A complete full-page experience that organizes many user paths without losing clarity.",
    previewHeight: "680px",
    scrollDuration: "14s",
  },
  {
    title: "Gamer Insights Hub",
    category: "Gaming Magazine",
    year: "2024",
    image: gamerInsights,
    description:
      "A dark editorial gaming publication layout built around featured posts, category blocks, rankings, tags, and newsletter conversion.",
    tags: ["Blog Design", "Editorial UI", "WordPress"],
    focus: "Dark magazine-style browsing for gaming news, downloads, reviews, and categories.",
    role: "Editorial layout, post hierarchy, WordPress visual system",
    scope: ["Featured grid", "Category sections", "Sidebar rankings", "Newsletter CTA"],
    outcome: "A dense content website that still gives priority to featured posts and conversion areas.",
    previewHeight: "620px",
    scrollDuration: "13s",
  },
  {
    title: "PremiumBets",
    category: "Sports Landing Page",
    year: "2023",
    image: premiumBets,
    description:
      "A cinematic sports landing page with high-impact hero content, offer sections, packages, testimonials, and FAQ modules.",
    tags: ["Landing Page", "Conversion", "Sports UI"],
    focus: "A moody sports conversion page with sharp section rhythm and repeated CTAs.",
    role: "Landing page design, visual direction, conversion sections",
    scope: ["Offer blocks", "Pricing cards", "Testimonials", "FAQ module"],
    outcome: "A focused one-page build designed to move visitors from interest to action quickly.",
    previewHeight: "640px",
    scrollDuration: "12s",
  },
  {
    title: "ALDA Studio Tecnico",
    category: "Architecture Services",
    year: "2026",
    image: aldaStudio,
    description:
      "A professional technical studio website with service grids, project cards, consultant positioning, and a refined corporate visual system.",
    tags: ["Corporate Website", "Services", "Portfolio"],
    focus: "Professional service positioning for architecture, technical consulting, and project work.",
    role: "Corporate website design, portfolio layout, service architecture",
    scope: ["Service cards", "Project showcase", "Consultant profile", "Contact hierarchy"],
    outcome: "A polished business website that balances credibility, technical services, and visual warmth.",
    previewHeight: "690px",
    scrollDuration: "15s",
  },
  {
    title: "Programma Protezione Totale",
    category: "Sales Funnel Website",
    year: "2026",
    image: protectionProgram,
    description:
      "A long-form protection program funnel with persuasion sections, trust blocks, testimonials, FAQs, and direct consultation CTAs.",
    tags: ["Sales Funnel", "Lead Generation", "Landing Page"],
    focus: "A full-funnel page built to educate, remove doubts, and push consultation bookings.",
    role: "Long-form sales page, CTA planning, trust-building sections",
    scope: ["Pain-point sections", "Guarantee blocks", "Testimonials", "FAQ and booking CTA"],
    outcome: "A persuasive landing page structure that uses repetition, proof, and clarity to support lead generation.",
    previewHeight: "700px",
    scrollDuration: "18s",
  },
];
