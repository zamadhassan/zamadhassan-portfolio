import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/MotionProvider";
import { blogPosts, getBlogPost } from "@/data/blog";
import { contact } from "@/data/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <MotionProvider />
      <BackgroundBoxes />
      <Header />
      <main>
        <article className="blog-post section">
          <Link className="blog-post__back" href="/#blog" data-reveal>
            <ArrowLeft size={18} aria-hidden="true" />
            Back to blog
          </Link>

          <header className="blog-post__header">
            <p className="section-kicker" data-reveal>
              {post.category} / {post.readTime}
            </p>
            <h1 data-reveal>{post.title}</h1>
            <p data-reveal>{post.intro}</p>
          </header>

          <div className="blog-post__body" data-stagger>
            {post.sections.map((section) => (
              <section className="blog-post__section glass-panel" key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <div className="blog-post__cta glass-panel" data-reveal>
            <span>Need a website planned with this level of clarity?</span>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              Discuss your project
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
