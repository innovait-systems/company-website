"use client";
import { useEffect, useRef, useState } from "react";
import { Zap, Globe, Shield, Award } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "We automate the routine",
    desc: "We build automation and AI into how the work runs, so the repetitive steps are handled before anyone touches them.",
  },
  {
    icon: Shield,
    title: "We build to a standard",
    desc: "Every project ships against a real standard — PDF/UA and WCAG for accessibility, OWASP for code — and we verify it before it goes out.",
  },
  {
    icon: Award,
    title: "We stick around",
    desc: "We work with clients over years, scaling and iterating alongside them as their pipeline grows.",
  },
  {
    icon: Globe,
    title: "One team, start to finish",
    desc: "The same team owns a project from intake to delivery, so nothing gets lost in a handoff.",
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
              Publishing and software,<br />
              <span className="gold-text">under one roof.</span>
            </h2>
            <div className="space-y-5 text-muted font-body leading-relaxed">
              <p className="text-base md:text-lg">
                Innovait Systems is a Chennai team with two things we do well: publishing production and custom software.
              </p>
              <p className="text-base md:text-lg">
                Incorporated in 2026, the team brings 12+ years of experience across both, working with publishers, enterprises, and government organisations.
              </p>
              <p className="text-base md:text-lg">
                Because typesetting, accessibility, and web, mobile and SaaS work all sit in one team, projects move between them without a handoff — and accessibility is part of the work from day one.
              </p>
            </div>

            {/* Horizontal rule + quote */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <blockquote className="font-display text-xl text-white/80 italic leading-relaxed">
                &ldquo;Technology should be usable by everyone it reaches. That is the standard we build to.&rdquo;
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
