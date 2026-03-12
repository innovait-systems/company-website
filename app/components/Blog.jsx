"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Engineering",
    title: "How We Built a Real-Time Fleet Tracking System for 2,000 Vehicles",
    excerpt:
      "A deep dive into the WebSocket architecture, geospatial indexing, and the tradeoffs we made to deliver sub-second location updates at scale — without breaking the bank.",
    readTime: "8 min read",
    date: "Feb 2025",
    accent: "#C9A84C",
  },
  {
    category: "Product",
    title: "Why Your SaaS Needs a Multi-Tenancy Strategy Before Your First Enterprise Customer",
    excerpt:
      "Most startups add multi-tenancy after they win their first big client. By then, it's a painful retrofit. Here's how we architect for it from Day 1 — and why it matters.",
    readTime: "6 min read",
    date: "Jan 2025",
    accent: "#1B6CA8",
  },
  {
    category: "AI & Tech",
    title: "LLMs in the Enterprise: What Actually Works, What Doesn't, and What's Overhyped",
    excerpt:
      "After integrating LLMs into three production enterprise products in 2024, we share the honest lessons — including the use cases we tried and quietly deprecated.",
    readTime: "10 min read",
    date: "Dec 2024",
    accent: "#C9A84C",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" className="relative py-32 bg-navy overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-1/3 h-2/3 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, #C9A84C, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="section-label mb-4">Insights</p>
            <h2 className="section-title">
              From the <span className="gold-text">Innovait Lab</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase font-body hover:gap-3 transition-all"
          >
            All Articles <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article
              key={i}
              className={`card-dark group cursor-pointer relative overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${i * 130}ms`, transitionDuration: "700ms" }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: p.accent }} />

              <div className="p-8">
                {/* Category + date */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-widest uppercase font-body font-semibold"
                    style={{ color: p.accent }}>
                    {p.category}
                  </span>
                  <span className="text-white/25 text-xs font-mono">{p.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-lg leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/40 font-body text-sm leading-relaxed mb-6">
                  {p.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-white/30 text-xs font-body">
                    <Clock size={12} />
                    <span>{p.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-body opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: p.accent }}>
                    Read <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
