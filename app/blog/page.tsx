"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { blogPosts } from "@/app/components/Blog";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <section className="pt-32 pb-24 bg-page">
          <div className="max-w-6xl mx-auto px-6">
            <p className="section-label mb-4">Insights</p>
            <h1 className="section-title mb-6">
              From the <span className="gold-text">Innovait Lab</span>
            </h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-12">
              Longer-form breakdowns of the engineering, product, and AI decisions behind
              the products we ship. Written by the people doing the work.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-dark group cursor-pointer relative overflow-hidden transition-all duration-500"
                >
                  <div
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: p.accent }}
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-xs tracking-widest uppercase font-body font-semibold"
                        style={{ color: p.accent }}
                      >
                        {p.category}
                      </span>
                      <span className="text-white/25 text-xs font-mono">{p.date}</span>
                    </div>
                    <h2 className="font-display font-bold text-white text-lg leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                      {p.title}
                    </h2>
                    <p className="text-white/40 font-body text-sm leading-relaxed mb-5">
                      {p.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs font-body">
                      <Clock size={12} />
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

