"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { contact } from "@/data/site";

type PreviewStyle = CSSProperties & {
  "--preview-height": string;
  "--scroll-duration": string;
};

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const activeProject = activeIndex === null ? null : portfolioItems[activeIndex];

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const overlay = overlayRef.current;
    const panel = panelRef.current;

    if (overlay && panel) {
      gsap.set(overlay, { autoAlpha: 0 });
      gsap.set(panel, { autoAlpha: 0, y: 48, scale: 0.96 });
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(overlay, { autoAlpha: 1, duration: 0.22 })
        .to(panel, { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 }, "-=0.08")
        .fromTo(
          Array.from(panel.querySelectorAll("[data-modal-reveal]")) as HTMLElement[],
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.06 },
          "-=0.25",
        );
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject]);

  const closeModal = () => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;

    if (!overlay || !panel) {
      setActiveIndex(null);
      return;
    }

    gsap
      .timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => setActiveIndex(null),
      })
      .to(panel, { autoAlpha: 0, y: 32, scale: 0.97, duration: 0.28 })
      .to(overlay, { autoAlpha: 0, duration: 0.2 }, "-=0.14");
  };

  return (
    <section className="portfolio section" id="work">
      <div className="section-heading section-heading--portfolio">
        <p className="section-kicker" data-reveal>
          02 - Selected Work
        </p>
        <h2 data-reveal>Full-page website captures, treated like real case-study previews.</h2>
        <p data-reveal>
          These are long homepage screenshots, so the portfolio uses vertical browser frames. Hover a project to auto-scroll the full page, or click inspect to open the complete capture.
        </p>
      </div>

      <div className="portfolio-metrics" data-stagger>
        <div className="portfolio-metric glass-panel">
          <strong>06</strong>
          <span>Website captures</span>
        </div>
        <div className="portfolio-metric glass-panel">
          <strong>Full</strong>
          <span>Page preview behavior</span>
        </div>
        <div className="portfolio-metric glass-panel">
          <strong>GSAP</strong>
          <span>Popup and reveal motion</span>
        </div>
      </div>

      <div className="portfolio-showcase">
        {portfolioItems.map((item, index) => (
          <article className="case-card glass-panel" key={item.title} data-image-reveal>
            <button
              className="case-card__preview"
              type="button"
              style={
                {
                  "--preview-height": item.previewHeight,
                  "--scroll-duration": item.scrollDuration,
                } as PreviewStyle
              }
              onClick={() => setActiveIndex(index)}
              aria-label={`Inspect ${item.title} full-page website capture`}
            >
              <span className="browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <small>{item.category}</small>
              </span>
              <span className="case-card__viewport">
                <Image
                  src={item.image}
                  alt={`${item.title} full-page website screenshot`}
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
              </span>
              <span className="case-card__hint">
                Hover to scroll
                <Maximize2 size={16} aria-hidden="true" />
              </span>
            </button>

            <div className="case-card__content">
              <div className="case-card__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.year}</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <dl className="case-card__details">
                <div>
                  <dt>Focus</dt>
                  <dd>{item.focus}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{item.role}</dd>
                </div>
              </dl>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button className="case-card__inspect" type="button" onClick={() => setActiveIndex(index)}>
                Inspect project
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio__cta glass-panel" data-reveal>
        <span>Need a website with this level of presentation?</span>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">
          Discuss your project
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      {activeProject ? (
        <div
          className="project-modal"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="project-modal__panel glass-panel" ref={panelRef}>
            <div className="project-modal__header" data-modal-reveal>
              <div>
                <span>{activeProject.category}</span>
                <h3 id="project-modal-title">{activeProject.title}</h3>
              </div>
              <button type="button" onClick={closeModal} aria-label="Close project preview">
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="project-modal__body">
              <div className="project-modal__screen" data-modal-reveal>
                <span className="browser-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <small>Full-page capture</small>
                </span>
                <div className="project-modal__scroll">
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} full-page website capture`}
                    sizes="(max-width: 900px) 100vw, 62vw"
                    priority
                  />
                </div>
              </div>

              <aside className="project-modal__info" data-modal-reveal>
                <p>{activeProject.outcome}</p>
                <dl>
                  <div>
                    <dt>Role</dt>
                    <dd>{activeProject.role}</dd>
                  </div>
                  <div>
                    <dt>Scope</dt>
                    <dd>{activeProject.scope.join(" / ")}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{activeProject.year}</dd>
                  </div>
                </dl>
                <div className="tag-list">
                  {activeProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-modal__actions">
                  <a className="button button--light" href={contact.whatsapp} target="_blank" rel="noreferrer">
                    Build something similar
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <a className="button button--ghost" href={contact.email}>
                    Email Zamad
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
