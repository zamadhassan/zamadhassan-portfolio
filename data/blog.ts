export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-makes-a-modern-website-work",
    title: "What makes a modern website actually work?",
    excerpt:
      "A practical breakdown of the design, structure, and performance decisions behind websites that feel premium and convert clearly.",
    category: "Web Design",
    date: "2026-01-18",
    readTime: "4 min read",
    intro:
      "A modern website is not just a clean layout. It needs a strong first impression, simple navigation, fast loading, responsive spacing, and a clear reason for visitors to take action.",
    sections: [
      {
        heading: "Start with a clear message",
        body:
          "Visitors should understand what you do, who you help, and what action they should take within the first few seconds. Strong copy and visual hierarchy make the design easier to scan.",
      },
      {
        heading: "Design for mobile first behavior",
        body:
          "Most users will judge the website on a smaller screen. Responsive layouts, comfortable spacing, readable type, and thumb-friendly buttons matter as much as the desktop design.",
      },
      {
        heading: "Keep performance part of the design",
        body:
          "Heavy visuals, unnecessary scripts, and unclear structure can make a premium design feel slow. A good build balances motion, imagery, and speed so the experience stays sharp.",
      },
    ],
  },
  {
    slug: "wordpress-vs-custom-website",
    title: "WordPress or custom website: which one should you choose?",
    excerpt:
      "How to decide between a flexible WordPress build and a custom-coded website based on budget, content needs, and long-term control.",
    category: "Development",
    date: "2026-01-10",
    readTime: "5 min read",
    intro:
      "Both WordPress and custom development can create strong websites. The right choice depends on how often the content changes, how much control the team needs, and how unique the experience should be.",
    sections: [
      {
        heading: "Choose WordPress for easy content control",
        body:
          "WordPress is a strong option for service websites, blogs, landing pages, and businesses that want to update content without touching code. Elementor can speed up layout changes while keeping the site manageable.",
      },
      {
        heading: "Choose custom when experience matters more",
        body:
          "A custom website is better when performance, interaction, branding, and layout behavior need more precision. It gives more control over the final experience and removes unnecessary plugin weight.",
      },
      {
        heading: "Make the decision around maintenance",
        body:
          "The best platform is the one the business can maintain. A website should not become difficult to update after launch, so the build should match the client workflow.",
      },
    ],
  },
  {
    slug: "how-to-plan-a-high-converting-landing-page",
    title: "How to plan a high-converting landing page",
    excerpt:
      "A simple landing page structure for turning attention into action without overloading visitors with unnecessary sections.",
    category: "Strategy",
    date: "2026-01-04",
    readTime: "3 min read",
    intro:
      "A landing page should guide one decision. Every section needs to reduce confusion, answer objections, and move the visitor closer to the main call to action.",
    sections: [
      {
        heading: "Lead with the outcome",
        body:
          "The hero section should focus on the result the visitor wants. A strong headline, short supporting copy, and clear call to action create direction immediately.",
      },
      {
        heading: "Build trust before asking for action",
        body:
          "Use proof, testimonials, project examples, or process details to show that the offer is credible. Trust blocks are most effective when they support a specific claim.",
      },
      {
        heading: "Remove anything that does not support the goal",
        body:
          "Landing pages work best when the path is focused. Extra links, vague sections, and repeated ideas can weaken the decision flow and reduce conversions.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
