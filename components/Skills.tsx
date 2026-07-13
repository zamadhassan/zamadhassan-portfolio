import { skills } from "@/data/skills";
import {
  SiCss3,
  SiElementor,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiShopify,
  SiWix,
  SiWordpress,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

const skillIcons = {
  WordPress: SiWordpress,
  Elementor: SiElementor,
  Wix: SiWix,
  Shopify: SiShopify,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  Figma: SiFigma,
  Photoshop: DiPhotoshop,
};

export function Skills() {
  return (
    <section className="skills section">
      <div className="section-heading">
        <p className="section-kicker" data-reveal>
          05 - Skills
        </p>
        <h2 data-reveal>Tools and platforms I use to design, build, and refine digital experiences.</h2>
      </div>

      <div className="skills-marquee" data-reveal>
        <div className="skills-marquee__track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills-grid" data-stagger>
        {skills.map((skill) => {
          const Icon = skillIcons[skill as keyof typeof skillIcons];

          return (
            <span className="skill-pill glass-panel" key={skill}>
              <Icon size={20} aria-hidden="true" />
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}
