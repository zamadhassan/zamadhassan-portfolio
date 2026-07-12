import {
  Code2,
  FilePenLine,
  LayoutDashboard,
  MonitorSmartphone,
  Paintbrush,
  ShoppingBag,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap = {
  monitor: MonitorSmartphone,
  wordpress: Paintbrush,
  layout: LayoutDashboard,
  shopping: ShoppingBag,
  code: Code2,
  pen: FilePenLine,
};

export function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-heading section-heading--wide">
        <p className="section-kicker" data-reveal>
          03 - Services
        </p>
        <h2 data-reveal>From layout to launch, I build the pieces your online presence needs.</h2>
      </div>

      <div className="services-grid" data-stagger>
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];

          return (
            <article className="service-card glass-panel" key={service.title}>
              <div className="service-card__top">
                <span>{service.number}</span>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
