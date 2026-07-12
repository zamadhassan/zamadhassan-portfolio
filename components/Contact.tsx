import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__content">
        <p className="section-kicker" data-reveal>
          06 - Contact
        </p>
        <h2 data-reveal>Have a project in mind?</h2>
        <p data-reveal>
          Send your brief on WhatsApp or email and I will help you turn it into a clean, modern, high-performing website.
        </p>
      </div>

      <div className="contact-cards" data-stagger>
        <a className="contact-card glass-panel" href={contact.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={28} aria-hidden="true" />
          <span>WhatsApp</span>
          <strong>{contact.phoneDisplay}</strong>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a className="contact-card glass-panel" href={contact.email}>
          <Mail size={28} aria-hidden="true" />
          <span>Email</span>
          <strong>{contact.emailAddress}</strong>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <div className="contact-card contact-card--static glass-panel">
          <Phone size={28} aria-hidden="true" />
          <span>Availability</span>
          <strong>Open for new website projects</strong>
        </div>
      </div>
    </section>
  );
}
