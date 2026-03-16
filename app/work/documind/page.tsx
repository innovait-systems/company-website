"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function DocuMindCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <section className="pt-32 pb-20 bg-page">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to work
            </Link>
            <p className="section-label mb-3">Case Study · AI Integration</p>
            <h1 className="section-title mb-4">DocuMind</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-8">
              DocuMind is an AI-powered document intelligence SaaS that extracts,
              classifies, and summarises legal and financial documents for Indian
              law firms and chartered accountants, cutting review cycles from hours
              to minutes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Impact
                </p>
                <p className="text-primary font-semibold">
                  ~78% reduction in first-pass review time
                </p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Volume
                </p>
                <p className="text-primary font-semibold">
                  40K+ documents processed in the first 9 months
                </p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">
                  Stack
                </p>
                <p className="text-primary">Python · LLM · React · FastAPI</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Problem Space</h2>
                <p>
                  Senior partners were spending hours skimming long agreements only to
                  flag a handful of issues for associates to follow up on. Important
                  clauses were sometimes missed in the rush, and teams had no standard
                  way of capturing insights across similar documents.
                </p>
                <p>
                  The goal for DocuMind was not to replace lawyers, but to give them a
                  reliable first pass: extract key entities, surface risky clauses, and
                  assemble a concise brief they could trust and edit.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Solution</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    A secure upload pipeline with on-prem storage options for
                    sensitive firms.
                  </li>
                  <li>
                    LLM-powered extraction of parties, dates, obligations, and risk
                    signals configured per practice area.
                  </li>
                  <li>
                    Side-by-side comparison views for similar contracts to highlight
                    deviations from a firm&apos;s playbook.
                  </li>
                  <li>
                    An API layer so firms could plug DocuMind into their existing
                    document management systems.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Measured Outcomes</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    For one mid-sized firm, a typical 80-page contract review went
                    from ~3.5 hours of senior time to under 45 minutes, with the
                    associate doing most of the detailed follow-up.
                  </li>
                  <li>
                    Partners reported being able to review 2–3 extra matters per week
                    without extending working hours.
                  </li>
                  <li>
                    Consistency of issue-spotting improved as all teams started from
                    the same AI-generated checklist instead of ad‑hoc notes.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Implementation</h2>
                <p>
                  We piloted DocuMind with a single practice group, collecting real
                  contracts to fine-tune prompts and define red-flag patterns. Once
                  accuracy stabilised, we onboarded additional groups and exposed the
                  API so other internal tools could request summaries on demand.
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

