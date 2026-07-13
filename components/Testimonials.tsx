import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="section-heading section-heading--wide">
        <p className="section-kicker" data-reveal>
          06 - Testimonials
        </p>
        <h2 data-reveal>Client feedback built around clarity, reliability, and clean execution.</h2>
      </div>

      <div className="testimonials-grid" data-stagger>
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-card glass-panel" key={testimonial.name}>
            <div className="testimonial-card__top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Quote size={24} aria-hidden="true" />
            </div>
            <blockquote>{testimonial.quote}</blockquote>
            <div className="testimonial-card__footer">
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
              <em>{testimonial.metric}</em>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
