"use client";
import { useEffect, useRef, useState } from "react";
import { Zap, Globe, Shield, Award } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Intelligence-First",
    desc: "AI built in, not bolted on. We weave intelligent automation directly into the foundation of our workflows.",
  },
  {
    icon: Shield,
    title: "Standards-First",
    desc: "Quality, compliance, and craft on every project — from PDF/UA and WCAG accessibility to secure OWASP code.",
  },
  {
    icon: Award,
    title: "Partnership",
    desc: "Long-term relationships, not one-off engagements. We scale and iterate alongside your evolving pipeline.",
  },
  {
    icon: Globe,
    title: "Full Pipeline",
    desc: "One team, zero handoffs, end-to-end ownership. We manage the entire lifecycle from intake to delivery.",
  },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 bg-page overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, #C9A84C, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — text */}
          <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDuration: "800ms" }}>
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="section-title mb-8">
              One Partner. Two Powerhouses.<br />
              <span className="gold-text">Endless Possibilities.</span>
            </h2>
            <div className="space-y-5 text-muted font-body leading-relaxed">
              <p className="text-base md:text-lg">
                Innovait Systems is a Chennai-born, globally-minded technology company delivering end-to-end publishing services and cutting-edge digital product engineering.
              </p>
              <p className="text-base md:text-lg">
                Formally incorporated in 2026, our expert teams combine 12+ years of craft with intelligent automation — serving publishers, enterprises, startups, and government organisations worldwide.
              </p>
              <p className="text-base md:text-lg">
                By bringing typesetting, digital format accessibility, and custom web/mobile/SaaS software development under one roof, we eliminate handoff friction and deliver industry-leading compliance out of the box.
              </p>
            </div>

            {/* Horizontal rule + quote */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <blockquote className="font-display text-xl text-white/80 italic leading-relaxed">
                &ldquo;We exist to make powerful technology accessible — so every publisher, business, and product team can build things that matter.&rdquo;
              </blockquote>
              <p className="text-gold text-xs tracking-widest uppercase mt-3 font-body">
                — Innovait Core Mission
              </p>
            </div>
          </div>

          {/* Right — value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className={`card-dark p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${i * 120 + 200}ms`, transitionDuration: "500ms" }}
                >
                  <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-primary text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted text-sm font-body leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
