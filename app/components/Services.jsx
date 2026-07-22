"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Cloud,
  Brain,
  ArrowUpRight,
  BookOpen,
  Layers,
  RefreshCw,
  FileText,
  Accessibility,
  Code,
  Shield,
  Search,
} from "lucide-react";

const publishingServices = [
  {
    icon: BookOpen,
    number: "01",
    title: "Typesetting & Page Makeup",
    desc: "InDesign book typesetting for STM, academic, trade & educational titles. Multi-language, RTL, and complex scientific content.",
    tags: ["InDesign", "STM/Academic", "Multilingual", "RTL support"],
  },
  {
    icon: Layers,
    number: "02",
    title: "Fixed-Layout EPUB Production",
    desc: "Pixel-perfect EPUB 3 FXL for children's books, cookbooks, art books, graphic novels, and illustrated titles.",
    tags: ["EPUB 3 FXL", "Art Books", "Graphic Novels", "Children's books"],
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Format Conversion",
    desc: "PDF→EPUB, Word/InDesign→XML (JATS, BITS, TEI), reflowable EPUB 3, KFX/Kindle, HTML5, and automated pipelines.",
    tags: ["PDF to EPUB", "XML (JATS/BITS)", "Kindle/KFX", "Automated Pipelines"],
  },
  {
    icon: FileText,
    number: "04",
    title: "PDF Accessibility (PDF/UA · WCAG)",
    desc: "Full structure tagging, alt text, reading-order, form accessibility — verified with PAC 3 and AT testing.",
    tags: ["PDF/UA", "WCAG 2.1", "PAC 3 verification", "AT Testing"],
  },
  {
    icon: BookOpen,
    number: "05",
    title: "Reflowable eBook Production",
    desc: "Semantic EPUB 3 with metadata, navigation, accessibility markup for Amazon, Apple Books, Kobo, and open platforms.",
    tags: ["EPUB 3", "Reflowable", "Metadata", "A11y Markup"],
  },
  {
    icon: Accessibility,
    number: "06",
    title: "EPUB Accessibility (EPUB A11y 1.1)",
    desc: "W3C/DAISY conformance, MathML for STEM, and Section 508 compliance with VPAT.",
    tags: ["EPUB A11y 1.1", "W3C/DAISY", "MathML", "Section 508 / VPAT"],
  },
  {
    icon: Code,
    number: "07",
    title: "XML/HTML Structured Authoring",
    desc: "Structured XML/HTML output (JATS, BITS, TEI, DITA) from editorial source files for downstream multi-channel distribution.",
    tags: ["JATS / BITS", "TEI / DITA", "Structured XML", "HTML5 Output"],
  },
  {
    icon: Search,
    number: "08",
    title: "Content Quality Audit",
    desc: "Comprehensive quality assurance, validation checks, compliance statements, preflight reports, and QA checklists on every project.",
    tags: ["QA checklists", "Preflight reports", "Validation", "Compliance"],
  },
];

const productServices = [
  {
    icon: Monitor,
    number: "01",
    title: "Web & Mobile App Development",
    desc: "React, Next.js, Flutter, Swift/Kotlin — full-stack apps, PWAs, and cross-platform mobile from prototype to production.",
    tags: ["React/Next.js", "Flutter", "Swift/Kotlin", "PWAs"],
    slug: "web-application-development",
  },
  {
    icon: Cloud,
    number: "02",
    title: "SaaS Product Engineering",
    desc: "Multi-tenant platforms, subscription billing (Stripe/Paddle), SSO, analytics dashboards, and product-led growth tooling.",
    tags: ["Multi-tenant", "SSO", "Stripe", "Analytics"],
    slug: "saas-product-engineering",
  },
  {
    icon: Brain,
    number: "03",
    title: "AI & Machine Learning Integration",
    desc: "LLMs (OpenAI, Anthropic, Gemini), RAG systems, AI workflow automation, ML model training, and MLOps pipelines.",
    tags: ["LLMs", "RAG Systems", "AI Workflows", "MLOps"],
    slug: "ai-intelligent-integrations",
  },
  {
    icon: Server,
    number: "04",
    title: "API & Cloud Infrastructure",
    desc: "REST/GraphQL APIs, AWS/GCP/Azure DevOps, Docker/Kubernetes, CI/CD pipelines, and auto-scaling infrastructure.",
    tags: ["APIs", "AWS/GCP/Azure", "Docker/K8s", "Terraform"],
  },
  {
    icon: Shield,
    number: "05",
    title: "Security & Compliance Engineering",
    desc: "OWASP-compliant code, penetration testing support, and GDPR/CCPA data flows.",
    tags: ["OWASP", "GDPR/CCPA", "PenTesting"],
  },
  {
    icon: Monitor,
    number: "06",
    title: "UI/UX Design & Observability",
    desc: "Figma design systems, user research, Datadog/Grafana monitoring, SLO tracking, and post-launch iteration.",
    tags: ["Figma Systems", "User Research", "Datadog/Grafana", "SLO Tracking"],
  },
];

// Helper to render lucide icon dynamically
function Server({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export default function Services() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeDivision, setActiveDivision] = useState("product"); // "publishing" or "product"

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const services = activeDivision === "publishing" ? publishingServices : productServices;

  return (
    <section id="services" className="relative py-32 bg-page overflow-hidden" ref={ref}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-4">Our Service Divisions</p>
          <h2 className="section-title mb-6" id="services-list">
            Two Service Divisions. <span className="gold-text">One Trusted Partner.</span>
          </h2>
          <p className="text-muted font-body max-w-2xl mx-auto text-base leading-relaxed">
            From manuscript to market-ready output and from idea to intelligent, scalable software — we deliver end-to-end craft.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className={`flex justify-center gap-4 mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={() => setActiveDivision("publishing")}
            className={`btn-outline px-6 py-3 text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 ${
              activeDivision === "publishing"
                ? "bg-gold text-navy font-semibold border-gold"
                : "hover:border-gold/50 hover:text-gold text-white"
            }`}
          >
            Publishing Services
          </button>
          <button
            onClick={() => setActiveDivision("product")}
            className={`btn-outline px-6 py-3 text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 ${
              activeDivision === "product"
                ? "bg-gold text-navy font-semibold border-gold"
                : "hover:border-gold/50 hover:text-gold text-white"
            }`}
          >
            Product & Technology
          </button>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const cardContent = (
              <div
                className={`relative p-8 h-full bg-surface border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] cursor-pointer transition-all duration-500 flex flex-col justify-between`}
              >
                <div>
                  {/* Number */}
                  <span className="absolute top-6 right-6 font-display font-bold text-4xl text-white/5">
                    {s.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-6 bg-white/5 text-white/60 group-hover:text-gold transition-colors">
                    <Icon size={22} className="text-white/60 group-hover:text-gold transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-primary text-lg md:text-xl mb-3 leading-tight group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted font-body text-xs md:text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono border border-white/10 px-2 py-0.5 text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link CTA only if slug exists */}
                  {s.slug && (
                    <div className="flex items-center gap-1.5 text-gold text-[10px] tracking-widest uppercase font-body opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                      <span>Learn More</span>
                      <ArrowUpRight size={12} />
                    </div>
                  )}
                </div>
              </div>
            );

            return s.slug ? (
              <Link key={i} href={`/services/${s.slug}`} className="group block h-full">
                {cardContent}
              </Link>
            ) : (
              <div key={i} className="group block h-full">
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-muted text-sm font-body mb-4">
            Not sure which division or service aligns with your needs? Let&apos;s talk.
          </p>
          <a href="#contact" className="btn-outline text-xs tracking-[0.15em]">
            BOOK A FREE CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}

