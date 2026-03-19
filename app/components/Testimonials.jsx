"use client";
import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Innovait didn't just build our platform — they thought through every edge case before we even raised it. The FleetOS dashboard has become the nerve centre of our entire logistics operation.",
    name: "Ramesh Krishnamurthy",
    title: "CEO, SwiftMove Logistics",
    location: "Chennai, India",
    initials: "RK",
    accent: "#C9A84C",
  },
  {
    quote:
      "The Nilvaa app went from wireframe to 50,000 downloads in under a year. Innovait's mobile team has an instinct for UX that you simply don't find in most agencies — they think like product owners.",
    name: "Dr. Priya Anandhan",
    title: "Founder, Nilvaa Health",
    location: "Bengaluru, India",
    initials: "PA",
    accent: "#1B6CA8",
  },
  {
    quote:
      "We needed a partner who understood enterprise compliance and could still move fast. Innovait delivered GrantSphere on time, on budget, and with zero security incidents post-launch.",
    name: "Santhosh Meenakshisundaram",
    title: "Director of Digital, Tamil Nadu Government Initiative",
    location: "Chennai, India",
    initials: "SM",
    accent: "#C9A84C",
  },
  {
    quote:
      "DocuMind has transformed how our senior partners review contracts. What used to take 4 hours now takes 20 minutes. The AI accuracy is genuinely impressive — well above what we expected.",
    name: "Lakshmi Venkatesan",
    title: "Managing Partner, VLK & Associates (Law Firm)",
    location: "Coimbatore, India",
    initials: "LV",
    accent: "#1B6CA8",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section className="relative py-32 bg-page overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="section-title">
            Trusted by <span className="gold-text">Builders</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative p-10 md:p-14 bg-surface-elevated border border-subtle">
            {/* Quote icon */}
            <Quote size={48} className="text-gold/20 mb-8" />

            {/* Quote text */}
            <blockquote
              key={active}
              className="font-display text-white text-xl md:text-2xl leading-relaxed mb-10 italic"
              style={{ animation: "fadeIn 0.5s ease" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-navy text-sm"
                style={{ background: t.accent }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-white font-semibold font-body text-sm">{t.name}</div>
                <div className="text-white/45 text-xs font-body mt-0.5">{t.title}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: t.accent + "99" }}>
                  {t.location}
                </div>
              </div>
            </div>

            {/* Accent border */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: `linear-gradient(to bottom, ${t.accent}, transparent)` }}
            />
          </div>
        </div>

        {/* Selector dots + mini cards */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          {testimonials.map((tm, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`btn-outline flex items-center gap-3 px-5 py-3 border transition-all duration-300 text-left ${active === i
                ? "border-gold/50 bg-gold/5"
                : "hover:border-white/20"
                }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-navy text-xs shrink-0"
                style={{ background: active === i ? tm.accent : "#ffffff22", color: active === i ? "#0A1628" : "#fff" }}
              >
                {tm.initials}
              </div>
              <div className="hidden sm:block">
                <div className={`text-xs font-body font-semibold ${active === i ? "text-white" : "text-white/40"}`}>
                  {tm.name}
                </div>
                <div className="text-xs text-white/25 font-body">{tm.title.split(",")[0]}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
