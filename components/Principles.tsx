import { principles } from "@/data/skills";

export function Principles() {
  return (
    <section className="principles section section--split">
      <div>
        <p className="section-kicker" data-reveal>
          04 - Principles
        </p>
        <h2 data-reveal>Good websites are not decoration. They are structure, clarity, and intent.</h2>
      </div>
      <div className="principles-list" data-stagger>
        {principles.map((item) => (
          <article className="principle-item" key={item.title}>
            <span>({item.number})</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
