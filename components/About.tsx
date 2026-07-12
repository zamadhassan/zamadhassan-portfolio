import { stats } from "@/data/site";

export function About() {
  return (
    <section className="about section section--split" id="about">
      <div>
        <p className="section-kicker" data-reveal>
          01 - About
        </p>
        <h2 data-reveal>Design and development with one clear point of view.</h2>
      </div>
      <div className="about__body">
        <p data-reveal>
          I help businesses turn ideas into digital experiences that feel premium, simple, and easy to use. My work covers UI/UX design, WordPress, Elementor, Shopify, Wix, frontend development, and website redesigns.
        </p>
        <p data-reveal>
          The goal is not just to make a page look good. The goal is to create a website that is responsive, clear, fast, and built around the action your visitor needs to take next.
        </p>
        <div className="stats-grid" data-stagger>
          {stats.map((item) => (
            <div className="stat-card glass-panel" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
