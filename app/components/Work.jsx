"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "SaaS Platform",
    title: "FleetOS",
    desc: "An end-to-end fleet management SaaS for a Chennai-based logistics company — real-time GPS tracking, driver analytics, and predictive maintenance. Scaled to 2,000+ vehicles.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "WebSocket", "AWS"],
    result: "3× operational efficiency",
    accent: "#C9A84C",
    size: "large",
  },
  {
    category: "Mobile App",
    title: "Nilvaa Health",
    desc: "Patient-facing mobile app for an Indian healthtech startup — appointment booking, teleconsultation, and health records. 50,000+ downloads in 6 months.",
    tags: ["React Native", "Firebase", "Node.js"],
    result: "50K+ downloads",
    accent: "#1B6CA8",
    size: "small",
  },
  {
    category: "Enterprise Web App",
    title: "GrantSphere",
    desc: "A government grant management portal enabling ministries to track, approve, and disburse funds across thousands of beneficiaries with full audit trails.",
    tags: ["React", "Java Spring", "Oracle DB"],
    result: "₹400Cr+ disbursed",
    accent: "#C9A84C",
    size: "small",
  },
  {
    category: "AI Integration",
    title: "DocuMind",
    desc: "An AI-powered document intelligence SaaS that extracts, classifies, and summarises legal and financial documents for Indian law firms and chartered accountants.",
    tags: ["Python", "LLM", "React", "FastAPI"],
    result: "80% time saved",
    accent: "#1B6CA8",
    size: "large",
  },
];

const filters = ["All", "SaaS Platform", "Mobile App", "Enterprise Web App", "AI Integration"];

export default function Work() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="work" className="relative py-32 bg-navy overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, #1B6CA8, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="section-label mb-4">Selected Work</p>
            <h2 className="section-title">
              Products We&apos;re <span className="gold-text">Proud Of</span>
            </h2>
          </div>
          <p className="text-white/40 font-body text-sm max-w-xs leading-relaxed">
            A selection of projects across industries — each one built with the same obsession for quality.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs tracking-widest uppercase font-body px-5 py-2.5 transition-all duration-300 ${active === f
                  ? "bg-gold text-navy font-semibold"
                  : "border border-white/15 text-white/50 hover:border-gold/50 hover:text-gold"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`card-dark group cursor-pointer relative overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${i * 100 + 200}ms`, transitionDuration: "700ms" }}
            >
              {/* Top color bar */}
              <div className="h-1 w-full" style={{ background: p.accent }} />

              <div className="p-8">
                {/* Category + result */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-widest uppercase font-body"
                    style={{ color: p.accent }}>
                    {p.category}
                  </span>
                  <span className="text-xs font-mono text-white/30 bg-white/5 px-3 py-1">
                    {p.result}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4 group-hover:text-gold transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-white/45 font-body text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono text-white/30 bg-white/5 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-body opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: p.accent }}>
                  <span>View Case Study</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All work CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <a href="#contact" className="btn-outline text-xs tracking-[0.15em]">
            DISCUSS YOUR PROJECT
          </a>
        </div>
      </div>
    </section>
  );
}
