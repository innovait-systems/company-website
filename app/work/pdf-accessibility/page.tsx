"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const PRODUCT_URL = "https://pdf-fix.innovait-systems.com";

export default function PdfAccessibilityCaseStudy() {
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
            <p className="section-label mb-3">Case Study · SaaS Platform</p>
            <h1 className="section-title mb-4">PDF Accessibility Hub</h1>
            <p className="text-muted font-body max-w-2xl text-base leading-relaxed mb-6">
              PDF Accessibility Hub is a SaaS product built and operated by Innovait
              Systems that makes PDFs compliant with the PDF/UA-1 accessibility
              standard. Upload a document, and the engine auto-tags and remediates its
              structure; a suite of automatic point tools then verifies the result —
              a full PDF/UA &amp; Matterhorn compliance report, reading-order checks,
              alt-text generation, and content-integrity analysis — with a full editor
              for hands-on remediation.
            </p>

            {/* Prominent link to the live product */}
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold text-sm font-body px-6 py-3 mb-12 hover:opacity-90 transition-opacity"
            >
              Visit the live product — pdf-fix.innovait-systems.com
              <ArrowUpRight size={16} />
            </a>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm font-body">
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">Standard</p>
                <p className="text-primary font-semibold">PDF/UA-1 (ISO 14289-1) · Matterhorn Protocol</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">Model</p>
                <p className="text-primary font-semibold">Credit-metered SaaS, self-serve + enterprise</p>
              </div>
              <div>
                <p className="text-subtle uppercase tracking-[0.2em] text-xs mb-1">Stack</p>
                <p className="text-primary">Next.js · Java (Apache PDFBox, veraPDF) · Supabase · Razorpay</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16 text-muted">
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Problem Space</h2>
                <p>
                  Accessibility regulations (the European Accessibility Act, Section 508,
                  and national equivalents) increasingly require documents to be usable
                  with screen readers. But making a PDF conform to PDF/UA is slow, expert
                  work — tagging the structure tree, fixing reading order, adding alt
                  text — and most teams have no way to even measure where a document
                  stands.
                </p>
                <p>
                  The goal was to turn that specialist workflow into something a
                  non-expert can run in minutes, and an expert can finish by hand.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-lg text-primary">Solution</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>An engine that auto-tags and remediates a document&apos;s structure.</li>
                  <li>
                    Six standalone point tools — compliance report, reading-order
                    verification, content integrity, visual compare, alt-text, and tag
                    cleaner — each returning a report.
                  </li>
                  <li>An interactive editor to fix the tag tree by hand and export a compliant PDF.</li>
                  <li>
                    Credit-metered billing with GST-compliant invoicing, for both
                    self-serve and enterprise customers.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-muted">
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">What It Delivers</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>A pass/fail PDF/UA verdict in an auditor&apos;s vocabulary, in minutes rather than days.</li>
                  <li>Automatic remediation that resolves the majority of common conformance failures.</li>
                  <li>Downloadable compliance reports and a tagged, standards-compliant output PDF.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-lg text-primary">Engineering</h2>
                <p>
                  The accessibility engine is built on Apache PDFBox and veraPDF, wrapped
                  in a warm-JVM service for interactive editing. The product surface is a
                  Next.js application on a self-hosted Supabase stack, with metered
                  billing through Razorpay and GST-compliant tax invoicing.
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
