import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { contact } from "@/data/site";

function splitWords(text: string) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="split-word">
      {word}{" "}
    </span>
  ));
}

export function Hero() {
  const previewItems = portfolioItems.slice(0, 3);

  return (
    <section className="hero section" id="home">
      <div className="hero__content">
        <p className="section-kicker" data-reveal>
          Independent Web Designer & Developer
        </p>
        <h1 data-split>
          {splitWords("Building websites that look sharp, load fast, and help brands win online.")}
        </h1>
        <div className="hero__copy" data-reveal>
          <p>
            Hi, I am Zamad. I create modern, high-performance websites that combine clean design with smart functionality for brands, businesses, and creators.
          </p>
          <div className="hero__actions">
            <a className="button button--light" href={contact.whatsapp} target="_blank" rel="noreferrer">
              Start a Project
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#work">
              View Work
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__visual glass-panel" data-image-reveal>
        <div className="hero__visual-header">
          <span>Selected builds</span>
          <span>2023 - 2026</span>
        </div>
        <div className="hero__stack">
          {previewItems.map((item, index) => (
            <figure key={item.title} className={`hero__preview hero__preview--${index + 1}`}>
              <Image src={item.image} alt={`${item.title} website preview`} priority={index === 0} />
              <figcaption>
                <span>{item.title}</span>
                <small>{item.category}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <span>WordPress Developer</span>
        <span>UI/UX Designer</span>
        <span>Frontend Builder</span>
        <span>Creative Thinker</span>
        <span>WordPress Developer</span>
        <span>UI/UX Designer</span>
        <span>Frontend Builder</span>
        <span>Creative Thinker</span>
      </div>
    </section>
  );
}
