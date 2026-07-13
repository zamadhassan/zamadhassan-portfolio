import { ArrowUpRight } from "lucide-react";
import { contact, navigation, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta" data-reveal>
        <span>If the work makes sense for your next website</span>
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">
          let's build something
          <ArrowUpRight size={22} aria-hidden="true" />
        </a>
      </div>

      <div className="footer__grid">
        <div>
          <strong>ZAMAD HASSAN</strong>
          <p>Creative web designer and developer building clear, responsive, and premium digital experiences.</p>
        </div>
        <div>
          <span>Navigation</span>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <span>Socials</span>
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <span>Contact</span>
          <a href={contact.email}>{contact.emailAddress}</a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            {contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>2026 Zamad Hassan</span>
        <a href="/#home">Back to top</a>
      </div>
    </footer>
  );
}
