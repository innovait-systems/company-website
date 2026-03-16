"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function LLMsInEnterpriseArticle() {
  return (
    <>
      <Navbar />
      <main className="bg-page text-primary">
        <article className="pt-32 pb-24 bg-page">
          <div className="max-w-3xl mx-auto px-6">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] uppercase text-subtle hover:text-gold mb-4"
            >
              <ArrowLeft size={14} />
              Back to insights
            </Link>
            <p className="section-label mb-3">AI & Tech</p>
            <h1 className="section-title mb-4">
              LLMs in the Enterprise: What Actually Works, What Doesn&apos;t, and What&apos;s Overhyped
            </h1>
            <p className="text-muted text-sm font-body mb-10">
              After integrating LLMs into three production products in 2024, here&apos;s our
              honest view of where they shine and where we&apos;d still reach for more
              traditional tools.
            </p>

            <div className="space-y-6 text-muted font-body text-[15px] leading-relaxed">
              <h2>Where LLMs Fit Nicely</h2>
              <p>
                In our experience, LLMs work best when they&apos;re helping humans make
                sense of unstructured information, not replacing them. Some patterns that
                consistently deliver value:
              </p>
              <ul>
                <li>
                  <strong>Summarisation and briefing</strong> — turning long documents,
                  tickets, or call transcripts into a one-page brief that gives a human
                  a head start.
                </li>
                <li>
                  <strong>Copilots for internal tools</strong> — where the model can
                  suggest next steps or generate queries, but the system still enforces
                  permissions and business rules.
                </li>
                <li>
                  <strong>Natural language search</strong> — especially over FAQs,
                  policy docs, or product manuals.
                </li>
              </ul>

              <h2>Where We&apos;ve Pulled LLMs Back</h2>
              <p>
                We&apos;ve also had experiments we quietly turned off. Common failure
                modes:
              </p>
              <ul>
                <li>
                  Trying to have the LLM “decide” critical business outcomes (e.g.
                  approve/decline transactions) without a deterministic layer underneath.
                </li>
                <li>
                  Overloading the model with poorly-structured context so responses
                  became slower and less predictable.
                </li>
                <li>
                  Exposing free-form prompts directly to end users without meaningful
                  guardrails, leading to support load when answers were misinterpreted.
                </li>
              </ul>

              <h2>What We&apos;ve Learned About Architecture</h2>
              <p>
                The LLM layer is just one part of a production system. The projects
                that aged well shared a few traits:
              </p>
              <ul>
                <li>
                  Clear separation between the <em>retrieval</em> layer (vector search,
                  filters, permissions) and the <em>generation</em> layer (the model
                  itself).
                </li>
                <li>
                  Strong observability: logging prompts, responses, and basic quality
                  metrics so we can tune or fall back when behaviour drifts.
                </li>
                <li>
                  Fallbacks to simpler, deterministic flows when confidence is low, or
                  for actions that must be exact.
                </li>
              </ul>

              <h2>How to Decide If It&apos;s Worth It</h2>
              <p>
                We now ask three questions before proposing LLMs in a brief:
              </p>
              <ul>
                <li>
                  Is there enough unstructured text where summarisation or rewriting
                  would meaningfully save time?
                </li>
                <li>
                  Can we bound the problem so that mistakes are recoverable and don&apos;t
                  damage trust?
                </li>
                <li>
                  Do we have (or can we collect) the telemetry to learn whether it&apos;s
                  actually helping end users?
                </li>
              </ul>
              <p>
                When the answer is yes, LLMs can feel like a natural extension of the
                product. When it&apos;s no, we&apos;re comfortable saying “not yet” and
                focusing on a more traditional path first.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

