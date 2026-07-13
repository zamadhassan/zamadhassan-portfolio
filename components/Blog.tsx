import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="section-heading section-heading--wide">
        <p className="section-kicker" data-reveal>
          06 - Blog
        </p>
        <h2 data-reveal>Notes on websites, design decisions, and building better online experiences.</h2>
      </div>

      <div className="blog-grid" data-stagger>
        {blogPosts.map((post, index) => (
          <article className="blog-card glass-panel" key={post.slug}>
            <div className="blog-card__meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{post.category}</span>
            </div>
            <div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <div className="blog-card__footer">
              <span>{post.readTime}</span>
              <Link href={`/blog/${post.slug}`}>
                Read article
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
