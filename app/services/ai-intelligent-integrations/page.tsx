"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AiIntelligentIntegrationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <section className="pt-32 pb-24 bg-page">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              href="/#services-list"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to services
            </Link>
            <p className="section-label mb-3">Service · AI</p>
            <h1 className="section-title mb-4">AI & Intelligent Integrations</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-10">
              We embed LLMs and other AI capabilities into real products — copilots, smart
              search, document intelligence — with clear guardrails and measurable impact.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">
                  Use Cases That Work Well
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Internal copilots that help support, sales, or ops teams answer
                    questions faster using your existing knowledge base.
                  </li>
                  <li>
                    Document understanding pipelines that extract key fields and risks
                    from PDFs, contracts, or forms.
                  </li>
                  <li>
                    Natural language search over product docs, policies, or catalogue
                    data.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">How We Approach It</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Start with a narrow, high-value workflow instead of a vague “AI chat”.</li>
                  <li>
                    Design retrieval and permissioning first, then layer generation on top.
                  </li>
                  <li>
                    Measure whether the AI feature actually saves time or improves quality
                    for your users.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-[15px] text-muted font-body leading-relaxed">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Stack & Infrastructure</h2>
                <p>
                  Depending on your constraints, we work with hosted APIs (OpenAI and
                  others) or self-hosted models, paired with vector stores and traditional
                  databases. We pay close attention to data residency and privacy for
                  regulated industries.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">From Pilot to Production</h2>
                <p>
                  We usually start with a pilot in one team or use case, gather feedback,
                  and then harden the solution for production: adding monitoring,
                  analytics, and clear fallbacks so the experience feels reliable — not
                  experimental — to your users.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

