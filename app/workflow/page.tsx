"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, X, FileText, Split, Image as ImageIcon, Cpu, Eye, MonitorPlay, Layers, BookOpen, Code } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import workflowGif from "@/app/assets/images/fxl_v2.gif";

// Workflows Data
const workflows = {
  "fixed-layout": {
    title: "Fixed Layout EPUB Conversion from PDF",
    desc: "Convert Print-Ready PDFs into High-Quality Interactive Fixed Layout EPUBs. Our proprietary PDF-first conversion workflow eliminates source file dependencies and manual layout recreation.",
    steps: [
      {
        id: "preparation",
        num: "01",
        title: "Source PDF Preparation",
        icon: FileText,
        desc: "Every project begins with an automated analysis of the supplied PDF to prepare it for accurate Fixed Layout conversion.",
        details: [
          "Automatic detection and removal of crop marks",
          "Cropping pages to the final trim size",
          "Splitting spread pages into individual pages while maintaining precise dimensions",
          "Creating EPUB bookmarks (Table of Contents)",
          "Applying page labels",
          "Preserving and generating internal hyperlinks"
        ],
      },
      {
        id: "separation",
        num: "02",
        title: "Intelligent PDF Separation",
        icon: Split,
        desc: "Unlike conventional workflows, we separate the source PDF into two optimized versions to extract content perfectly.",
        subsections: [
          {
            title: "Image-only PDF",
            content: "The visual layer is extracted by removing all text while preserving high-resolution graphics and page backgrounds. This version is used to generate page-perfect image assets that comply with Apple Books and other Fixed Layout EPUB requirements."
          },
          {
            title: "Text-only PDF",
            content: "A second version retains only the text content. This allows our system to extract embedded fonts, font characteristics, text colors, character positioning, coordinates, and exact reading order directly from the PDF."
          }
        ]
      },
      {
        id: "optimization",
        num: "03",
        title: "Image Optimization",
        icon: ImageIcon,
        desc: "Our image extraction engine identifies and exports each page image at the optimal resolution while aligning with platform specifications.",
        details: [
          "High visual fidelity matching the original print quality",
          "Optimized file sizes to reduce publication download times",
          "Accurate page dimensions matching the original layout aspect ratio",
          "Device compatibility validated across major EPUB readers"
        ],
      },
      {
        id: "generation",
        num: "04",
        title: "Automated Fixed Layout Generation",
        icon: Cpu,
        desc: "The processed assets—including page images, extracted fonts, text coordinates, colours, and structural information—are combined by our conversion engine to generate a production-ready Fixed Layout EPUB.",
        details: [
          "Recreates the original page layout with precise positioning of every text element",
          "Preserves typographic styles, font properties, and text flow",
          "Retains the exact appearance and layout of the printed publication"
        ],
      },
      {
        id: "review",
        num: "05",
        title: "Interactive Quality Review",
        icon: Eye,
        desc: "Instead of relying on repeated manual editing, our conversion platform provides an interactive visual review environment for high efficiency.",
        details: [
          "Review each page visually in side-by-side mode",
          "Fine-tune text positioning and spacing dynamically",
          "Adjust layout elements and responsive adjustments where necessary",
          "Validate hyperlinks, navigation, and bookmarks",
          "Verify font rendering and page alignment before final export"
        ],
      },
      {
        id: "validation",
        num: "06",
        title: "Device Validation",
        icon: MonitorPlay,
        desc: "Before delivery, every EPUB undergoes rigorous device validation to ensure a consistent reading experience across supported platforms.",
        details: [
          "Page rendering accuracy and layout consistency",
          "Navigation panel, bookmarks, and Table of Contents checks",
          "Hyperlink functionality and media integration validation",
          "Typography and color consistency across e-readers",
          "Overall visual fidelity checks for Apple Books, Kobo, and Google Play"
        ],
      }
    ]
  },
  "reflowable": {
    title: "Reflowable eBook Production",
    desc: "Standard semantic EPUB 3 workflow for trade, novels, and text-heavy books. Adapts layout dynamically to any screen size and user font preference.",
    steps: [
      {
        id: "reflow-prep",
        num: "01",
        title: "Manuscript Preprocessing",
        icon: FileText,
        desc: "Cleaning up source manuscript files (Word, PDF, or InDesign) to extract clean raw text, styles, and structural hierarchy.",
        details: [
          "Removing redundant styling and absolute layout formatting",
          "Normalizing headings, paragraphs, and list hierarchies",
          "Extracting images, tables, and sidebars into dedicated asset directories",
          "Mapping local styles to CSS stylesheets"
        ]
      },
      {
        id: "reflow-structure",
        num: "02",
        title: "Semantic HTML5 Structuring",
        icon: Split,
        desc: "Converting clean text into standards-compliant semantic HTML5 documents, embedding accessible markup.",
        details: [
          "Building proper EPUB navigation documents (NCX and XHTML Nav)",
          "Applying standard accessibility attributes (ARIA roles)",
          "Ensuring correct reading order and logical content flow",
          "Coding tables and mathematics using responsive structures"
        ]
      },
      {
        id: "reflow-styling",
        num: "03",
        title: "Adaptive CSS Styling",
        icon: Layers,
        desc: "Designing responsive CSS layouts that adjust beautifully on Kindle, Apple Books, Kobo, and standard mobile/tablet devices.",
        details: [
          "Enabling user-font overrides while preserving typography hierarchy",
          "Designing adaptive margins, line heights, and paragraph spacing",
          "Styling clean chapter starters, drop-caps, and page breaks",
          "Testing media query support for dark mode and sepia backgrounds"
        ]
      },
      {
        id: "reflow-qa",
        num: "04",
        title: "eBook Validation & Delivery",
        icon: MonitorPlay,
        desc: "Running formal quality audits, EPUBCheck validation, and device rendering tests prior to final distribution.",
        details: [
          "Ensuring 100% compliance with W3C EPUBCheck standards",
          "Testing rendering across Kindle Previewer, Apple Books, and Adobe Digital Editions",
          "Embedding correct metadata, ISBNs, and distribution identifiers",
          "Generating preflight quality reports"
        ]
      }
    ]
  },
  "xml-authoring": {
    title: "XML/HTML Structured Authoring",
    desc: "Transforming raw editorial manuscripts into structured, multi-channel distribution XML (JATS, BITS, TEI, DITA) formats.",
    steps: [
      {
        id: "xml-parsing",
        num: "01",
        title: "Content Analysis & Parsing",
        icon: FileText,
        desc: "Analyzing source editorial documents to isolate metadata, articles, references, and nested structural elements.",
        details: [
          "Automated structural parsing of Word and PDF inputs",
          "Extracting author lists, affiliations, abstracts, and key metadata",
          "Isolating bibliography and citation links for cross-referencing",
          "Validating formula and table boundaries"
        ]
      },
      {
        id: "xml-mapping",
        num: "02",
        title: "DTD Schema Mapping",
        icon: Split,
        desc: "Mapping parsed metadata and content blocks into standard Document Type Definition (DTD) schemas (e.g. JATS or BITS).",
        details: [
          "Configuring XML tag mappings to target DTD specs",
          "Configuring cross-reference links for figures, tables, and equations",
          "Formatting inline citations and bibliography listings using standard tag schemas",
          "Structuring multi-lingual text sections"
        ]
      },
      {
        id: "xml-transformation",
        num: "03",
        title: "Automated XML Generation",
        icon: Cpu,
        desc: "Running transformation pipelines to compile structured XML and generate standard XHTML outputs for multi-channel publishing.",
        details: [
          "Executing XSLT transformation pipelines",
          "Generating HTML5 versions for web distribution",
          "Auto-validating math elements against MathML schemas",
          "Creating linked cross-reference networks (e.g. CrossRef DOIs)"
        ]
      },
      {
        id: "xml-validation",
        num: "04",
        title: "Quality Check & DTD Validation",
        icon: Eye,
        desc: "Validating XML files against target schema rules and running comprehensive visual checks.",
        details: [
          "Running strict parser checks against JATS/BITS DTD schemas",
          "Verifying metadata tags match the source publication",
          "Checking citation link resolution",
          "Exporting preflight compliance reports for downstream systems"
        ]
      }
    ]
  }
};

const servicesList = [
  { id: "fixed-layout", name: "Fixed Layout EPUB", icon: Layers },
  { id: "reflowable", name: "Reflowable eBook", icon: BookOpen },
  { id: "xml-authoring", name: "XML/HTML Authoring", icon: Code }
];

export default function WorkflowHubPage() {
  const [selectedService, setSelectedService] = useState<"fixed-layout" | "reflowable" | "xml-authoring">("fixed-layout");
  const [activeStep, setActiveStep] = useState("");

  const currentWorkflow = workflows[selectedService];

  useEffect(() => {
    // Default active step to first step of selected workflow
    if (currentWorkflow.steps.length > 0) {
      setActiveStep(currentWorkflow.steps[0].id);
    }
  }, [selectedService, currentWorkflow]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const step of currentWorkflow.steps) {
        const el = document.getElementById(step.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveStep(step.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentWorkflow]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      setActiveStep(id);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-page text-primary relative min-h-screen">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-page relative overflow-hidden border-b border-subtle">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-6 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to services
            </Link>
            <p className="section-label mb-3">Publishing Workflows</p>
            <h1 className="section-title mb-6 max-w-4xl text-balance">
              Our Professional <span className="gold-text">Conversion Workflows</span>
            </h1>
            <p className="text-muted font-body max-w-3xl text-base md:text-lg leading-relaxed">
              We leverage intelligent automation, structured preprocessing, and expert review environments to convert your publications with pixel-level precision and complete platform compliance.
            </p>

            {/* Service Tabs */}
            <div className="flex flex-wrap gap-3 mt-10 border-t border-subtle pt-8">
              {servicesList.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id as any);
                    }}
                    className={`flex items-center gap-3 px-6 py-3 rounded text-xs font-body uppercase tracking-[0.1em] transition-all duration-300 ${
                      isSelected
                        ? "bg-gold text-navy font-semibold border-gold shadow-lg shadow-gold/10"
                        : "bg-surface border border-subtle text-muted hover:border-gold/50 hover:text-gold"
                    }`}
                  >
                    <Icon size={14} />
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workflow Title & Description */}
        <section className="py-12 bg-surface/10 border-b border-subtle">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
                {currentWorkflow.title}
              </h2>
              <p className="text-muted font-body text-sm md:text-base leading-relaxed">
                {currentWorkflow.desc}
              </p>
            </div>
          </div>
        </section>

        {/* Fixed Layout EPUB Diagram Intro */}
        {selectedService === "fixed-layout" && (
          <section className="py-16 bg-surface/30">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
              <div className="max-w-3xl space-y-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
                  The PDF-First Advantage
                </h2>
                <p className="text-muted font-body text-sm md:text-base leading-relaxed">
                  Traditional Fixed Layout (FXL) EPUB conversion often depends on source files such as Adobe InDesign packages, fonts, and linked assets. In many real-world publishing scenarios, these files are unavailable, leaving only the final print-ready PDF.
                </p>
                <p className="text-muted font-body text-sm md:text-base leading-relaxed">
                  Using intelligent PDF analysis and automated preprocessing, we transform text-based PDFs into standards-compliant Fixed Layout EPUBs while preserving the original design, typography, colors, and reading experience—without requiring the original fonts or source files.
                </p>
              </div>

              {/* Diagram Container */}
              <div className="space-y-4 pt-4">
                <div className="border-b border-subtle pb-4 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase bg-gold/10 px-2.5 py-1 rounded inline-block">
                    Visual Architecture
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">
                    PDF-to-EPUB Conversion Process Flow
                  </h3>
                  <p className="text-xs text-subtle font-body max-w-2xl">
                    This diagram details the sequence from analyzing raw PDF input to final device-validated package distribution.
                  </p>
                </div>

                <div className="relative p-6 md:p-10 rounded-lg bg-white border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto flex justify-center items-center">
                  <Image
                    src={workflowGif}
                    alt="Fixed Layout EPUB Conversion process flow diagram"
                    className="w-full h-auto max-w-4xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sticky Workflow Steps Navigation Menu & Steps */}
        <section className="py-20 max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 p-6 rounded-lg bg-surface border border-subtle space-y-6">
                <h3 className="font-display font-semibold text-lg text-primary border-b border-subtle pb-3">
                  Workflow Navigation
                </h3>
                <div className="flex flex-col gap-2">
                  {currentWorkflow.steps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <button
                        key={step.id}
                        onClick={() => scrollToSection(step.id)}
                        className={`flex items-center gap-3 w-full text-left p-3 rounded transition-all duration-300 group ${
                          activeStep === step.id
                            ? "bg-gold/10 text-gold border-l-2 border-gold font-medium"
                            : "text-muted hover:text-primary hover:bg-surface-elevated"
                        }`}
                      >
                        <Icon size={16} className={activeStep === step.id ? "text-gold" : "text-subtle group-hover:text-gold"} />
                        <span className="text-xs font-mono text-subtle/80">{step.num}</span>
                        <span className="text-xs tracking-wider font-body">{step.title}</span>
                      </button>
                    );
                  })}
                  
                  {selectedService === "fixed-layout" && (
                    <button
                      onClick={() => scrollToSection("comparison")}
                      className={`flex items-center gap-3 w-full text-left p-3 rounded transition-all duration-300 group border-t border-subtle mt-2 pt-4 ${
                        activeStep === "comparison"
                          ? "bg-gold/10 text-gold border-l-2 border-gold font-medium"
                          : "text-muted hover:text-primary hover:bg-surface-elevated"
                      }`}
                    >
                      <span className="text-xs font-mono text-subtle/80">★</span>
                      <span className="text-xs tracking-wider font-body">Why We Are Different</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Steps Content Area */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Mobile steps bar */}
              <div className="lg:hidden sticky top-20 z-30 flex gap-2 overflow-x-auto pb-3 pt-2 bg-page/90 backdrop-blur border-b border-subtle scrollbar-thin">
                {currentWorkflow.steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => scrollToSection(step.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-body tracking-wider transition-all ${
                      activeStep === step.id
                        ? "bg-gold text-navy font-semibold"
                        : "bg-surface text-muted border border-subtle"
                    }`}
                  >
                    {step.num}. {step.title.split(" ")[2] || step.title}
                  </button>
                ))}
                {selectedService === "fixed-layout" && (
                  <button
                    onClick={() => scrollToSection("comparison")}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-body tracking-wider transition-all ${
                      activeStep === "comparison"
                        ? "bg-gold text-navy font-semibold"
                        : "bg-surface text-muted border border-subtle"
                    }`}
                  >
                    Why Us
                  </button>
                )}
              </div>

              <div className="space-y-24">
                {currentWorkflow.steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.id}
                      id={step.id}
                      className="scroll-mt-32 border-b border-subtle pb-16 space-y-6"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-gold text-sm tracking-widest bg-gold/10 px-3 py-1 rounded">
                          STEP {step.num}
                        </span>
                        <div className="h-px bg-subtle flex-grow border-b border-subtle" />
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-surface-elevated border border-subtle rounded text-gold">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-2xl text-primary md:text-3xl">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted font-body text-sm md:text-base leading-relaxed max-w-3xl">
                        {step.desc}
                      </p>

                      {"details" in step && step.details && (
                        <ul className="grid md:grid-cols-2 gap-3 pt-2">
                          {step.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs md:text-sm text-muted font-body leading-normal bg-surface-elevated p-3 rounded border border-subtle"
                            >
                              <Check size={14} className="text-gold mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {"subsections" in step && step.subsections && (
                        <div className="grid md:grid-cols-2 gap-6 pt-2">
                          {step.subsections.map((sub, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-5 rounded bg-surface border border-subtle space-y-3"
                            >
                              <h4 className="font-display text-base font-semibold text-gold">
                                {sub.title}
                              </h4>
                              <p className="text-xs md:text-sm text-muted font-body leading-relaxed">
                                {sub.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Comparison Section - Fixed Layout Only */}
              {selectedService === "fixed-layout" && (
                <div id="comparison" className="scroll-mt-32 space-y-8 pt-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-gold text-sm tracking-widest bg-gold/10 px-3 py-1 rounded">
                      COMPARISON
                    </span>
                    <div className="h-px bg-subtle flex-grow border-b border-subtle" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-3xl text-primary">
                      Why Our Process is Different
                    </h3>
                    <p className="text-muted font-body text-sm md:text-base leading-relaxed">
                      Unlike traditional Fixed Layout conversion methods, our workflow is designed specifically for publishers who only have a final PDF.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Traditional Box */}
                    <div className="p-6 rounded-lg bg-surface border border-red-500/20 hover:border-red-500/40 transition-all duration-300 space-y-6">
                      <div className="flex items-center justify-between pb-3 border-b border-subtle">
                        <h4 className="font-display font-bold text-lg text-primary">
                          Traditional Conversion
                        </h4>
                        <span className="text-[10px] font-mono tracking-widest text-red-400 bg-red-400/10 px-2 py-0.5 rounded uppercase">
                          Legacy Flow
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {[
                          "Requires InDesign or source files",
                          "Requires original fonts",
                          "Manual recreation of layouts",
                          "Time-consuming production process",
                          "Higher production costs",
                          "Difficult to handle legacy publications"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-muted font-body leading-normal">
                            <X size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Our Workflow Box */}
                    <div className="p-6 rounded-lg bg-gold/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 space-y-6 glow-gold">
                      <div className="flex items-center justify-between pb-3 border-b border-gold/10">
                        <h4 className="font-display font-bold text-lg text-gold">
                          Our PDF-First Workflow
                        </h4>
                        <span className="text-[10px] font-mono tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded uppercase">
                          Optimized Flow
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {[
                          "Converts directly from text-based PDFs",
                          "No source files required",
                          "No font files required",
                          "Automatically extracts fonts and text attributes from the PDF",
                          "Preserves page layout with pixel-level accuracy",
                          "Interactive review interface for rapid corrections",
                          "Faster turnaround with consistent quality",
                          "Ideal for backlist titles, archived publications, and print-ready books"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-primary font-body leading-normal">
                            <Check size={14} className="text-gold mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="text-center pt-8 bg-surface-elevated p-8 rounded-lg border border-subtle">
                    <p className="text-muted font-body text-sm md:text-base mb-6 max-w-2xl mx-auto">
                      Whether you are converting newly designed publications or decades-old titles, our PDF-first Fixed Layout EPUB solution provides a faster, more scalable, and cost-effective path to digital publishing.
                    </p>
                    <Link href="/#contact" className="btn-primary inline-block text-xs tracking-[0.15em] rounded">
                      DISCUSS YOUR PROJECT
                    </Link>
                  </div>
                </div>
              )}

              {/* Reflowable & XML Generic CTA */}
              {selectedService !== "fixed-layout" && (
                <div className="text-center pt-8 bg-surface-elevated p-8 rounded-lg border border-subtle mt-12">
                  <p className="text-muted font-body text-sm md:text-base mb-6 max-w-2xl mx-auto">
                    Need professional conversion for reflowable eBooks or structured XML formatting? Let&apos;s talk about your project and build a tailored workflow pipeline.
                  </p>
                  <Link href="/#contact" className="btn-primary inline-block text-xs tracking-[0.15em] rounded">
                    START A PROJECT
                  </Link>
                </div>
              )}

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
