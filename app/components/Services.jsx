"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Monitor, Smartphone, Cloud, Brain, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Web Application Development",
    desc: "Custom web platforms, enterprise dashboards, and customer portals engineered for performance and scale. We work with React, Next.js, Node.js, and modern cloud infrastructure.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    highlight: false,
    slug: "web-application-development",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile App Development",
    desc: "Native and cross-platform iOS & Android applications that feel as good as they perform. From consumer apps to internal enterprise tools — built with React Native and Swift.",
    tags: ["React Native", "iOS", "Android", "Firebase"],
    highlight: false,
    slug: "mobile-app-development",
  },
  {
    icon: Cloud,
    number: "03",
    title: "SaaS Product Engineering",
    desc: "End-to-end subscription software products designed for global markets. Multi-tenancy, billing integrations, analytics — we architect SaaS that scales from Day 1.",
    tags: ["SaaS Architecture", "Multi-tenant", "Stripe", "Analytics"],
    highlight: false,
    slug: "saas-product-engineering",
  },
  {
    icon: Brain,
    number: "04",
    title: "AI & Intelligent Integrations",
    desc: "We embed intelligence into everything we build — from LLM-powered workflows and recommendation engines to computer vision and predictive analytics.",
    tags: ["LLM Integration", "OpenAI", "Python", "ML Pipelines"],
    highlight: false,
    slug: "ai-intelligent-integrations",
  },
];

export default function Services() {
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
    <section id="services" className="relative py-32 bg-page overflow-hidden" ref={ref}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-4">What We Build</p>
          <h2 className="section-title mb-6" id="services-list">
            Services Built for <span className="gold-text">Scale</span>
          </h2>
          <p className="text-muted font-body max-w-2xl mx-auto text-base leading-relaxed">
            From idea to infrastructure — we handle the full spectrum of product
            engineering so you can focus on what you do best.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link key={i} href={`/services/${s.slug}`} className="group block">
                <div
                  className={`relative p-8 md:p-10 cursor-pointer transition-all duration-700 ${s.highlight
                    ? "bg-gold/5 border border-gold/30 hover:border-gold/60"
                    : "card-dark"
                    } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 120}ms`, transitionDuration: "500ms" }}
                >
                  {/* Number */}
                  <span className="absolute top-8 right-8 font-display font-bold text-5xl text-subtle/60 group-hover:text-subtle transition-colors">
                    {s.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center mb-6 ${s.highlight ? "bg-gold/20" : "bg-white/5 group-hover:bg-gold/10"
                      } transition-colors`}
                  >
                    <Icon
                      size={22}
                      className={
                        s.highlight ? "text-gold" : "text-white/60 group-hover:text-gold transition-colors"
                      }
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-primary text-xl md:text-2xl mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-muted font-body text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono btn-outline border border-gold/15 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase font-body opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    <span>Learn More</span>
                    <ArrowUpRight size={14} />
                  </div>

                  {/* Hover glow */}
                  {s.highlight && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{ boxShadow: "inset 0 0 60px rgba(201,168,76,0.05)" }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-muted text-sm font-body mb-4">
            Not sure what you need? Let&apos;s figure it out together.
          </p>
          <a href="#contact" className="btn-outline text-xs tracking-[0.15em]">
            BOOK A FREE CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
