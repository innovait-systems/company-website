"use client";
import { useEffect, useRef, useState } from "react";
import { Cpu, Code, Database, Cloud } from "lucide-react";

const techStack = [
  {
    category: "Frontend & Mobile",
    icon: Code,
    items: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript", "React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Backend & APIs",
    icon: Cpu,
    items: ["Node.js", "Python", "FastAPI", "Django", "Go", "REST APIs", "GraphQL"],
  },
  {
    category: "Database & AI/ML",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Supabase", "OpenAI", "LangChain", "HuggingFace", "PyTorch"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines"],
  },
];

const standards = [
  { name: "PDF/UA-1", desc: "ISO 14289-1 Universal PDF Accessibility" },
  { name: "WCAG 2.1 AA", desc: "W3C Web Content Accessibility" },
  { name: "EPUB Accessibility 1.1", desc: "W3C / DAISY Consortium Conformance" },
  { name: "Section 508", desc: "U.S. Rehabilitation Act Compliance" },
  { name: "EPUB 3.3", desc: "W3C EPUB Specification" },
  { name: "DAISY", desc: "Digital Accessible Information System" },
  { name: "OWASP", desc: "Web Application Security Standards" },
];

export default function TechAndStandards() {
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
    <section id="tech-standards" className="relative py-32 bg-page overflow-hidden border-t border-white/5" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-4">Stack & Standards</p>
          <h2 className="section-title mb-6">
            Technology & <span className="gold-text">Standards</span>
          </h2>
          <p className="text-muted font-body max-w-2xl mx-auto text-base leading-relaxed">
            The tools we build with — and the standards we build to.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {techStack.map((stack, i) => {
            const Icon = stack.icon;
            return (
              <div
                key={stack.category}
                className={`card-dark p-6 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "500ms" }}
              >
                <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-display font-semibold text-primary text-lg mb-4">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono text-white/50 bg-white/5 px-2.5 py-1 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Standards & Accreditations Header */}
        <div className={`text-center mb-12 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-display font-bold text-primary text-2xl mb-4">
            Standards & Accreditations
          </h3>
          <p className="text-muted font-body max-w-xl mx-auto text-sm leading-relaxed">
            Our teams operate to leading international standards across publishing, accessibility, security, and digital product delivery.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {standards.map((std, i) => (
            <div
              key={std.name}
              className={`p-5 bg-surface-elevated border border-white/5 flex flex-col justify-between transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i % 4) * 80 + 400}ms`, transitionDuration: "500ms" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="font-display font-bold text-primary text-sm tracking-wider uppercase">
                  {std.name}
                </span>
              </div>
              <p className="text-subtle text-xs font-body leading-relaxed">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
