"use client";
import { useEffect, useRef, useState } from "react";
import { Zap, Globe, Shield, Award } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Intelligence First",
    desc: "Every product we build carries AI-driven thinking at its core — not as a feature, but as a foundation.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Built in India, engineered for the world. Our products meet enterprise-grade standards across every market.",
  },
  {
    icon: Shield,
    title: "Precision Crafted",
    desc: "No shortcuts, no half-measures. We sweat the details so your users never have to.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    desc: "We don't just deliver and disappear. We grow with your business, iterating and improving long-term.",
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
    <section id="about" className="relative py-32 bg-navy overflow-hidden" ref={ref}>
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
              A Technology Company<br />
              <span className="gold-text">Born to Build.</span>
            </h2>
            <div className="space-y-5 text-white/55 font-body leading-relaxed">
              <p className="text-base md:text-lg">
                Innovait is a Chennai-born, globally-minded technology company. We
                partner with startups, scaleups, and enterprises to build the digital
                products that define their next chapter.
              </p>
              <p className="text-base">
                The name says everything. Innovate — reimagined. The{" "}
                <span className="text-gold font-semibold">AI</span> at the heart of
                our name isn&apos;t a buzzword. It&apos;s a declaration: every solution
                we craft is intelligent by design, precise in execution, and built to
                last.
              </p>
              <p className="text-base">
                From your first MVP to your thousandth enterprise user — we are the
                team that builds with you, not just for you.
              </p>
            </div>

            {/* Horizontal rule + quote */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <blockquote className="font-display text-xl text-white/80 italic leading-relaxed">
                &ldquo;Technology should feel intelligent, not complicated.&rdquo;
              </blockquote>
              <p className="text-gold text-xs tracking-widest uppercase mt-3 font-body">
                — Innovait Founding Principle
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
                  className={`card-dark gradient-border p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${i * 120 + 200}ms`, transitionDuration: "700ms" }}
                >
                  <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-white/45 text-sm font-body leading-relaxed">
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
